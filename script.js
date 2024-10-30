const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

let expression = '';
let result = 0;

keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.getAttribute('value');

        if (value === '=') {
            try {
                result = eval(expression);
                display.value = result;
                expression = '';
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        } else if (value === 'C') {
            expression = '';
            display.value = '';
        } else {
            expression += value;
            display.value = expression;
        }
    });
});

