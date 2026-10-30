'use strict';
// Intent events are clicks, never verified enrollments, purchases or completions.
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
if(menu&&nav){const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');};menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});}
document.querySelectorAll('[data-event]').forEach(a=>a.addEventListener('click',()=>{if(typeof window.va==='function')window.va('event',{name:a.dataset.event});}));
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
const planner=document.querySelector('#planner');
if(planner){
 const key='vv-reset-companion-v1',checks=Array.from(planner.querySelectorAll('input[type="checkbox"]')),status=document.querySelector('#status');let saved={},persistent=true;
 try{const raw=JSON.parse(localStorage.getItem(key)||'{}');if(raw&&typeof raw==='object'&&!Array.isArray(raw))saved=raw;}catch{persistent=false;}
 const render=()=>{const count=checks.filter(c=>c.checked).length;document.querySelector('#count').textContent=`${count} of 5 actions completed`;document.querySelector('#progress').setAttribute('aria-valuenow',String(count));document.querySelector('#fill').style.width=`${count*20}%`;checks.forEach(c=>c.closest('.day').classList.toggle('complete',c.checked));document.querySelector('#finished').hidden=count!==5;};
 checks.forEach(c=>{c.checked=saved[c.id]===true;c.addEventListener('change',()=>{saved[c.id]=c.checked;render();try{localStorage.setItem(key,JSON.stringify(saved));persistent=true;}catch{persistent=false;}status.textContent=persistent?'Saved in this browser only.':'Progress is available for this visit only. Browser storage is unavailable.';});});
 document.querySelector('#clear').addEventListener('click',()=>{if(!window.confirm('Clear the five checkmarks saved in this browser?'))return;checks.forEach(c=>c.checked=false);saved={};try{localStorage.removeItem(key);}catch{}render();status.textContent='Your checkmarks have been cleared.';});
 if(!persistent)status.textContent='Browser storage is unavailable. You can still use this checklist during this visit.';render();
}
