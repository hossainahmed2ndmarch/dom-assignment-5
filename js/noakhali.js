document.getElementById('noakhali-donation-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const donation = getInputFieldById('noakhali-input');
  const balance = getTextFieldById('main-balance');
  const donatedBalance = getTextFieldById('donated-balance-text');

  if (!isNaN(donation) && donation <= balance && donation > 0) {
   const remainingBalance = balance - donation;
   document.getElementById('main-balance').innerText = remainingBalance + ' BDT';

   const updatedBalance = donatedBalance + donation;
   document.getElementById('donated-balance-text').innerText = updatedBalance + ' BDT';

   showSuccessModal();

  } else {
   alert('Invalid amount! Please enter a valid amount.');
  }

 })


const closeModalButton = document.getElementById('close-modal-btn');

closeModalButton.addEventListener('click', function () {
 const donationModal = document.getElementById('donation-modal');
 donationModal.classList.add('hidden');
});

window.addEventListener('click', function (event) {
 const donationModal = document.getElementById('donation-modal');
 if (event.target === donationModal) {
  donationModal.classList.add('hidden');
 }
});


