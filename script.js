const sabanilla = document.getElementById('sabanila');
const sanPedro = document.getElementById('san-pedro');
const coronado = document.getElementById('coronado');
const moravia = document.getElementById('moravia');
const sabana = document.getElementById('sabana');
const divSucursales = document.getElementById('div-sucursales');

//La imagen no se cambia, de momento
let sucursalIMG = document.createElement('img');
sucursalIMG.src = 'img/sucursal_sabanilla.jpg';

const crearLocales = ()=>{
    let sucurlaDetalles = document.createElement('div');
    sucurlaDetalles.classList.add('sucursales_detalles');

    let ubicacionh2 = document.createElement('h2');
    let sloganh3 = document.createElement('h3');
    let telefonoh4 = document.createElement('h4');
    let correoh4 = document.createElement('h4');
    let direccionh4 = document.createElement('h4');
    let facebookh4 = document.createElement('h4');
    let instagramh4 = document.createElement('h4');

    //Creamos los parametros
    fSabanilla = ()=>{
        ubicacionh2.innerText = 'Sabanilla';

        telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2351-2782';

        direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 400m Norte del KFC de Sabanilla';
        facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena Sabanilla';
        instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaSabanilla';
    };
    fSanPedro = ()=>{
        ubicacionh2.innerText = 'San Pedro';

        telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2314-3828';

        direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 144m Oeste del Mall San Pedro';
        facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena San Pedro';
        instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaSanPedro';
    };
    fCoronado = ()=>{
        ubicacionh2.innerText = 'Coronado';

        telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2351-4382';

        direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 441m Sur del Pali de San Antonio';
        facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena Coronado';
        instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaCoronado';
    };
    fMoravia = ()=>{
        ubicacionh2.innerText = 'Moravia';

        telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2351-1438';

        direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 412m Oeste del BAC de Moravia';
        facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena Moravia';
        instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaMoravia';
    };
    fSabana = ()=>{
        ubicacionh2.innerText = 'Sabana';

        telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2351-2143';

        direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 422m Norte del Parque de la Sabana';
        facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena Sabana';
        instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaSabana';
    };

    // Revisamos quien es presionado
    sabanilla.addEventListener('click', fSabanilla);
    sanPedro.addEventListener('click', fSanPedro);
    coronado.addEventListener('click', fCoronado);
    moravia.addEventListener('click', fMoravia);
    sabana.addEventListener('click', fSabana);

    //Para el responsive se hace con un select
    const sltResponsive = document.getElementById('slt-responsive');
    sltResponsive.addEventListener('change', (event)=>{
        switch(event.target.value){
            case 'sabanilla':
                fSabanilla();
                break;
            case 'san-pedro':
                fSanPedro();
                break;
            case 'coronado':
                fCoronado();
                break;
            case 'moravia':
                fMoravia();
                break;
            case 'sabana':
                fSabana();
                break;
            default:
                console.log('Nombre incorrecto');
                break;
        }
    });

    // Por defecto quiero que se ponga la info de Sabanilla
    ubicacionh2.innerText = 'Sabanilla';
    sloganh3.innerText = 'Cada peluquero tiene su propio estilo y eso es lo que hace de la peluquer??a una forma de arte.';
    telefonoh4.innerHTML = '<i class="fas fa-phone-square"></i> 2351-2782';
    correoh4.innerHTML = '<i class="fas fa-envelope"></i> reservas@hena.com';
    direccionh4.innerHTML = '<i class="fas fa-map-marker-alt"></i> 400m Norte del KFC de Sabanilla';
    facebookh4.innerHTML = '<i class="fab fa-facebook-square"></i> Hena Sabanilla';
    instagramh4.innerHTML = '<i class="fab fa-instagram-square"></i> HenaSabanilla';

    // Asignamos los valores para mostrarlos en la UI
    //Mostramos la imagen primero
    divSucursales.appendChild(sucursalIMG);

    divSucursales.appendChild(sucurlaDetalles);
    sucurlaDetalles.appendChild(ubicacionh2);
    sucurlaDetalles.appendChild(sloganh3);
    sucurlaDetalles.appendChild(telefonoh4);
    sucurlaDetalles.appendChild(correoh4);
    sucurlaDetalles.appendChild(direccionh4);
    sucurlaDetalles.appendChild(facebookh4);
    sucurlaDetalles.appendChild(instagramh4);
};

crearLocales();

// Para la flecha de ir arriba
const arrowUp = document.getElementById('arrow-up');

//Esto para esconder el bot??n
arrowUp.style.transform = "scale(0)";

//Con esto nos desplazamos hacia arriba
const scrollUp = ()=>{
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0){

        //Honestamente no s?? qu?? hace, debo de investigar
        // window.requestAnimationFrame(scrollUp);
        // Llevamos el scroll al inicio por medio de restarle al scroll actual, la misma cantidad de scroll
        window.scrollTo (0, currentScroll - currentScroll);
    }
};

arrowUp.addEventListener('click', scrollUp);

//Con esto determinamos en qu?? altura de la pantalla nos encontramos basado en el scroll bar
window.onscroll = ()=>{

    //Con esto llamamos al scroll bar
    const scroll = document.documentElement.scrollTop;
    if (scroll > 500){

        //Con esto mostramos el arrow
        arrowUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        arrowUp.style.transform = "scale(0)";
    }
};

// Efecto m??quina de escribir con la biblioteca
// https://github.com/mattboldt/typed.js/
const typed = new Typed('.typed', {
    strings: ['Barber??a Hena'],

    //Con esto cambiamos la velocidad
    typeSpeed: 250,
    startDelay: 1000,
    backDelay: 1000
});
const typed2 = new Typed('.typed2', {
    strings: ['Cuidar de s?? mismo no es un gasto es una inversi??n.'],

    //Con esto cambiamos la velocidad
    typeSpeed: 60,
    startDelay: 1000,
    backDelay: 1000
});

// SCROLL ANIMATION
let aparecerScroll = document.querySelectorAll('.animarScroll');

//Esta es para los sliders
let animarSlideSide = document.querySelectorAll('.animarSlide');

const animacionAparecer = ()=>{

    // Con scrollTop calculamos el scroll actual de la p??gina
    let scrollActual = document.documentElement.scrollTop;
    for(let i = 0; i<aparecerScroll.length; i++){

        // Tenemos que calcular el scroll del elemento, eso lo hacemos con offsetTop
        let scrollElementoAparecer = aparecerScroll[i].offsetTop;
        if((scrollElementoAparecer - (scrollElementoAparecer / 4)) < scrollActual){
            aparecerScroll[i].style.opacity = 1;

            if(i==2){
                animarSlideSide[1].classList.add('slideRight');
                animarSlideSide[0].classList.add('slideLeft');
            }
        }
    }
};

window.addEventListener('scroll', animacionAparecer);

// MEN?? RESPONSIVE
const btnMenuResponsive = document.getElementById('btn-menu-responsive');
const menu = document.querySelector('.main_nav');

document.addEventListener('click', (e)=>{
    if(e.target.closest('#btn-menu-responsive')){
        menu.classList.toggle('mostrarMenu');
        
        if(menu.classList.contains('mostrarMenu')){
            btnMenuResponsive.style.backgroundColor = '#000';

        }else{
            
            btnMenuResponsive.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';    
        }
    }else{
        menu.classList.remove('mostrarMenu');
        btnMenuResponsive.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
});

// Validaci??n b??sica de formulario
const nombreForm = document.getElementById('nombre');
const correoForm = document.getElementById('correo');
const mensajeForm = document.getElementById('form-mensaje');
const btnForm = document.getElementById('btn-form');

let correoExpression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

btnForm.addEventListener('click', ()=>{
    if(nombreForm.value == '' || correoForm.value == '' || mensajeForm.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes dejar campos en blanco',
        })
    }else if(!correoExpression.test(correoForm.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El formato del correo no es v??lido',
        })
    }else{
        Swal.fire(
            'Mensaje enviado!',
            'Nos pondremos en contacto pronto!',
            'success'
        )
        nombreForm.value = '';
        correoForm.value = '';
        mensajeForm.value = '';
    }
});