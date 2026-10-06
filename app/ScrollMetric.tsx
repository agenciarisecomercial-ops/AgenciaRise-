'use client';
import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

/** Each new viewport entry starts a fresh, scroll-driven count in either direction. */
export default function ScrollMetric({target,prefix,label}:{target:number;prefix:string;label:string}){
 const root=useRef<HTMLDivElement>(null);
 const number=useRef<HTMLSpanElement>(null);
 const unit=useRef<HTMLElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  let highest=0;
  const render=(progress:number)=>{
   highest=Math.max(highest,Math.min(1,Math.max(0,progress)));
   const value=Math.floor(target*highest);
   const million=value>=1000000;
   if(number.current)number.current.textContent=million?'1':(value/1000).toLocaleString('pt-BR',{minimumFractionDigits:0,maximumFractionDigits:1});
   if(unit.current)unit.current.textContent=million?' milhão':' mil';
  };
  let entryDirection=1;
  const update=(self:ScrollTrigger)=>{
   if(!self.isActive)return;
   const origin=entryDirection===1?self.start:self.end;
   render(entryDirection*(self.scroll()-origin)/(window.innerHeight*.5));
  };
  const enter=(self:ScrollTrigger,direction:number)=>{
   entryDirection=direction;
   highest=0;
   render(0);
   update(self);
  };
  const trigger=ScrollTrigger.create({
   trigger:root.current?.closest('article'),start:'top bottom',end:'bottom top',
   onEnter:self=>enter(self,1),onEnterBack:self=>enter(self,-1),
   onUpdate:update,onRefresh:update,
   onLeave:()=>render(1),onLeaveBack:()=>render(1)
  });
  if(trigger.isActive)update(trigger);else render(trigger.progress);
  return()=>trigger.kill();
 },[target]);
 return <div ref={root} className="metric scroll-metric" aria-label={label}>
  <small aria-hidden="true">{prefix}</small>{' '}
  <span ref={number} aria-hidden="true">{target>=1000000?'1':target/1000}</span>
  <small ref={unit} aria-hidden="true">{target>=1000000?' milhão':' mil'}</small>
 </div>
}
