/*!
==========================================================
PrimeTech Solutions
main.js
Version 1.0
==========================================================
*/
"use strict";

const PrimeTech = {
  init() {
    this.cache();
    this.bind();
    this.setYear();
    this.reveal();
  },

  cache() {
    this.backTop = document.querySelector(".back-to-top");
    this.revealItems = document.querySelectorAll(".reveal");
  },

  bind() {
    window.addEventListener("scroll", () => {
      this.reveal();
      this.toggleBackTop();
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth"});
      });
    });
  },

  reveal() {
    const trigger = window.innerHeight * 0.88;
    this.revealItems.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("active");
      }
    });
  },

  toggleBackTop() {
    if (!this.backTop) return;
    this.backTop.classList.toggle("show", window.scrollY > 400);
  },

  setYear() {
    document.querySelectorAll(".current-year").forEach(el=>{
      el.textContent = new Date().getFullYear();
    });
  }
};

document.addEventListener("DOMContentLoaded", () => PrimeTech.init());

function openWhatsApp(number="918409813862"){
  window.open(`https://wa.me/${number}`,"_blank");
}

function callPrimary(){
  window.location.href="tel:+918409813862";
}

console.log("PrimeTech main.js loaded");
