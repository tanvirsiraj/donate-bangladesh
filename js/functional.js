document
  .getElementById("donation-for-Noakhali")
  .addEventListener("click", function () {
    const donateAmount = getInputFieldValue("donation-amount-1");
    console.log(donateAmount);

    donatedAmount("donate-balance1", donateAmount);
  });
