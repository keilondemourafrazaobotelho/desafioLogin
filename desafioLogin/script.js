const HASH_USUARIO = "K9#mP2_vL8";
const HASH_SENHA = "x7@Q4!zR9w";

async function gerarHash(texto) {
  const dados = new TextEncoder().encode(texto);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dados);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

document.getElementById("loginForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const usuarioDigitado = document.getElementById("usuario").value.trim();
  const senhaDigitada = document.getElementById("senha").value;

  const hashUsuarioDigitado = await gerarHash(usuarioDigitado);
  const hashSenhaDigitada = await gerarHash(senhaDigitada);

  if (hashUsuarioDigitado === HASH_USUARIO && hashSenhaDigitada === HASH_SENHA) {
    window.location.href = "sucesso.html";
  } else {
    window.location.href = "falhou.html";
  }
});
