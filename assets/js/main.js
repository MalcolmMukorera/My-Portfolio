
/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item ',
    },
    animation : {
        duration: 300,
    },
});
/*=============== Active Work =============== */

const linework = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a)=> a.addEventListener('click','activework'));

/*=============== Contact =============== */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS IDs
    emailjs.send("service_pdmxjrn","template_aovewcv", {
        from_name: name,
        from_email: email,
        message: message
    }, "nfvhfZlt3ac2zF8Sm")
    .then(function(response) {
        alert('Email sent successfully!');
    }, function(error) {
        alert('Failed to send email. Please try again.');
    });
});

/*=============== testimonial =============== */
// Update scrollbar colors
function updateScrollbarColors() {
    const root = document.documentElement;
    const trackColor = getComputedStyle(document.querySelector('.testimonial-container')).backgroundColor;
    const thumbColor = '#888'; // Change this to your desired color
    root.style.setProperty('--scrollbar-track-color', trackColor);
    root.style.setProperty('--scrollbar-thumb-color', thumbColor);
  }
  
  // Call the function initially
  updateScrollbarColors();
  
  // Listen for window resize and call the function to update scrollbar colors
  window.addEventListener('resize', updateScrollbarColors);
  