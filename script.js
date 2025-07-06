function encrypt() {
  const message = document.getElementById('input').value;
  const key = document.getElementById('key').value;

  if (!message || !key) {
    alert("Veuillez entrer un message et une clé.");
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(message, key).toString();
  document.getElementById('output').value = encrypted;
}

function decrypt() {
  const encrypted = document.getElementById('input').value;
  const key = document.getElementById('key').value;

  if (!encrypted || !key) {
    alert("Veuillez entrer un texte chiffré et une clé.");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error();
    document.getElementById('output').value = decrypted;
  } catch {
    alert("Clé incorrecte ou texte invalide.");
  }
}
