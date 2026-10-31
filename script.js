(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover)').matches;

  // count-up numbers: reads data-count / data-decimals / data-suffix / data-format
  const fmt = (el, v) => {
    const d = +(el.dataset.decimals || 0);
    const s = el.dataset.format === 'comma' ? Math.round(v).toLocaleString('en-US') : v.toFixed(d);
    return s + (el.dataset.suffix || '');
  };
  const countUp = (el) => {
    const end = parseFloat(el.dataset.count);
    const t0 = performance.now(), dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = fmt(el, end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!reduce && window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach((el)=>{
      gsap.to(el,{opacity:1,y:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});
    });
    gsap.from('.hero h1',{opacity:0,y:40,duration:1.1,delay:.15,ease:'power3.out'});
    gsap.from('.hero .lede',{opacity:0,y:20,duration:.8,delay:.45,ease:'power2.out'});
    gsap.from('.portrait-wrap',{opacity:0,y:30,scale:.98,duration:1.1,delay:.3,ease:'power3.out'});
    document.querySelectorAll('[data-count]').forEach(el=>{
      el.textContent = fmt(el, 0);
      ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:()=>countUp(el)});
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  }

  // rotating hero word
  const rot = document.querySelector('.rotator');
  if (rot && !reduce) {
    const words = rot.dataset.words.split(',');
    let i = 0;
    setInterval(()=>{
      rot.classList.add('out');
      setTimeout(()=>{ i = (i + 1) % words.length; rot.textContent = words[i]; rot.classList.remove('out'); }, 300);
    }, 2600);
  }

  // scroll progress bar
  const bar = document.querySelector('.progress');
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.transform = 'scaleX(' + (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) + ')';
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if (fine && !reduce) {
    // cursor glow
    const glow = document.querySelector('.cursor-glow');
    window.addEventListener('mousemove', (e)=>{
      glow.classList.add('on');
      glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    }, {passive:true});
    document.addEventListener('mouseleave', ()=>glow.classList.remove('on'));

    // spotlight follows the cursor inside skill cards
    document.querySelectorAll('.skill').forEach(card=>{
      card.addEventListener('mousemove', (e)=>{
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    // portrait tilt
    const wrap = document.querySelector('.portrait-wrap');
    if (wrap) {
      wrap.addEventListener('mousemove', (e)=>{
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        wrap.style.transform = 'perspective(900px) rotateY(' + (x * 7) + 'deg) rotateX(' + (-y * 7) + 'deg)';
      });
      wrap.addEventListener('mouseleave', ()=>{ wrap.style.transform = ''; });
    }
  }

  // active nav link
  const links=[...document.querySelectorAll('nav a')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  }),{rootMargin:'-40% 0px -50% 0px'});
  sections.forEach(s=>io.observe(s));
})();
