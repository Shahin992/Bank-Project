
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawString =withdrawInput.value;
    const withdrawInputFinal = parseFloat(withdrawString);

    const previousWithdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawString = previousWithdrawBalance.innerText;
    const previousWithdrawFinal = parseFloat(previousWithdrawString);

    const totalWithdraw = withdrawInputFinal + previousWithdrawFinal;
    previousWithdrawBalance.innerText = totalWithdraw;

    withdrawInput.value = '';

    const newBalance = document.getElementById('new-balance')
    const newBalanceString = newBalance.innerText;
    const newBalanceFinal=parseFloat(newBalanceString);

    const totalNewBanlance = newBalanceFinal - totalWithdraw;
    newBalance.innerText = totalNewBanlance;



})