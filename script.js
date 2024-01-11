
// < !--Java script for Toggle Menu-- >
var navLinks = document.getElementById("navLinks");

function hideMenu() {
    navLinks.style.right = "-200px";

}
function showMenu() {
    navLinks.style.right = "0";
}
// END OF TOGGLE MENU

// Javascript for scrolling transition

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show', 'showSlide', 'down', 'downSlide');
            // Add this line if u want to animate once only and delete else function
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show', 'showSlide', 'down', 'downSlide');
        }
    },{
        threshold: 0.1
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const slidingElements = document.querySelectorAll('.slide');
const downElements = document.querySelectorAll('.down');
const footer = document.querySelectorAll('.footer');

const allElements = [...hiddenElements, ...slidingElements, ...downElements];

allElements.forEach(el => observer.observe(el));


var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'send-email.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText); // Handle the response from the server
        }
    };
    xhr.send(formData);
});

