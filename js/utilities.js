function getInputFieldValue(id) {
  const inputFieldValueInString = document.getElementById(id).value;
  const donatedAmount = parseFloat(inputFieldValueInString);

  document.getElementById(id).value = "";
  return donatedAmount;
}

function donatedAmount(id, newDonatedAmount) {
  const totalDonatedAmountField = document.getElementById(id);
  const totalDonatedAmount = totalDonatedAmountField.innerText;
  const currentAmount = parseFloat(totalDonatedAmount) + newDonatedAmount;
  totalDonatedAmountField.innerText = currentAmount;
}
