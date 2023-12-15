const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (email.validity.valid && password.validity.valid && confirmPassword.validity.valid && password.value === confirmPassword.value) {

        alert('Formulario válido y enviado correctamente.');
    } else {

        alert('Por favor, completa los campos correctamente.');
    }
});