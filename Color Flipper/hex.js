const hexList = [0,1,2,3,4,5,6,7,8,9,"A","B","C", "D","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += hexList[getRandonNumber()];
    }
    
    document.getElementById('main').style.backgroundColor = hex;
    color.textContent = hex;
    color.style.color = hex;
})

function getRandonNumber(){
    return Math.floor(Math.random() * hexList.length);
}
