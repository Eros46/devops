document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.querySelector('textarea');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const outputSection = document.querySelector('.output-section .card');
    const outputTitle = outputSection.querySelector('h2');
    const outputText = outputSection.querySelector('p');
    const outputImage = outputSection.querySelector('img');
    const copyBtn = document.getElementById('copy-btn');

    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const decryptKeys = Object.fromEntries(
        Object.entries(encryptionKeys).map(([key, value]) => [value, key])
    );

    const encrypt = (text) => {
        return text.replace(/[eioua]/g, (match) => encryptionKeys[match]);
    };

    const decrypt = (text) => {
        return text.replace(/enter|imes|ai|ober|ufat/g, (match) => decryptKeys[match]);
    };

    const updateOutput = (text) => {
        outputTitle.textContent = "Mensaje procesado";
        outputText.textContent = text;
        outputImage.style.display = 'none';
        copyBtn.style.display = 'block';
    };

    const copyToClipboard = () => {
        const textToCopy = outputText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch((err) => {
            console.error('Error al copiar el texto: ', err);
        });
    };

    encryptBtn.addEventListener('click', () => {
        const text = textarea.value;
        const encryptedText = encrypt(text);
        updateOutput(encryptedText);
    });

    decryptBtn.addEventListener('click', () => {
        const text = textarea.value;
        const decryptedText = decrypt(text);
        updateOutput(decryptedText);
    });

    copyBtn.addEventListener('click', copyToClipboard);
});


