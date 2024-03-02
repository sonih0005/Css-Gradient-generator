const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const colorContainer = document.querySelector('.text-container');
// const body = document.querySelector('body');



const generateHex = () => {
    let hexValues = "0123456789abcdef";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hexValues[Math.floor(Math.random()*16)]
    }
    return color
}
let result1 = '#fff';
let result2 = '#49ba4e';

const setColor = () => {
    document.body.style.background = `linear-gradient(to right,${result1},${result2})`;
    colorContainer.innerHTML = `background-image: linear-gradient(to right,${result1},${result2});`
}

const handleButton1 = () => {
result1 = generateHex()
   setColor()
   button1.innerText = `${result1}`
   button1.style.background = `${result1}`
   
}
const handleButton2 = () => {
   result2 = generateHex()
   setColor()
   button2.innerText = `${result2}`
   button2.style.background = `${result2}`
  
}


button1.addEventListener('click',handleButton1);
button2.addEventListener('click',handleButton2);

colorContainer.addEventListener('click', ()=>{
    navigator.clipboard.writeText(colorContainer.innerText);
    alert('your style is copied on clipboard')
    
});
