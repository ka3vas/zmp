// Global Var
var menuState = 0;
// toTheTop Trigger
function topY () {
    let y = window.scrollY;
    if (y > 900) {
        let toTheTop = document.getElementById('to-the-top').style.opacity = 0.9;
    } else {
        let toTheTop = document.getElementById('to-the-top').style.opacity = 0;
    }
}
// Count Years in Business 
function countYears () {
    let date = new Date();
    return document.getElementById('yearsInBusiness').innerHTML = date.getFullYear() - 1991;
}
// Google Map
function initMap() {
    let mapData = {
        zoom: 17,
        center: { lat:53.029179,
                  lng:18.631164
        }
    }
    let map = new google.maps.Map(document.getElementById('map'), mapData);
    let marker = new google.maps.Marker({
        position: { lat:53.029179,
                    lng:18.631164 },
        map:map   
    });
}
// Mobile Nav
function openMobileNav() {
    document.getElementById("mobile-nav").style.paddingTop = "80px";
    document.getElementById("mobile-nav").style.height = "100%";
}
function closeMobileNav() {
    document.getElementById("mobile-nav").style.paddingTop = "0";
    document.getElementById("mobile-nav").style.height = "0";
}
//  Add Events
function addEvents () {
    // Scroll To The Top
    let eventTop = document.getElementById("to-the-top").addEventListener("click", function(event){
        closeMobileNav();
        window.scroll({
            top: 0,
            lefte: 0,
            behavior: 'smooth'
        });
    });
    // Open/Close Nav
    let eventOpen = document.getElementById("mobile-nav-button").addEventListener("click", function(event){
        if ( menuState == 0 ) {
            openMobileNav();
            menuState = 1;
            event.preventDefault();
        }   else {
            closeMobileNav();
            menuState = 0;
            event.preventDefault();
        }
    }, false);
    // Move to About & Close Nav
    let closeAbout = document.getElementById('aboutBtn').addEventListener('click', function(event){
        closeMobileNav();
        event.preventDefault();
        let elem = document.getElementById('about-section');
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, false);
    // Move to Offer & Close Nav
    let closeOffer = document.getElementById('offerBtn').addEventListener('click', function(event){
        closeMobileNav();
        event.preventDefault();
        let elem = document.getElementById('offer-section');
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, false);
    // Move to Contact & Close Nav
    let closeContact = document.getElementById('contactBtn').addEventListener('click', function(event){
        closeMobileNav();
        event.preventDefault();
        let elem = document.getElementById('contact-section');
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, false);
    // Window ScrollY
    let scrollTest = window.addEventListener('scroll', topY);
    // Window Esc Key Menu
    let keyMenu = window.addEventListener('keyup', function(e) {
        if (e.keyCode == 27) {
            if ( menuState == 0 ) {
                openMobileNav();
                menuState = 1;
            } else {
                closeMobileNav();
                menuState = 0;
            }   
        }
    });
}
addEvents();
countYears();