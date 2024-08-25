const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Designer",
        img: "./person 1.jpg",
        info: 
        "Susan Smith's web design skills are impressive. The website she created for us not only looks fantastic but also functions seamlessly across all devices. Her attention to detail and creativity truly set her apart. Highly recommend!"
    },
    {
        id: 2,
        name: "Emily Johnson",
        job: "marketing strategist",
        img: "./person 2.jpg",
        info: 
        "Working with Emily Johnson was a pleasure. Her ability to understand our needs and deliver a customized solution exceeded our expectations. The marketing strategy she developed helped us increase our outreach significantly."   
    }, 
    {
        id: 3,
        name: "John Doe",
        job: "Graphic Designer",
        img: "./person 3.jpg",
        info: 
        "I recently hired John Doe for a graphic design project, and I couldn't be happier with the results. His innovative designs and professional approach made the process smooth and enjoyable. Definitely worth the investment!"
    },
    {
        id: 4,
        name: "Jessica Lee",
        job: "Branding Consultant",
        img: "./person 4.jpg",
        info: 
        "Jessica Lee did an exceptional job on our branding project. Her fresh perspective and keen eye for design transformed our brand identity in ways we hadn't imagined. She's professional and a true pleasure to work with."
    }
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const random = document.querySelector('.random');

let currentItem = 0;
let lastRandomNumber = -1;

function loadReviews(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

window.addEventListener("DOMContentLoaded", function () { 
    loadReviews(currentItem);
});

left.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    loadReviews(currentItem);
})

right.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    loadReviews(currentItem);
})

random.addEventListener('click', function() {
    currentItem = randomNumber();
    loadReviews(currentItem);
})

function randomNumber(){
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * reviews.length)
    } while (newNumber === lastRandomNumber)
    lastRandomNumber = newNumber;
    console.log(newNumber)
    return newNumber;
}