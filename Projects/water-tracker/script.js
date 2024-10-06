const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const totalLiters = 2.5;
const cupCapacity = 0.25; // Each small cup is 250ml (0.25 liters)

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling?.classList.contains('full')) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.height = 0;
    percentage.innerText = '';
  } else {
    percentage.style.height = `${(fullCups / totalCups) * 100}%`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  const remainingLiters = totalLiters - (fullCups * cupCapacity);

  if (remainingLiters === 0) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${remainingLiters.toFixed(2)}L`;
  }
}
