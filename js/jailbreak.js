/* 越狱进度看板 —— 数据来自 data/jailbreak.json */
(function () {
    'use strict';

    var DATA_URL = 'data/jailbreak.json';
    var state = { filter: 'all', data: null };
    var VERDICT_ORDER = { yes: 0, partial: 1, no: 2 };
    var VERDICT_LABEL = { yes: '现在能用', partial: '部分相关', no: '暂不支持' };

    function $(sel, root) { return (root || document).querySelector(sel); }
    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }
    function safeUrl(u) {
        return typeof u === 'string' && /^https?:\/\//.test(u) ? u : '';
    }

    function renderHero(data) {
        var host = $('#jbHeroMeta');
        if (!host) return;
        host.textContent = '';
        var dev = data.device || {};
        var chip = el('span', 'jb-chip');
        chip.appendChild(el('b', null, dev.name || '本机'));
        chip.appendChild(document.createTextNode(' · ' + (dev.soc || '?') + ' · iOS ' + (dev.ios || '?')));
        host.appendChild(chip);

        var usable = (data.tools || []).filter(function (t) { return t.verdict === 'yes'; }).length;
        var partial = (data.tools || []).filter(function (t) { return t.verdict === 'partial'; }).length;
        var verdict = el('span', 'jb-verdict');
        verdict.textContent = usable + ' 项可用' + (partial ? ' · ' + partial + ' 项研究样本' : '') + ' · 越狱暂无成品';
        host.appendChild(verdict);

        if (dev.note) {
            var note = $('#jbDeviceNote');
            if (note) note.textContent = dev.note;
        }
    }

    function renderStats(data) {
        var host = $('#jbStats');
        if (!host) return;
        host.textContent = '';
        ['yes', 'partial', 'no'].forEach(function (key) {
            var n = (data.tools || []).filter(function (t) { return t.verdict === key; }).length;
            var box = el('div', 'jb-stat jb-stat--' + key);
            box.appendChild(el('span', 'jb-stat-num', String(n)));
            box.appendChild(el('span', 'jb-stat-label', VERDICT_LABEL[key]));
            host.appendChild(box);
        });
    }

    function matches(tool, filter) {
        if (filter === 'all') return true;
        if (filter === 'yes') return tool.verdict === 'yes';
        if (filter === 'jailbreak') return tool.kind === 'jailbreak' || tool.kind === 'research';
        if (filter === 'tool') return tool.kind === 'sideload' || tool.kind === 'tool';
        return true;
    }

    function buildRow(tool) {
        var row = el('article', 'jb-row');
        row.dataset.verdict = tool.verdict || 'no';
        row.dataset.kind = tool.kind || 'tool';

        var head = el('div', 'jb-cell jb-cell--name');
        var name = el('a', 'jb-name', tool.name);
        name.href = safeUrl(tool.homepage) || safeUrl(tool.repo ? 'https://github.com/' + tool.repo : '');
        name.target = '_blank';
        name.rel = 'noopener';
        head.appendChild(name);
        head.appendChild(el('span', 'jb-kind', tool.kindLabel || ''));
        row.appendChild(head);

        var cov = el('div', 'jb-cell jb-cell--cov');
        cov.appendChild(el('span', 'jb-k', '覆盖'));
        cov.appendChild(el('span', 'jb-v', tool.coverage || '—'));
        row.appendChild(cov);

        var status = el('div', 'jb-cell jb-cell--status');
        var pill = el('span', 'jb-pill jb-pill--' + (tool.verdict || 'no'));
        pill.appendChild(el('i', 'jb-dot'));
        pill.appendChild(document.createTextNode(tool.verdictText || VERDICT_LABEL[tool.verdict || 'no']));
        status.appendChild(pill);
        row.appendChild(status);

        var latest = el('div', 'jb-cell jb-cell--latest');
        var l = tool.latest || {};
        var text = [l.tag, l.date].filter(Boolean).join(' · ') || '仓库直取';
        latest.appendChild(el('span', 'jb-k', '最新'));
        latest.appendChild(el('span', 'jb-v jb-mono', text));
        row.appendChild(latest);

        if (tool.note) {
            row.appendChild(el('p', 'jb-note', tool.note));
        }
        return row;
    }

    function renderList() {
        var host = $('#jbList');
        if (!host || !state.data) return;
        host.textContent = '';
        var index = {};
        (state.data.tools || []).forEach(function (t, i) { index[t.id] = i; });
        var tools = (state.data.tools || []).slice().sort(function (a, b) {
            var d = (VERDICT_ORDER[a.verdict] || 0) - (VERDICT_ORDER[b.verdict] || 0);
            return d !== 0 ? d : index[a.id] - index[b.id];
        }).filter(function (t) { return matches(t, state.filter); });

        if (!tools.length) {
            host.appendChild(el('p', 'jb-empty', '这个筛选下没有条目。'));
            return;
        }
        var frag = document.createDocumentFragment();
        tools.forEach(function (t) { frag.appendChild(buildRow(t)); });
        host.appendChild(frag);
    }

    function renderFooter(data) {
        var upd = $('#jbUpdated');
        if (upd) upd.textContent = data.checkedAt || '未标注';
        var note = $('#jbCuratedNote');
        if (note) note.textContent = data.curatedNote || '';

        var watch = $('#jbWatch');
        if (watch && data.watch) {
            watch.textContent = '';
            data.watch.forEach(function (w) {
                var a = el('a', 'jb-watch-link', w.label);
                a.href = safeUrl(w.url);
                a.target = '_blank';
                a.rel = 'noopener';
                watch.appendChild(a);
            });
        }
    }

    function bindFilters() {
        var bar = $('#jbFilters');
        if (!bar) return;
        bar.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-filter]');
            if (!btn) return;
            state.filter = btn.dataset.filter;
            Array.prototype.forEach.call(bar.querySelectorAll('[data-filter]'), function (b) {
                b.classList.toggle('is-active', b === btn);
            });
            renderList();
        });
    }

    function bindRefresh() {
        var btn = $('#jbRefresh');
        if (!btn) return;
        btn.addEventListener('click', function () {
            btn.disabled = true;
            btn.classList.add('is-busy');
            load(true).finally(function () {
                btn.disabled = false;
                btn.classList.remove('is-busy');
            });
        });
    }

    function paint(data) {
        state.data = data;
        renderHero(data);
        renderStats(data);
        renderList();
        renderFooter(data);
    }

    function load(force) {
        var url = DATA_URL + (force ? '?t=' + Date.now() : '');
        return fetch(url, { cache: force ? 'no-store' : 'default' })
            .then(function (r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.json();
            })
            .then(paint)
            .catch(function (err) {
                var host = $('#jbList');
                if (host) {
                    host.textContent = '';
                    host.appendChild(el('p', 'jb-empty', '数据没读出来（' + err.message + '）。直接看 data/jailbreak.json 也行。'));
                }
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        bindFilters();
        bindRefresh();
        load(false);
    });
})();
