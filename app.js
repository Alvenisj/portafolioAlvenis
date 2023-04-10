
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = document.getElementById('toggle-theme__icon');
const toggleThemeText = document.getElementById('toggle-theme__text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles =  document.documentElement.style;


/*CON ESTE CÓDIGO LE CAMBIAMOS LA CLASE AL "BODY" */
toggleTheme.addEventListener('click', () => {

    /*CON TOGGLE A MODO DE INTERRUPTOR, SI TIENE LA CLASE LA QUITA, SINO LA PONE */
    document.body.classList.toggle('dark');
   
    if(toggleThemeIcon.src.includes('moon.svg')){
        toggleThemeIcon.src = "./icons/sun.svg";
        toggleThemeText.textContent = 'Light Mode'
    } else {
        toggleThemeIcon.src = "./icons/moon.svg";
        toggleThemeText.textContent = 'Dark Mode';

    }
});



toggleColors.addEventListener('click', (e) => {

   rootStyles.setProperty('--primary-color', e.target.dataset.color)
   
    
})


/*CÓDIGO PARA HACER LA VENTANA MODAL*/

// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});



