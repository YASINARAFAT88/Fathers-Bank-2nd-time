document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const depositAmountText = parseFloat(depositInput.value)
    const newDepositAmount = depositAmountText

    const preDepositTotal = document.getElementById('deposit-total')
    const newDepositAmountText = preDepositTotal.innerText;
    const newDepositTotal = parseFloat(newDepositAmountText)

    const newDeposit = newDepositAmount + newDepositTotal
    preDepositTotal.innerText = newDeposit

    depositInput.value = '';

    // Update baance 
    const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const preBalanceTotal = parseFloat(totalBalanceText)

    const neBalance = preBalanceTotal + newDeposit
    totalBalance.innerText = neBalance
})

// Withdraw Calculation 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const preWithdrawText = withdrawInput.value
    const preWithdrawAmount = parseFloat(preWithdrawText)

    const withdrawTotal = document.getElementById('withdrow-total')
    const withdrawTotalText = withdrawTotal.innerText
    const withdrawTotalAmount = parseFloat(withdrawTotalText)

    const newWithdraw = withdrawTotalAmount + preWithdrawAmount
    withdrawTotal.innerText = newWithdraw

    // Balance Update 

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText)

    const newBalance = balanceTotalAmount - preWithdrawAmount
    balanceTotal.innerText = newBalance

    withdrawInput.value = '';
})