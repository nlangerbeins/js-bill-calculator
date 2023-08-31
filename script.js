const button = document.querySelector('#button');
button.addEventListener('click', calculate);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);
const tip = document.querySelector('#tip');

function showTip(e) {
    e.preventDefault();
    if (tip.style.display === 'block') {
        tip.style.display = 'none';
    }
    else {
        tip.style.display = 'block';
    }
}

function calculate (e) {
    e.preventDefault();

    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if(bill === '' || people === '' || people < 1 || isNaN(bill) || isNaN(people)) {
        Swal.fire({ 
            icon: 'error',
            iconColor: '#333',
            title: 'Error',
            color: '#fff',
            background: '#D1D1D1',
            confirmButtonColor: 'rgba(182, 182, 113)',
            text: 'Please enter your information'
          })
          amountPerPerson.textContent = '';
          tipPerPerson.textContent = '';
          totalSum.textContent = '';
    }

    let amountPerPerson = bill / people;
    let tipPerPerson = (bill * tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;
    
    document.querySelector('#dividedBill').textContent = amountPerPerson.toFixed(2);
    document.querySelector('#dividedTip').textContent = tipPerPerson.toFixed(2);
    document.querySelector('#billAndTip').textContent = totalSum.toFixed(2);
}

const buttonReset = document.querySelector('#buttonReset');
buttonReset.addEventListener('click', () => {
    window.location.reload();
})
