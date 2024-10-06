const generateBtn = document.getElementById('generate-btn');
const passwordField = document.getElementById('password-field');

function generatePassword() {
    const length = 12; 
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?";
    let password = "";
    
 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}


generateBtn.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordField.value = newPassword;
});
document.getElementById("copy-btn").addEventListener("click", () => {
    const passwordField = document.getElementById("password-field");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!"); 
});