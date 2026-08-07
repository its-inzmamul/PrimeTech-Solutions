/*!
==========================================================
PrimeTech Solutions
animations.js
Version 1.0
==========================================================
*/
"use strict";

class PrimeAnimations {

    constructor(){
        this.items = document.querySelectorAll(".reveal");
        this.counters = document.querySelectorAll("[data-counter]");
        this.initReveal();
        this.initCounters();
    }

    initReveal(){

        if(!("IntersectionObserver" in window)){
            this.items.forEach(el=>el.classList.add("active"));
            return;
        }

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },{
            threshold:0.15,
            rootMargin:"0px 0px -60px 0px"
        });

        this.items.forEach((el,index)=>{
            el.style.transitionDelay = `${index*80}ms`;
            observer.observe(el);
        });

    }

    initCounters(){

        if(!this.counters.length) return;

        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(!entry.isIntersecting) return;

                const el = entry.target;
                const target = parseInt(el.dataset.counter || "0",10);
                const duration = 1500;
                const start = performance.now();

                const animate = now=>{
                    const progress = Math.min((now-start)/duration,1);
                    el.textContent = Math.floor(progress*target);
                    if(progress<1){
                        requestAnimationFrame(animate);
                    }else{
                        el.textContent = target;
                    }
                };

                requestAnimationFrame(animate);
                observer.unobserve(el);
            });
        },{threshold:.4});

        this.counters.forEach(el=>observer.observe(el));
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeAnimations();
});

console.log("PrimeTech animations.js loaded");
