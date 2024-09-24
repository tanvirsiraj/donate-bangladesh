function getDonatedAmount(id) {
  const inputFieldValueInString = document.getElementById(id).value;
  const donatedAmount = parseFloat(inputFieldValueInString);

  document.getElementById(id).value = "";
  return donatedAmount;
}

function setDonatedAmount(id, newDonatedAmount) {
  const totalDonatedAmountField = document.getElementById(id);
  const totalDonatedAmount = totalDonatedAmountField.innerText;
  const currentAmount = parseFloat(totalDonatedAmount) + newDonatedAmount;
  totalDonatedAmountField.innerText = currentAmount;
}

function setMainBalance(donateAmount) {
  const previousTotalBalanceField = document.getElementById("balance");
  const previousTotalBalance = document.getElementById("balance").innerText;
  const currentTotalBalance = parseFloat(previousTotalBalance) - donateAmount;
  previousTotalBalanceField.innerText = currentTotalBalance;
}
