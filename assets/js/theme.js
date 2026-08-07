/*!
==========================================================
PrimeTech Solutions
theme.js
Theme Manager
Version 1.0
==========================================================
*/
"use strict";

class PrimeTheme {

    constructor(){
        this.toggle=document.querySelector(".theme-toggle");
        this.storageKey="primetech-theme";
        this.init();
    }

    init(){
        const saved=localStorage.getItem(this.storageKey);
        if(saved){
            this.apply(saved);
        }else{
            this.apply("dark");
        }

        if(this.toggle){
            this.toggle.addEventListener("click",()=>this.switchTheme());
        }
    }

    switchTheme(){
        const current=document.documentElement.dataset.theme==="light"?"light":"dark";
        const next=current==="dark"?"light":"dark";
        this.apply(next);
    }

    apply(theme){
        document.documentElement.dataset.theme=theme;
        localStorage.setItem(this.storageKey,theme);

        if(this.toggle){
            this.toggle.setAttribute("aria-label",
                theme==="dark"?"Switch to light mode":"Switch to dark mode");
            this.toggle.classList.toggle("active",theme==="light");
        }
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeTheme();
});

console.log("PrimeTech theme.js loaded");
