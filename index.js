const email = document.getElementById("email");
const password = document.getElementById("password");

function verificar() {
    const admin = "Henrique@gmail.com";
    
    if (admin === email.value ) {
        window.location.href = "index2.html";
    }
}
