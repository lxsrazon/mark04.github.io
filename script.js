// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";

});

// ==========================
// IMAGE SLIDER
// ==========================

function autoSlider(className){

    let index = 0;

    const slides = document.querySelectorAll("." + className);

    if(slides.length === 0) return;

    function showSlides(){

        slides.forEach(slide => {

            slide.style.display = "none";

        });

        index++;

        if(index > slides.length){

            index = 1;

        }

        slides[index - 1].style.display = "block";

    }

    showSlides();

    setInterval(showSlides,2500);

}

autoSlider("blueSlides");
autoSlider("alxSlides");

// ==========================
// EMAILJS CONTACT FORM
// ==========================

// Replace these with your EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY");

const contactForm = document.getElementById("contact-form");
const status = document.getElementById("status");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        status.textContent = "Sending...";

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )
        .then(() => {

            status.textContent = "✅ Message sent successfully!";
            contactForm.reset();

        })
        .catch(() => {

            status.textContent = "❌ Failed to send message.";

        });

    });

}
