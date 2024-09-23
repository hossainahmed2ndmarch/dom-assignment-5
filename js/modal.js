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