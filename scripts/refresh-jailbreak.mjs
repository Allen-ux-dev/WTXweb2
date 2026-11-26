#!/usr/bin/env node
/**
 * 刷新 data/jailbreak.json 里每个工具的「最新版本 / 最近活动」。
 * 只读 GitHub 公开 API，不改人工核定的覆盖范围与结论。
 *
 *   node scripts/refresh-jailbreak.mjs          # 需要 GITHUB_TOKEN 时自动读取
 *   GITHUB_TOKEN=xxx node scripts/refresh-jailbreak.mjs
 */

import { readFile, writeFile } from 'node:fs/promises';

const DATA = new URL('../data/jailbreak.json', import.meta.url);
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const headers = { 'User-Agent': 'wtx-jailbreak-refresh', Accept: 'application/vnd.github+json' };
if (token) headers.Authorization = `Bearer ${token}`;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function api(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status} ${res.statusText}`);
  return res.json();
}

const ymd = iso => (iso ? String(iso).slice(0, 10) : '');

async function latestFor(repo) {
  const release = await api(`/repos/${repo}/releases/latest`);
  if (release && !release.draft) {
    return { tag: release.tag_name || '', date: ymd(release.published_at), url: release.html_url || '' };
  }
  const tags = await api(`/repos/${repo}/tags?per_page=1`);
  if (Array.isArray(tags) && tags.length) {
    const tag = tags[0].name || '';
    const ref = await api(`/repos/${repo}/commits/${encodeURIComponent(tag)}`);
    return { tag, date: ymd(ref?.commit?.committer?.date || ref?.commit?.author?.date), url: `https://github.com/${repo}/releases` };
  }
  const repoInfo = await api(`/repos/${repo}`);
  if (repoInfo) {
    return { tag: '', date: ymd(repoInfo.pushed_at), url: `https://github.com/${repo}` };
  }
  return null;
}

const data = JSON.parse(await readFile(DATA, 'utf8'));
let changed = 0;

for (const tool of data.tools || []) {
  if (!tool.repo) continue;
  try {
    const next = await latestFor(tool.repo);
    if (!next) { console.warn(`skip ${tool.repo}: not found`); continue; }
    const prev = tool.latest || {};
    if (prev.tag !== next.tag || prev.date !== next.date) {
      tool.latest = { ...prev, ...next };
      changed += 1;
      console.log(`update ${tool.name}: ${next.tag || '(no tag)'} ${next.date}`);
    }
  } catch (err) {
    console.warn(`fail ${tool.repo}: ${err.message}`);
  }
  await sleep(250);
}

data.checkedAt = new Date().toISOString().slice(0, 10);
await writeFile(DATA, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`done, ${changed} tool(s) updated, checkedAt=${data.checkedAt}`);
