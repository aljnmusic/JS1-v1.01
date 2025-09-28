const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `You are subscribe`;
    }
    else{
        subresult.textContent = `You are not subscribe`;
    }

    if(visabtn.checked){
        paymentresult.textContent = `You are paying with visa`;
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = `You are paying with mastercard`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = `You are paying with paypal`; 
    }
    else{
        paymentresult.textContent = `You must select a payment method`;
    }
}