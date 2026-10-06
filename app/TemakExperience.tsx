'use client';
import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export default function TemakExperience(){
 const section=useRef<HTMLElement>(null);
 const copy=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add({reduced:'(prefers-reduced-motion: reduce)',regular:'(prefers-reduced-motion: no-preference)'},context=>{
   const reduced=Boolean(context.conditions?.reduced);
   const ctx=gsap.context(()=>{
    const timeline=gsap.timeline({scrollTrigger:{trigger:section.current,start:'top top',end:'bottom bottom',scrub:reduced?true:.35,invalidateOnRefresh:true,onUpdate:self=>{if(copy.current)copy.current.inert=self.progress<.68}}});
    timeline.fromTo('.temak-sauce',{'--pour':'0%'},{'--pour':'110%',duration:.58,ease:'none'},.07)
     .to('.temak-opening',{autoAlpha:0,y:reduced?0:-20,duration:.14},.14)
     .to('.temak-image-stage',{scale:reduced?1:.88,xPercent:reduced?0:24,duration:.25,ease:'power2.inOut'},.65)
     .to('.temak-shade',{opacity:1,duration:.18},.63)
     .fromTo('.temak-copy',{autoAlpha:0,yPercent:-50,y:reduced?0:45},{autoAlpha:1,yPercent:-50,y:0,duration:.2,ease:'power2.out'},.7)
     .to('.temak-scene-progress',{scaleX:1,duration:1,ease:'none'},0);
   },section);
   return()=>{ctx.revert();if(copy.current)copy.current.inert=false};
  });
  return()=>mm.revert();
 },[]);
 return <section ref={section} className="temak-experience" id="cases" aria-label="Temak House: conteúdo, redes sociais e campanhas">
  <div className="temak-sticky">
   <div className="temak-image-stage">
    <img className="temak-photo temak-clean" src="/temak-sushi-clean.jpg" alt="Roll de sushi segurado por hashis em uma cena gastronômica conceitual" width="1536" height="1024" loading="lazy" decoding="async"/>
    <img className="temak-photo temak-sauce" src="/temak-sushi-sauce.jpg" alt="" aria-hidden="true" width="1536" height="1024" loading="lazy" decoding="async"/>
   </div>
   <div className="temak-opening"><span className="eyebrow">02 / CONTEÚDO QUE DESPERTA O DESEJO</span><p>O primeiro contato <br/>já precisa dar<br/><em>vontade.</em></p><span className="temak-scroll-cue">CONTINUE ROLANDO PARA SERVIR</span></div>
   <div className="temak-shade" aria-hidden="true"/>
   <div ref={copy} className="temak-copy">
    <span className="eyebrow">02 / QUEM CONTA COM A RISE</span>
    <h2>Temak<br/><em>House.</em></h2>
    <p className="temak-summary">Três unidades. Uma marca<br/>que dá vontade de conhecer.</p>
    <p className="temak-description">Trabalhamos com a Temak House no Brasil, em Orlando e em Deerfield, criando conteúdo, fortalecendo a presença nas redes sociais e otimizando campanhas.</p>
    <ul className="temak-locations" aria-label="Três unidades atendidas"><li>Brasil</li><li>Orlando</li><li>Deerfield</li></ul>
    <div className="temak-work"><span>Produção de conteúdo</span><span>Presença nas redes sociais</span><span>Otimização de campanhas</span></div>
    <a className="button small temak-instagram" href="https://www.instagram.com/temakhouseorlando/" target="_blank" rel="noopener noreferrer" aria-label="Ver Temak House Orlando no Instagram (abre em nova aba)">Ver no Instagram <span aria-hidden="true">↗</span></a>
   </div>
   <div className="temak-caption"><span>RISE / CONTEÚDO + PERFORMANCE</span><span>Imagem conceitual</span></div>
   <div className="temak-scene-track" aria-hidden="true"><div className="temak-scene-progress"/></div>
  </div>
 </section>
}
