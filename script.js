const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const button = document.querySelector('#button');
const color = document.querySelector('#color');

buttons.forEach( (button)=> {
    console.log(button);
    button.addEventListener('click' , (e)=> {
        // console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;

            case 'white':
                body.style.backgroundColor = 'white';
                break;

            case 'blue':
                body.style.backgroundColor = 'blue';
                break;

            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;

            default:
                alert('Please click on any color')
                break;
        }
    })
})

button.addEventListener('click', (e) => {
    body.style.backgroundColor = color.value;
});