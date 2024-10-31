function checkPassword() {
    const password = document.getElementById("password").value;
    const content = document.getElementById("content");
    const passwordContainer = document.getElementById("passwordContainer");
    const errorMessage = document.getElementById("errorMessage");

    if (password === "miniona") {
        passwordContainer.classList.add("hidden");
        content.classList.remove("hidden");
    } else {
        errorMessage.innerText = "Wrong password! Hint: What do I call you always? m...";
        errorMessage.classList.remove("hidden");
    }
}

function showGratitude() {
    const gratitude = document.getElementById("gratitude");
    const endMessage = document.getElementById("endMessage");
    gratitude.classList.remove("hidden");
    endMessage.classList.remove("hidden");
}

function toggleContactForm() {
    const contactForm = document.getElementById("contactForm");
    contactForm.classList.toggle("hidden");
}

function sendEmail() {
    const message = document.getElementById("message").value;
    const email = "alaeelwalidpersonal@gmail.com";
    const subject = "Message from Khadija";
    const body = encodeURIComponent(message);

    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self");
}

function emergencyContact() {
    alert("Calling Alae at +34673843882...");
    window.location.href = `tel:+34673843882`;
}
