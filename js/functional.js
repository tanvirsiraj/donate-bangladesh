let allDonation = [];

document
  .getElementById("donation-for-Noakhali")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-1");

    setDonatedAmount("donate-balance1", donateAmount);

    setMainBalance(donateAmount);

    const currentDate = new Date();
    const formattedDate = currentDate.toString();
    const date = `Date: ${formattedDate}`;

    const newDonatedAmount = `${donateAmount} Taka is donated for Flood at Noakhali, Bangladesh`;

    allDonation.push({ newDonatedAmount, date });
    console.log(allDonation);
  });

document
  .getElementById("donation-for-Feni")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-2");
    console.log(donateAmount);

    setDonatedAmount("donate-balance2", donateAmount);

    // calculation Main Balance
    setMainBalance(donateAmount);

    const currentDate = new Date();
    const formattedDate = currentDate.toString();
    const date = `Date: ${formattedDate}`;

    const newDonatedAmount = `${donateAmount} Taka is donated for Donate for Flood Relief in Feni,Bangladesh`;

    allDonation.push({ newDonatedAmount, date });
    console.log(allDonation);
  });

document
  .getElementById("donation-for-Quota")
  .addEventListener("click", function () {
    const donateAmount = getDonatedAmount("donation-amount-3");
    console.log(donateAmount);

    setDonatedAmount("donate-balance3", donateAmount);

    // calculation Main Balance
    setMainBalance(donateAmount);

    const currentDate = new Date();
    const formattedDate = currentDate.toString();
    const date = `Date: ${formattedDate}`;

    const newDonatedAmount = `${donateAmount} Taka is donated for Aid for Injured in the Quota Movement`;

    allDonation.push({ newDonatedAmount, date });
    console.log(allDonation);
  });

let donationBtnField = document.getElementById("donation");
let historyBtnField = document.getElementById("history");

let donationPartField = document.getElementById("donation-part");
let donationHistoryField = document.getElementById("donated-history");

document.getElementById("donation").addEventListener("click", function () {
  donationBtnField.classList.remove("btn-outline", "text-[#11111170]");
  donationBtnField.classList.add("bg-primaryColor");
  historyBtnField.classList.remove("bg-primaryColor");
  historyBtnField.classList.add("btn-outline", "text-[#11111170]");

  donationPartField.classList.remove("hidden");
  donationHistoryField.classList.add("hidden");
});

document.getElementById("history").addEventListener("click", function () {
  historyBtnField.classList.remove("btn-outline", "text-[#11111170]");
  historyBtnField.classList.add("bg-primaryColor");
  donationBtnField.classList.remove("bg-primaryColor");
  donationBtnField.classList.add("btn-outline", "text-[#11111170]");

  donationHistoryField.classList.remove("hidden");
  donationPartField.classList.add("hidden");

  donationHistoryField.innerHTML = "";

  for (const am of allDonation) {
    let div = document.createElement("div");
    div.classList.add("border", "ps-6", "py-4", "rounded-lg", "space-y-2");
    div.innerHTML = `
    <p class="text-xl font-semibold">${am.newDonatedAmount}</p>
    <p class="text-[#11111170]">${am.date}</p>
    `;
    donationHistoryField.appendChild(div);
  }
});
