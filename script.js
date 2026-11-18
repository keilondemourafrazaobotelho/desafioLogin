
const formLogin = document.getElementById("formLogin");

const usuarioHash =  "d19e8a4a750e9fe5fa18333ed6748474c3d14bc9d4a3d47e852f392253e7be72";

const senhaHash =   "4843ac6c4a9c9eda4e6fe01ebe93815bdcd25ca051173759cea97b9642e1911b";


async function gerarHash(texto) {
    const dados = new TextEncoder().encode(texto);

    const resultado = await crypto.subtle.digest(
        "SHA-256",
        dados
    );

    return Array.from(new Uint8Array(resultado))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

// Validar login
formLogin.addEventListener("submit", async function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const hashUsuario = await gerarHash(usuario);
    const hashSenha = await gerarHash(senha);

    if (
        hashUsuario === usuarioHash &&
        hashSenha === senhaHash
    ) {
        window.location.href = "sucesso.html";

    } else {
        window.location.href = "falhou.html";
    }

});
