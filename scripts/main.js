const myHeading = document.querySelector('h1');
const btn = document.querySelector('button');


myHeading.textContent = 'Hello World!';

const myImg = document.querySelector('img');

myImg.onclick = ()=> {
    const imgSrc = myImg.getAttribute('src');
    if (imgSrc === 'images/Firefox_icon.png') {
        myImg.setAttribute('src', 'images/firefox2.png')
    } else {
        myImg.setAttribute('src', 'images/Firefox_icon.png')
    }
}

function setUserName(params) {
    const userName = prompt("Please enter your name");
    if (!userName) {
        setUserName();
    } else {
        
        localStorage.setItem('name', userName);
    
        myHeading.textContent = `Mozilla is cool, ${userName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

btn.onclick = ()=> {
    setUserName();
}