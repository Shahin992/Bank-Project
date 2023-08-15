
document.getElementById('deposit-btn').addEventListener('click',function(){
    

    const depositField = document.getElementById('deposit-input');
    const depositAmountString = depositField.value;
    const depositFinalAmout = parseFloat(depositAmountString);

    if(depositFinalAmout <0){
        alert('Please deposit more than 0 Dollar');
        depositField.value = '';
        return;
        
    }
    if (isNaN(depositFinalAmout)){
        alert('Please deposit a number');
        depositField.value = '';
        return;

    }
   
   
    


    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousFinalAmount = parseFloat(previousBalanceString);

    const totalDeposit = previousFinalAmount + depositFinalAmout;
    previousBalance.innerText = totalDeposit;
    depositField.value = '';

    const newBalance = document.getElementById('new-balance')
    const newBalanceString = newBalance.innerText;
    const newBalanceFinal=parseFloat(newBalanceString);

    const totalNewBanlance = newBalanceFinal + depositFinalAmout;
    newBalance.innerText = totalNewBanlance;


})