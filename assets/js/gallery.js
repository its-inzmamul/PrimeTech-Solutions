/*!
==========================================================
PrimeTech Solutions
gallery.js
Version 1.0
==========================================================
*/
"use strict";

class PrimeGallery {

    constructor(){
        this.filterButtons = document.querySelectorAll(".gallery-filter button");
        this.items = document.querySelectorAll(".gallery-item");
        this.lightbox = document.querySelector(".lightbox");
        this.lightboxImg = document.querySelector(".lightbox img");
        this.bindEvents();
    }

    bindEvents(){

        // Filter
        this.filterButtons.forEach(btn=>{
            btn.addEventListener("click",()=>{

                this.filterButtons.forEach(b=>b.classList.remove("active"));
                btn.classList.add("active");

                const category = btn.dataset.filter;

                this.items.forEach(item=>{

                    if(category==="all" || item.dataset.category===category){
                        item.style.display="block";
                        requestAnimationFrame(()=>{
                            item.style.opacity="1";
                            item.style.transform="scale(1)";
                        });
                    }else{
                        item.style.opacity="0";
                        item.style.transform="scale(.95)";
                        setTimeout(()=>{
                            item.style.display="none";
                        },200);
                    }

                });

            });
        });

        // Lightbox
        this.items.forEach(item=>{
            const img = item.querySelector("img");
            if(!img) return;

            img.addEventListener("click",()=>{
                this.open(img.src,img.alt);
            });
        });

        if(this.lightbox){

            this.lightbox.addEventListener("click",(e)=>{
                if(e.target===this.lightbox){
                    this.close();
                }
            });

            document.addEventListener("keydown",(e)=>{
                if(e.key==="Escape"){
                    this.close();
                }
            });

        }

    }

    open(src,alt){

        if(!this.lightbox || !this.lightboxImg) return;

        this.lightboxImg.src = src;
        this.lightboxImg.alt = alt;

        this.lightbox.classList.add("show");

        document.body.style.overflow="hidden";

    }

    close(){

        if(!this.lightbox) return;

        this.lightbox.classList.remove("show");

        document.body.style.overflow="";

    }

}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeGallery();
});

console.log("PrimeTech gallery.js loaded");
