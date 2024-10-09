const button = document.querySelector('button');
const dateInput = document.getElementById('date');
const resultDiv = document.getElementById('result');

button.addEventListener('click', () => {
    const birthDate = new Date(dateInput.value);
    const today = new Date();

    if (!birthDate || isNaN(birthDate)) {
        resultDiv.innerHTML = "<p>Please select a valid date.</p>";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); 
    }

    if (months < 0) {
        years--;
        months += 12; 
    }

    resultDiv.innerHTML = `<p>You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.</p>`;
});
