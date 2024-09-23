document.getElementById('noakhali-donation-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const donation = getInputFieldById('noakhali-input');
  const balance = getTextFieldById('main-balance');
  const donatedBalance = getTextFieldById('noakhali-donated-balance-text');

  if (!isNaN(donation) && donation <= balance && donation > 0) {
   const remainingBalance = balance - donation;
   document.getElementById('main-balance').innerText = remainingBalance + ' BDT';

   const updatedBalance = donatedBalance + donation;
   document.getElementById('noakhali-donated-balance-text').innerText = updatedBalance + ' BDT';

   showSuccessModal();

  } else {
   alert('Invalid amount! Please enter a valid amount.');
  }

 });


