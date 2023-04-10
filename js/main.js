const boton = [...document.querySelectorAll("button")];
const botonSubmit = document.querySelector(".card-rating__button");
const cardRating = document.querySelector('.card-rating')
const cardSubmitted = document.querySelector('#submitted')

botonSubmit.disabled = true;
botonSubmit.classList.add('disabled')

function selected(item) {
  boton.forEach((element) => {
    element.classList.remove("selected");
  });

    boton[item].classList.add("selected");
    botonSubmit.disabled = false;
    botonSubmit.classList.remove('disabled')
}

function save() {
  const selected = boton.filter(element => element.classList.contains('selected'));
  if (selected.length === 0) return;

  cardRating.classList.add('isActive')
  cardSubmitted.classList.remove('isActive')
  return console.log(selected);
}

botonSubmit.addEventListener('click', save);
