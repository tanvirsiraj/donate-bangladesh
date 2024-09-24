document
  .getElementById("donation-for-Noakhali")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-1");
    console.log(donateAmount);

    setDonatedAmount("donate-balance1", donateAmount);

    // calculation Main Balance
    setMainBalance(donateAmount);
  });

document
  .getElementById("donation-for-Feni")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-2");
    console.log(donateAmount);

    setDonatedAmount("donate-balance2", donateAmount);

    // calculation Main Balance
    setMainBalance(donateAmount);
  });

document
  .getElementById("donation-for-Quota")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-3");
    console.log(donateAmount);

    setDonatedAmount("donate-balance3", donateAmount);

    // calculation Main Balance
    setMainBalance(donateAmount);
  });
