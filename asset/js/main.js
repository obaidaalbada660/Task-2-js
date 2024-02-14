var registerform = document.querySelector(".registerForm");
var result;
registerform.onsubmit = function(e) {
    e.preventDefault();
   var element =  e.target.elements;
   var amount =  element['amount'].value;
   var select = element['exchange'].value;
   if(select == "dollar"){
    result= amount * 0.27;
    document.querySelector(".result").innerHTML = result;
   }
   else if(select == "dinar"){
    result= amount * 0.19;
    document.querySelector(".result").innerHTML = result;
   }
   else{
    document.querySelector(".result").innerHTML = amount;
   }
}