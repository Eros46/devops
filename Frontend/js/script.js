// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting necessary DOM elements
    const textarea = document.querySelector('textarea');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const outputSection = document.querySelector('.output-section .card');
    const outputTitle = outputSection.querySelector('h2');
    const outputText = outputSection.querySelector('p');
    const outputImage = outputSection.querySelector('img');
    const copyBtn = document.getElementById('copy-btn');

    // Encryption keys mapping each vowel to its encoded form
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Generating decryption keys by reversing the encryption mapping
    const decryptKeys = Object.fromEntries(
        Object.entries(encryptionKeys).map(([key, value]) => [value, key])
    );

    // Function to encrypt text by replacing vowels with corresponding encoded values
    const encrypt = (text) => {
        return text.replace(/[eioua]/g, (match) => encryptionKeys[match]);
    };

    // Function to decrypt text by replacing encoded values with original vowels
    const decrypt = (text) => {
        return text.replace(/enter|imes|ai|ober|ufat/g, (match) => decryptKeys[match]);
    };

    // Function to update the output section with the processed text
    const updateOutput = (text) => {
        if (text && text.trim() !== '') {
            outputTitle.textContent = "Message processed";
            outputText.textContent = text;
            outputImage.style.display = 'none'; // Hides the image if there is text
            copyBtn.style.display = 'block'; // Shows the copy button
        } else {
            resetOutput();
        }
    };

    // Function to reset the output section to its initial state
    const resetOutput = () => {
        outputTitle.textContent = "No message was found";
        outputText.textContent = "Enter the text you want to encrypt or decrypt.";
        outputImage.style.display = 'block'; // Shows the image if there is no text
        copyBtn.style.display = 'none'; // Hides the copy button
    };

    // Function to copy the processed text to the clipboard
    const copyToClipboard = () => {
        const textToCopy = outputText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Optionally, provide feedback to the user
        }).catch((err) => {
            console.error('Error copying text: ', err);
        });
    };

    // Event listener for the encrypt button to process text on click
    encryptBtn.addEventListener('click', () => {
        const text = textarea.value.trim();
        if (text) {
            const encryptedText = encrypt(text);
            updateOutput(encryptedText);
        } else {
            resetOutput();
        }
    });

    // Event listener for the decrypt button to process text on click
    decryptBtn.addEventListener('click', () => {
        const text = textarea.value.trim();
        if (text) {
            const decryptedText = decrypt(text);
            updateOutput(decryptedText);
        } else {
            resetOutput();
        }
    });

    // Event listener for the copy button to copy text to clipboard
    copyBtn.addEventListener('click', copyToClipboard);
});
