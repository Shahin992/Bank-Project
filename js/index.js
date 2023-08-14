const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(){
   const emailAddressGet = document.getElementById('email-field');
   const emailAddress = emailAddressGet.value;

   const passwordGet = document.getElementById('password-field');
   const passwordT = passwordGet.value;


   if(emailAddress == 'shahinkhan@gmail.com' && passwordT == '11112003' ){
    window.location.href = 'Bank.html';
   }
   else{
    alert("Plese insert valid Email or password")
   }


    
})


