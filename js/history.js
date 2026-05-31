
function getHistories(){
  const local=localStorage.getItem('histories');
  if(local) return JSON.parse(local);
  return (window.EVENT_HISTORY_DATA&&window.EVENT_HISTORY_DATA.histories)||[];
}
function renderHistories(){
  const wrap=document.getElementById('historyGrid'); if(!wrap) return;
  const items=getHistories();
  if(!items.length){wrap.innerHTML='<div class="empty-state">暂无历史，请到管理页添加。</div>';return;}
  wrap.innerHTML=items.map(h=>`<article class="history-card liquid-glass">
    ${h.image?`<img class="history-image" src="${h.image}" alt="${h.title}">`:''}
    <div class="history-card-content"><span class="history-date">${h.date||''}</span><h2 class="history-title">${h.title||''}</h2><p class="history-desc">${h.description||''}</p></div>
  </article>`).join('');
}
document.addEventListener('DOMContentLoaded',renderHistories);
