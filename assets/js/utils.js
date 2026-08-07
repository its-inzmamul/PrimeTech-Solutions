/*!
==========================================================
PrimeTech Solutions
utils.js
Shared Utility Functions
Version 1.0
==========================================================
*/
"use strict";

const Utils = {

    qs(selector, scope=document){
        return scope.querySelector(selector);
    },

    qsa(selector, scope=document){
        return [...scope.querySelectorAll(selector)];
    },

    on(element, event, handler, options=false){
        if(element){
            element.addEventListener(event, handler, options);
        }
    },

    addClass(el, cls){
        if(el) el.classList.add(cls);
    },

    removeClass(el, cls){
        if(el) el.classList.remove(cls);
    },

    toggleClass(el, cls){
        if(el) el.classList.toggle(cls);
    },

    debounce(fn, delay=250){
        let timer;
        return (...args)=>{
            clearTimeout(timer);
            timer = setTimeout(()=>fn(...args), delay);
        };
    },

    throttle(fn, limit=200){
        let waiting = false;
        return (...args)=>{
            if(waiting) return;
            fn(...args);
            waiting = true;
            setTimeout(()=>waiting=false, limit);
        };
    },

    scrollToId(id){
        const el = document.getElementById(id);
        if(el){
            el.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    },

    copy(text){
        if(navigator.clipboard){
            return navigator.clipboard.writeText(text);
        }
        return Promise.reject("Clipboard API not supported");
    },

    formatPhone(number){
        return String(number).replace(/\D/g,"");
    }

};

window.Utils = Utils;

console.log("PrimeTech utils.js loaded");
