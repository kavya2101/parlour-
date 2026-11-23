 // ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");
    const menuBtn = document.querySelector(".menu-btn");

    const isOpen = nav.classList.toggle("active");
    if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", isOpen);
    }

}


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.getElementById("navMenu");
        const menuBtn = document.querySelector(".menu-btn");

        nav.classList.remove("active");
        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

});


// ================= APPOINTMENT FORM =================

// ================= APPOINTMENT FORM =================

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const message =
        document.getElementById("message").value;


    if (!name || !phone || !service || !date || !time) {

        alert("Please fill all required fields.");

        return;

    }


    // Format time to 12-hour AM/PM format
    let formattedTime = time;
    if (time) {
        const parts = time.split(":");
        const hour = parseInt(parts[0], 10);
        const minute = parts[1];
        if (!isNaN(hour) && minute !== undefined) {
            const ampm = hour >= 12 ? "PM" : "AM";
            const hour12 = hour % 12 || 12;
            formattedTime = `${hour12}:${minute} ${ampm}`;
        }
    }


    // ================= WHATSAPP =================

    // Replace this with Rajeshvari Beauty Parlour's
    // WhatsApp number.

    const ownerWhatsApp = "917067206047";


    const whatsappMessage =
        `🌸 NEW APPOINTMENT REQUEST\n\n` +
        `Customer: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n` +
        `Preferred Date: ${date}\n` +
        `Preferred Time: ${formattedTime}\n` +
        `Message: ${message || "No message"}\n\n` +
        `Please confirm this appointment.`;


    const whatsappURL =
        `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;


    // Open WhatsApp

    window.open(whatsappURL, "_blank");


    // Clear form

    appointmentForm.reset();

});

// ================= SET MINIMUM DATE =================

const dateInput =
    document.getElementById("date");


// Prevent selecting previous dates

const today =
    new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);


// ================= SCROLL ANIMATION =================

const sections =
    document.querySelectorAll(
        ".service-card, .tailor-box, .price-card, .gallery-item"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(25px)";
    section.style.transition = "0.6s ease";

    observer.observe(section);

});