document.getElementById('encrypt-btn').addEventListener('click', function() {
    const input = document.querySelector('textarea').value;
    if (input) {
        // Replace this with your encryption logic
        alert('Texto encriptado: ' + input);
    } else {
        alert('Por favor, ingresa un texto para encriptar.');
    }
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const input = document.querySelector('textarea').value;
    if (input) {
        // Replace this with your decryption logic
        alert('Texto desencriptado: ' + input);
    } else {
        alert('Por favor, ingresa un texto para desencriptar.');
    }
});
