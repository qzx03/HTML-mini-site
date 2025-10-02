function hello() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("msg").value;

    alert(`Thanks, ${name}! We received your message:\n${msg}\nWe'll contact you at ${email}${phone ? " or " + phone : ""}.`);

    return false; // prevent actual form submission
}
