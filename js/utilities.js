function getInputFieldById(id) {
 const inputValue = document.getElementById(id).value;
 const inputNumber = parseFloat(inputValue);
 return inputNumber;
}


function getOnlyTextValueById(id){
 const textValue = document.getElementById(id).innerText;
 return textValue;
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

function changeColorById(id){
 document.getElementById('donation-show-button').classList.remove('bg-[#B4F461]');
 document.getElementById('history-show-button').classList.remove('bg-[#B4F461]');

 document.getElementById(id).classList.add('bg-[#B4F461]', 'border-none');
}