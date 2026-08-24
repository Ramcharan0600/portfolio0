(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.ticker', {x:0});
    gsap.utils.toArray('.reveal').forEach((el)=>{
      gsap.to(el,{opacity:1,y:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});
    });
    gsap.from('.hero h1',{opacity:0,y:40,duration:1.1,delay:.15,ease:'power3.out'});
    gsap.from('.hero .lede',{opacity:0,y:20,duration:.8,delay:.45,ease:'power2.out'});
    gsap.from('.portrait-wrap',{opacity:0,y:30,scale:.98,duration:1.1,delay:.3,ease:'power3.out'});
  } else {
    document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  }

  const links=[...document.querySelectorAll('nav a')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  }),{rootMargin:'-40% 0px -50% 0px'});
  sections.forEach(s=>io.observe(s));
})();
