const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const myresult = document.getElementById("myresult");

let age;

mysubmit.onclick = function () {

    age = mytext.value;
    age = Number(age);
    
    if(age >= 18){
        myresult.textContent = `You can enter this site`;
    }
    else if(age < 0){
        myresult.textContent = `Youre age is not valid`;
    }
    else{
        myresult.textContent = `You must be 18+`;
    }
}

