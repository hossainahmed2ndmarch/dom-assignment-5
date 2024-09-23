document.getElementById('noakhali-donation-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const donation = getInputFieldById('noakhali-input');
  const balance = getTextFieldById('main-balance');
  const donatedBalance = getTextFieldById('noakhali-donated-balance-text');
  const noakhaliText = getOnlyTextValueById('noakhali-area')

  if (!isNaN(donation) && donation <= balance && donation > 0) {
   const remainingBalance = balance - donation;
   document.getElementById('main-balance').innerText = remainingBalance + ' BDT';

   const updatedBalance = donatedBalance + donation;
   document.getElementById('noakhali-donated-balance-text').innerText = updatedBalance + ' BDT';

   const div = document.createElement('div');
   div.classList.add('p-4', 'space-y-4', 'rounded-2xl', 'border-2', 'border-[#1111111A]');
   const now = new Date();
   const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Dhaka', timeZoneName: 'short'};
   const formattedDate = now.toLocaleString('en-US', options);

   div.innerHTML = `
     <h5 class="text-xl font-bold">${donation} Taka is Donated for ${noakhaliText}</h5>
     <p class="font-thin text-[#111111B3]">Date: ${formattedDate}</p>
  `
   document.getElementById('history-container').appendChild(div);
   showSuccessModal();

  } else {
   alert('Invalid amount! Please enter a valid amount.');
  }

 });


