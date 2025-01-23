document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroBg = document.querySelector('.hero-bg');
    const aboutContent = document.querySelector('.about-content');
    const logo = document.querySelector('.logo');
    const skillsSection = document.querySelector('.skills');
    const projectsSection = document.querySelector('.projects');
    const contactSection = document.querySelector('.contact');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    heroContent.style.opacity = 0;
    aboutContent.style.opacity = 0;
    skillsSection.style.opacity = 0;
    projectsSection.style.opacity = 0;
    contactSection.style.opacity = 0;
    logo.style.transform = 'translateY(-30px)';

    let delay = 300;

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(.075, .82, .165, 1)';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, delay);

    setTimeout(() => {
        aboutContent.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(.075, .82, .165, 1)';
        aboutContent.style.opacity = 1;
        aboutContent.style.transform = 'translateY(0)';
    }, delay + 200);

    setTimeout(() => {
        skillsSection.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(.075, .82, .165, 1)';
        skillsSection.style.opacity = 1;
        skillsSection.style.transform = 'translateY(0)';
    }, delay + 350);

    setTimeout(() => {
        projectsSection.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(.075, .82, .165, 1)';
        projectsSection.style.opacity = 1;
        projectsSection.style.transform = 'translateY(0)';
    }, delay + 500);

    setTimeout(() => {
        contactSection.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(.075, .82, .165, 1)';
        contactSection.style.opacity = 1;
        contactSection.style.transform = 'translateY(0)';
    }, delay + 650);

    setTimeout(() => {
        logo.style.transition = 'transform 1s cubic-bezier(.075, .82, .165, 1)';
        logo.style.transform = 'translateY(0)';
    }, delay + 250);

    // Parallax effect
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
    });

    // Mouse move interaction
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        heroContent.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });

    hero.addEventListener('mouseout', () => {
        heroContent.style.transform = 'translate(0,0)';
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

      // Mobile Nav Toggle
    navToggle.addEventListener('click', () => {
       navLinks.classList.toggle('active');
    });
});


//Starfield Animation Code
var canvas = document.getElementById("starfield");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){
  
  if(animate)
    requestAnimationFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0)
  {c.fillStyle = "rgba(0,10,20,1)";
  c.fillRect(0,0, canvas.width, canvas.height);}
  c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);
    
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
  }
}

executeFrame();