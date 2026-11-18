
const formLogin = document.getElementById("formLogin");

// Substitua pelos hashes gerados na etapa 2.
const usuarioHash = "56028679fe2421acba1c29d1be76ad8691f86ca116edd36eb353d023cf496abe";
const senhaHash = "a4c2ca445948f5e46412919018c186e73d2af6481d750e7c475f823568699685";

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

formLogin.addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const hashUsuario = await gerarHash(usuario);
    const hashSenha = await gerarHash(senha);

    if (
        hashUsuario === desafio2026 &&
        hashSenha === des1234
    ) {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "falhou.html";
    }
});
