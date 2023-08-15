
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawString =withdrawInput.value;
    const withdrawInputFinal = parseFloat(withdrawString);

    if(withdrawInputFinal < 0){
        alert('Please Withdraw more than 0 Dollar');
        withdrawInput.value = '';
        return;
    }



    if (isNaN(withdrawInputFinal)){
        alert('Please withdraw a number');
        withdrawInput.value = '';
        return;

    }


 

    const previousWithdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawString = previousWithdrawBalance.innerText;
    const previousWithdrawFinal = parseFloat(previousWithdrawString);

    


   

    const newBalance = document.getElementById('new-balance')
    const newBalanceString = newBalance.innerText;
    const newBalanceFinal=parseFloat(newBalanceString);

    if(withdrawInputFinal > newBalanceFinal){
        alert("you can't withdraw more than your balance");
        withdrawInput.value = '';
        return;

    }

    const totalWithdraw = withdrawInputFinal + previousWithdrawFinal;
    previousWithdrawBalance.innerText = totalWithdraw;

    withdrawInput.value = '';

  
     const totalNewBanlance = newBalanceFinal - withdrawInputFinal;
     newBalance.innerText = totalNewBanlance;

    


})