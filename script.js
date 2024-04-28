
let menuIcon=document.querySelectorAll("menu-icon");
let navbar=document.querySelectorAll(".navbar");

menuIcon.onclick=() =>{
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};


let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=> {
	sections.foreach(sec => {
		let top=window.scrollY;
		let offset=sec.offset-150;
		let height=sec.offsetHeight;
		let id=sec.getAttribute('id');
		if(top >=offset && top<offset + height){
			navLinks.foreach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};			
	});
	
	/*=========================================sticky navbar ======================*/
	let header=document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY > 100);
	
	
	/*========================================= remove toggle icon navbar when click navbar link(scroll) ======================*/
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
	
};
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img .service-container , .portfolio-box, .contact form ,.experience-content, .certificate-box', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content,.experience-content ', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings:['MERN FULL STACK DEVELOPER'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    

})