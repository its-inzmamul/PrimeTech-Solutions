/*!
==========================================================
PrimeTech Solutions
navbar.js
Version 1.0
==========================================================
*/
"use strict";

class PrimeNavbar {

    constructor(){
        this.header = document.querySelector("header");
        this.navbar = document.querySelector(".navbar") || this.header;
        this.menuBtn = document.querySelector(".menu-btn");
        this.navLinks = document.querySelector(".nav-links");
        this.links = document.querySelectorAll(".nav-links a");
        this.sections = document.querySelectorAll("section[id]");

        this.bindEvents();
        this.onScroll();
        this.highlightActive();
    }

    bindEvents(){

        window.addEventListener("scroll",()=>{
            this.onScroll();
            this.highlightActive();
        });

        window.addEventListener("resize",()=>this.closeMenu());

        if(this.menuBtn){
            this.menuBtn.addEventListener("click",()=>this.toggleMenu());
        }

        document.addEventListener("click",(e)=>{
            if(!this.navLinks || !this.menuBtn) return;

            if(
                !this.navLinks.contains(e.target) &&
                !this.menuBtn.contains(e.target)
            ){
                this.closeMenu();
            }
        });

        document.addEventListener("keydown",(e)=>{
            if(e.key==="Escape"){
                this.closeMenu();
            }
        });

        this.links.forEach(link=>{
            link.addEventListener("click",()=>this.closeMenu());
        });

    }

    onScroll(){

        if(!this.navbar) return;

        this.navbar.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    }

    toggleMenu(){

        if(!this.menuBtn || !this.navLinks) return;

        const opened = this.navLinks.classList.toggle("active");

        this.menuBtn.classList.toggle("active",opened);

        this.menuBtn.setAttribute("aria-expanded",opened);

        document.body.style.overflow = opened ? "hidden" : "";

    }

    closeMenu(){

        if(!this.menuBtn || !this.navLinks) return;

        this.navLinks.classList.remove("active");
        this.menuBtn.classList.remove("active");
        this.menuBtn.setAttribute("aria-expanded","false");
        document.body.style.overflow="";

    }

    highlightActive(){

        if(!this.sections.length) return;

        let current="";

        this.sections.forEach(section=>{
            if(window.scrollY >= section.offsetTop-120){
                current = section.id;
            }
        });

        this.links.forEach(link=>{
            const href=(link.getAttribute("href")||"").replace("#","");
            link.classList.toggle("active",href===current);
        });

    }

}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeNavbar();
});

console.log("PrimeTech navbar.js loaded");
