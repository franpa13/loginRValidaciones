let form = document.querySelector("form");
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let campoErrores = document.querySelector(".errores ul");

userName.addEventListener("input", () => {
    let nameLength = userName.value.length
    if (nameLength > 4) {
        userName.style.border = "2px solid green";
    }
    else {
        userName.style.border = "2px solid red"
    }
})
password.addEventListener("input", () => {
    let inputLength = password.value.length;

    if (inputLength > 8) {
        password.style.border = "2px solid green";
    } else {
        password.style.border = "2px solid red";
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = [];


    if (userName.value.trim() === "") {
        errores.push("El campo de usuario está vacío.");
        userName.style.border = "1px solid red";
    } else if (userName.value.length < 4) {
        errores.push("El nombre de usuario debe tener al menos 4 caracteres.");
        userName.style.border = "1px solid red";
    }

    if (password.value.trim() === "") {
        errores.push("El campo de contraseña está vacío.");
        password.style.border = "1px solid red";
    } else if (password.value.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres.");
        password.style.border = "1px solid red";
    }
    if (errores.length > 0) {
        campoErrores.innerHTML = "";

        for (let index = 0; index < errores.length; index++) {
            let errorItem = document.createElement("li");
            errorItem.textContent = errores[index];
            campoErrores.appendChild(errorItem);
        }

        e.preventDefault();
    }
});

