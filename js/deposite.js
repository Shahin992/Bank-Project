
document.getElementById('deposit-btn').addEventListener('click',function(){
    

    const depositField = document.getElementById('deposit-input');
    const depositAmountString = depositField.value;
    const depositFinalAmout = parseFloat(depositAmountString);
   
   
    


    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousFinalAmount = parseFloat(previousBalanceString);

    const totalDeposit = previousFinalAmount + depositFinalAmout;
    previousBalance.innerText = totalDeposit;
    depositField.value = '';

    const newBalance = document.getElementById('new-balance')
    const newBalanceString = newBalance.innerText;
    const newBalanceFinal=parseFloat(newBalanceString);

    const totalNewBanlance = totalDeposit + newBalanceFinal;
    newBalance.innerText = totalNewBanlance;


})