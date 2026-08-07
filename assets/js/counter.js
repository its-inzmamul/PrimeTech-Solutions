/*!
==========================================================
PrimeTech Solutions
counter.js
Version 1.0
==========================================================
*/
"use strict";

class PrimeCounter {

    constructor(){
        this.counters = document.querySelectorAll("[data-counter]");
        if(!this.counters.length) return;
        this.init();
    }

    init(){

        if(!("IntersectionObserver" in window)){
            this.counters.forEach(el=>this.animate(el));
            return;
        }

        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    this.animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },{
            threshold:0.4
        });

        this.counters.forEach(el=>observer.observe(el));
    }

    animate(el){

        const target = Number(el.dataset.counter)||0;
        const duration = Number(el.dataset.duration)||1800;
        const prefix = el.dataset.prefix||"";
        const suffix = el.dataset.suffix||"";

        let start = null;

        const step = (time)=>{
            if(!start) start = time;

            const progress = Math.min((time-start)/duration,1);
            const value = Math.floor(progress*target);

            el.textContent = `${prefix}${value}${suffix}`;

            if(progress<1){
                requestAnimationFrame(step);
            }else{
                el.textContent = `${prefix}${target}${suffix}`;
            }
        };

        requestAnimationFrame(step);
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeCounter();
});

console.log("PrimeTech counter.js loaded");
