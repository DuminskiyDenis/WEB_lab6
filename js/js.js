
function validFunc() {
    
    const reName = /^.+\s.+\s?.*$/i;
    const name = document.getElementById("name").value;
    const validName =  reName.test(name);
    if(validName) {
        document.getElementById("name").style.border='solid green'
        document.getElementById('nameValid').innerHTML =`ПІБ: ${name}`;
    } else {
        document.getElementById("name").style.border='solid red'
        document.getElementById('nameValid').innerHTML = "Невірне ПІБ"
    }

   
   const reDate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
   const date = document.getElementById("date").value;
   const validDate =  reDate .test(date);
   if(validDate) {
       document.getElementById("date").style.border='solid green'
       document.getElementById('dateValid').innerHTML = `Дата народження: ${date}`;
   }else{
       document.getElementById("date").style.border='solid red'
       document.getElementById('dateValid').innerHTML = "Невірна дата народження"
   }


   const reAddress = /^[a-zA-Zа-яА-Я -.]+$/;
   const address = document.getElementById('address').value;
   const validAddress = reAddress.test(address);
   if (validAddress){
       document.getElementById("address").style.border='solid green'
       document.getElementById('addressValid').innerHTML = `Адреса: ${address}`;
   }else {
       document.getElementById("address").style.border='solid red'
       document.getElementById('addressValid').innerHTML = "Невалідна адреса";
   }

 
    const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const email = document.getElementById('email').value;
    const validEmail = reEmail.test(email);
    if (validEmail){
        document.getElementById("email").style.border='solid green'
        document.getElementById('emailValid').innerHTML = `Пошта: ${email}`;
    }else {
        document.getElementById("email").style.border='solid red'
        document.getElementById('emailValid').innerHTML = "Невалідний адрес пошти";
    }


    const reTelegram = /^[a-zA-Z - @]+$/;
    const telegram = document.getElementById("telegram").value;
    const validTelegram =  reTelegram.test(telegram);
    if(validTelegram) {
        document.getElementById("telegram").style.border='solid green'
        document.getElementById('telegramValid').innerHTML = `Telegram: ${telegram}`;
    }else{
        document.getElementById("telegram").style.border='solid red'
        document.getElementById('telegramValid').innerHTML = "Невірний telegram"
    }

    


}



const first = document.getElementById('sixteen');
const row1 = document.getElementById('row2');
const colorInput = document.getElementById('colorInput');


function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min);
};
 
first.addEventListener("mouseover", function() {
    sixteen.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    
});

first.addEventListener("click", function() {
    sixteen.style.backgroundColor= colorInput.value;
    seventeen.style.backgroundColor= colorInput.value;
    eightteen.style.backgroundColor= colorInput.value;

    twenty_two.style.backgroundColor= colorInput.value;
    twenty_three.style.backgroundColor= colorInput.value;
    twenty_four.style.backgroundColor= colorInput.value;

    twenty_eight.style.backgroundColor= colorInput.value;
    twenty_nine.style.backgroundColor= colorInput.value;
    thirty.style.backgroundColor= colorInput.value;

    thirty_four.style.backgroundColor= colorInput.value;
    thirty_five.style.backgroundColor= colorInput.value;
    thirty_six.style.backgroundColor= colorInput.value;
});


first.addEventListener("dblclick", function() {
    row2.style.backgroundColor = colorInput.value;
});
