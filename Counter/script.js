let count = 0;

const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.buttons')

btns.forEach(button => {
    button.addEventListener('click', function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else {
            count = 0;
        }
        if(count > 0){
            counter.style.color = '#38b000';
        }
        if(count < 0){
            counter.style.color = '#bf0603';
        }
        if(count === 0) {
            counter.style.color = 'black';

        }
        counter.textContent = count;
    })
})


// My Solution... Works Fine but bit immature
// const counter = document.getElementById('counter')
// const increase = document.getElementById('increase')
// const decrease = document.getElementById('decrease')
// const reset = document.getElementById('reset')

// let currentCount = 0;

// function updatecolor(){
//     if(currentCount > 0){
//         counter.style.color = '#38b000';
//     } else if (currentCount < 0 ){
//         counter.style.color = '#bf0603';    
//     } else {
//         counter.style.color = 'black';
//     }
// }

// increase.addEventListener('click', function(){
//     currentCount++;
//     counter.textContent = currentCount;
//     updatecolor();
// })

// decrease.addEventListener('click', function(){
//     currentCount--;
//     counter.textContent = currentCount;
//     updatecolor();
// })

// reset.addEventListener('click', function(){
//     currentCount = 0;
//     counter.textContent = currentCount;
//     updatecolor();
// })