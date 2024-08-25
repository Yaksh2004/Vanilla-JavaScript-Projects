const colors = ["SlateGray", "LightSlateGray", "CadetBlue", "MediumSeaGreen", "SteelBlue", "MediumAquamarine", "DarkSeaGreen", "RosyBrown", "IndianRed", "DarkKhaki", "Peru", "GoldenRod", "MediumPurple", "CornflowerBlue", "Teal", "OliveDrab", "DarkCyan", "DimGray", "Sienna", "LightSteelBlue"];
const btn = document.getElementById("btn");
const colour = document.getElementById('color');

btn.addEventListener('click', function(){
    const randomNumber = getRandonNumber();
    document.getElementById('main').style.backgroundColor = colors[randomNumber];
    colour.textContent = colors[randomNumber];
    colour.style.color = colors[randomNumber];
})

function getRandonNumber(){
    return Math.floor(Math.random() * colors.length);
}