/*!
==========================================================
PrimeTech Solutions
contact.js
Professional Contact Module
Version 1.0
==========================================================
*/
"use strict";

class PrimeContact {

    constructor(){
        this.form = document.querySelector("#contactForm");

        if(!this.form) return;

        this.bindEvents();
    }

    bindEvents(){

        this.form.addEventListener("submit",(e)=>{
            e.preventDefault();

            if(!this.validate()){
                return;
            }

            this.sendWhatsApp();
        });

    }

    validate(){

        let valid = true;

        const requiredFields =
            this.form.querySelectorAll("[required]");

        requiredFields.forEach(field=>{

            field.classList.remove("error");

            if(field.value.trim()===""){
                field.classList.add("error");
                valid = false;
            }

        });

        if(!valid){
            alert("Please fill all required fields.");
        }

        return valid;

    }

    sendWhatsApp(){

        const name =
            this.form.querySelector("[name=name]")?.value || "";

        const phone =
            this.form.querySelector("[name=phone]")?.value || "";

        const email =
            this.form.querySelector("[name=email]")?.value || "";

        const service =
            this.form.querySelector("[name=service]")?.value || "";

        const message =
            this.form.querySelector("[name=message]")?.value || "";

        const text =
`*PrimeTech Solutions Enquiry*

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

🖥 Service:
${service}

📝 Message:
${message}`;

        const url =
`https://wa.me/918409813862?text=${encodeURIComponent(text)}`;

        window.open(url,"_blank");

        this.form.reset();

    }

}

document.addEventListener("DOMContentLoaded",()=>{
    new PrimeContact();
});

console.log("PrimeTech contact.js loaded");
