const select = document.querySelector ('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

var plan = 0;
var ciclo = 0;

document.querySelectorAll('#opciones > .opcion') .forEach((opcion) => {
    opcion.addEventListener('click' , (e) => {e.preventDefault();
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    select.classList.toggle('active')
    opciones.classList.toggle('active')
    hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
});
});
    
select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});

const select1 = document.querySelector('#select1');
const opciones1 = document.querySelector('#opciones1');
const contenidoSelect1 = document.querySelector('#select1 .contenido-select');
const hiddenInput1 = document.querySelector('#inputSelect1');

document.querySelectorAll('#opciones1 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect1.innerHTML = e.currentTarget.innerHTML;
        select1.classList.toggle('active')
        opciones1.classList.toggle('active')
        hiddenInput1.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

select1.addEventListener('click', () => {
    select1.classList.toggle('active');
    opciones1.classList.toggle('active');
});

document.getElementById('contrato').addEventListener('click', function() {
    location.href = 'contrato.html';
});

document.querySelector('volver').addEventListener('click', function() {
    location.href = 'index.html';
});