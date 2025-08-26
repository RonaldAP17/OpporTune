let textChange = document.querySelector('.title');
let buttonChange = document.querySelector('.changeTextButton');

buttonChange.addEventListener('click', (event)=>{
    textChange.textContent = 'Welcome to OpporTune ;)';
    textChange.classList.toggle('converted');
})