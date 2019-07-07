const modalContainer = document.getElementsByClassName('modal-container')[0];
const openModalBtn = document.getElementById('open-modal-button');
const closeModalBtn = document.getElementById('closeBtn');
const image = document.querySelector('img');
const apiKey = 'yBv3YNIipZW808qJEvsoaHf7DmjtWVdW';
let randomGif;
const oneLanguage = document.getElementById('one');
const twoFiveLanguages = document.getElementById('two-five');
const sixTenLanguages = document.getElementById('six-ten');
const moreThanTenLanguages = document.getElementById('more-than-ten');
const spanish = document.getElementById('ES');
const portuguese = document.getElementById('PT');
const french = document.getElementById('FR');
const german = document.getElementById('DE');
const chinese = document.getElementById('ZH');
const artur = document.getElementById('Artur');
const japanese = document.getElementById('JA');
const other = document.getElementById('other');


openModalBtn.addEventListener('click', openModal)

function openModal(e) {
  if (oneLanguage.checked) {
    if (artur.checked) {
      randomGif = 'relaxed';
    } else if (japanese.checked || other.checked) {
      randomGif = 'screwed';
    } else {
      randomGif = 'giggles';
    }
  } else if (twoFiveLanguages.checked) {
    if (artur.checked) {
      randomGif = 'cold-shoulder';
    } else if (japanese.checked || other.checked) {
      randomGif = 'bleed';
    } else {
      randomGif = 'excited';
    }
  } else if (sixTenLanguages.checked) {
    if (artur.checked) {
      randomGif = 'coffee';
    } else if (japanese.checked || other.checked) {
      randomGif = 'torment';
    } else {
      randomGif = 'worried';
    }
  } else if (moreThanTenLanguages.checked) {
    if (artur.checked) {
      randomGif = 'cowboy';
    } else if (japanese.checked || other.checked) {
      randomGif = 'crying';
    } else {
      randomGif = 'terrified';
    }
  }

  const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${randomGif}&limit=1`

  const GifSelected = fetch(url)
    .then(res => res.json())
    .then(finalGif => {
      image.src = finalGif.data.image_url;
    });


  e.preventDefault();
  modalContainer.style.display = 'block';

  GifSelected

}
closeModalBtn.addEventListener('click', closeModal)

function closeModal() {
  modalContainer.style.display = 'none';
  console.log(123);
}

window.addEventListener('click', clickOutsideModal)

function clickOutsideModal(e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
    console.log(123);
  }

}
