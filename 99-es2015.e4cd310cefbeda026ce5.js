(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{cmQl:function(n,t,e){"use strict";e.r(t),e.d(t,"mdTransitionAnimation",(function(){return o})),e("54nT"),e("AfW+"),e("aiEM");var i=e("iAHb"),a=(e("kBU6"),e("Uch9"));const o=(n,t)=>{const e="back"===t.direction,o=t.enteringEl,r=t.leavingEl,c=Object(a.b)(o),s=c.querySelector("ion-toolbar"),d=Object(i.a)();if(d.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),e?d.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(t.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),s){const n=Object(i.a)();n.addElement(s),d.addAnimation(n)}if(r&&e){d.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=Object(i.a)();n.addElement(Object(a.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),d.addAnimation(n)}return d}}}]);