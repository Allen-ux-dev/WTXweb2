
function getEvents(){
  const local=localStorage.getItem('events');
  if(local) return JSON.parse(local);
  return (window.EVENT_HISTORY_DATA&&window.EVENT_HISTORY_DATA.events)||[];
}
function renderEvents(){
  const wrap=document.getElementById('eventsGrid'); if(!wrap) return;
  const events=getEvents();
  if(!events.length){wrap.innerHTML='<div class="empty-state">暂无事件，请到管理页添加。</div>';return;}
  wrap.innerHTML=events.map(e=>`<article class="event-card liquid-glass">
    ${e.image?`<img class="event-image" src="${e.image}" alt="${e.title}">`:''}
    <div class="event-content"><span class="event-date">${e.date||''}</span><h2 class="event-title">${e.title||''}</h2><p class="event-desc">${e.description||''}</p></div>
  </article>`).join('');
}
document.addEventListener('DOMContentLoaded',renderEvents);
