function getInputFieldById(id) {
 const inputValue = document.getElementById(id).value;
 const inputNumber = parseFloat(inputValue);
 return inputNumber;
}

function getTextFieldById(id) {
 const textValue = document.getElementById(id).innerText;
 const textNumber = textValue.split('').filter(char => !isNaN(char) && char !== '').join('');
 return Number(textNumber);
}


function showSuccessModal() {
 const donationModal = document.getElementById('donation-modal');
 donationModal.classList.remove('hidden'); 
}


function showSectionById(id) {
 document.getElementById('donation-area').classList.add('hidden');
 document.getElementById('donation-history').classList.add('hidden');

 document.getElementById(id).classList.remove('hidden');
}