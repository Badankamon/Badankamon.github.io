// Mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('site-nav');
  toggle && toggle.addEventListener('click',function(){
    if(nav.style.display==='block'){nav.style.display=''}else{nav.style.display='block'}
  });

  // set year
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth<=700 && nav) nav.style.display='';
      }
    });
  });
});
