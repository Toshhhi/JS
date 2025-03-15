const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give valid height ${height}`;
    }
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi >= 18.6){
            results.innerHTML = 'you are under weight';
        }
        if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = 'you are normal';
        }
        if(bmi <= 24.9){
            results.innerHTML = 'you are over weight';
        }
    }
}); 