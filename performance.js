'use strict';
// Presentation-only recommendations: no contact details, enrollment or payment state.
const pathOptions={
 reset:{tag:'START WITH A SMALL WIN',title:'Your first five days start here.',description:'Use the free reset guide to rebuild momentum and make room for training.',label:'Get the Free Reset ↗',url:'https://vanderhallventures.gumroad.com/l/cdljs'},
 program:{tag:'PUT A SYSTEM BEHIND YOUR EFFORT',title:'Eight weeks. A repeatable training plan.',description:'Mind Over Muscle is $27 USD, with four weekly sessions of 60–75 minutes. Review the full program before purchasing.',label:'Explore the 8-Week Program →',url:'#program'},
 custom:{tag:'YOUR GOALS. YOUR CIRCUMSTANCES.',title:'Make the plan fit your life.',description:'Explore the $65 Custom Training Blueprint: a four-week plan built around your goals, schedule, equipment, and experience.',label:'Explore the Custom Blueprint ↗',url:'https://vanderhallventures.gumroad.com/l/Custom-Training-Blueprint-4week'}
};
const pathButtons=Array.from(document.querySelectorAll('[data-path]'));
pathButtons.forEach(button=>button.addEventListener('click',()=>{
 const option=pathOptions[button.dataset.path];if(!option)return;
 pathButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 document.getElementById('path-tag').textContent=option.tag;
 document.getElementById('path-title').textContent=option.title;
 document.getElementById('path-description').textContent=option.description;
 const link=document.getElementById('path-link');link.textContent=option.label;link.href=option.url;
 if(typeof window.va==='function')window.va('event',{name:'path_selected',data:{path:button.dataset.path}});
}));
const hero=document.getElementById('top'),mobileAction=document.getElementById('mobile-action');
if(hero&&mobileAction&&'IntersectionObserver' in window){
 new IntersectionObserver(entries=>{mobileAction.hidden=entries[0].isIntersecting;},{threshold:0}).observe(hero);
}
