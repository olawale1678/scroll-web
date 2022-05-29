const btn = document.querySelector('.button');
const span = document.querySelector('.span');
const link = document.getElementsByClassName('links');
const logo = document.querySelector('.logo-img');
const menu = document.querySelector('.menu');
const one = document.getElementsByClassName('one');
const change = document.querySelector('.change');
const container = document.querySelector('.hero');
const ink = document.getElementsByClassName('ink');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const blank = document.querySelector('#blank');
const stand = document.querySelector('.stand');
const firstName = document.querySelector('.first--name');
const lastName = document.querySelector('.last--name');
const msg = document.querySelector('.msg');
const msg1 = document.querySelector('.msg1');
const spanOne = document.querySelector('.span--one');
const spanTwo = document.querySelector('.span--two');
const select = document.querySelector('.select');
const sideNav = document.querySelector('.sideNav');


stand.addEventListener('click', () => {
    if (firstName.value === '' || lastName.value === '') {
        console.log('the pain');
        feedBack();
        feedBack1();
        return;
    } else {
        console.log('the joy');
        changeInput();
        setTimeout(() => {
            document.querySelector('.form--background').style.display = 'none';
        }, 100);
    }
})

let changeInput = () => {
    if (select.value === 'male') {
        spanTwo.textContent = `mr ${firstName.value}`;
    } else if (select.value === 'female') {
        spanTwo.textContent = `mrs ${firstName.value}`;
    }

}

const feedBack = () => {
    if (firstName.value === '') {
        msg.innerHTML = 'This field cannot be left blank';
        msg.classList.add('feedBack');
        setTimeout(() => {
            msg.classList.add('feed');
        }, 2000);
    }
}

const feedBack1 = () => {
    if (lastName.value === '') {
        msg1.innerHTML = 'This field cannot be left blank';
        msg1.classList.add('feedBack');
        setTimeout(() => {
            msg1.classList.add('feed');
        }, 2000);
    }
}

window.onload = () => {
}

window.onload = () => {
    const time = new Date().getFullYear();
    blank.textContent = time;
    
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 12) {
        spanOne.innerHTML = 'good morning';
        console.log('good morning');
    } else if (hour >= 12 && hour < 17) {
        spanOne.innerHTML = 'good afternoon';
        console.log('good afrernoon');
    } else if (hour >= 17 && hour < 24) {
        spanOne.innerHTML = 'good evening';
        console.log('good evening');
    }
}



btn.addEventListener('click', () => {
    btn.classList.toggle('turn-on');
    span.classList.toggle('move');
    change.classList.toggle('color');
    spanTwo.classList.toggle('clip');
    
    // CHANGE COLOR
    // menu.classList.toggle('color');
    
    for (const first of one) {
        first.classList.toggle('bgColor');
    }
    
    for (const first of link) {
        first.classList.toggle('color');
    }
    
    for(const game of ink){
        game.classList.toggle('ice');
    }
    container.classList.toggle('bane');
})

let dis = () => {
    let scrolly = window.scrollY;
    if (window.innerWidth > 700 && scrolly <= 330) {
        d.classList.add('toggle');
        e.classList.remove('toggle')
    } else if (window.innerWidth > 700 && scrolly >= 330 && scrolly <= 830 ) {
        e.classList.add('toggle')
        d.classList.remove('toggle')
        f.classList.remove('toggle')
    } else if (window.innerWidth > 700 && scrolly >= 831 && scrolly <= 1338) {
        e.classList.remove('toggle')
        f.classList.add('toggle')
        g.classList.remove('toggle')
    } else if (window.innerWidth > 700 && scrolly >= 1339 && scrolly <= 2100) {
        f.classList.remove('toggle');
        g.classList.add('toggle')
    } else if (window.innerWidth > 700 && scrolly > 2100) {
        g.classList.remove('toggle')
    }
}

window.addEventListener('scroll', dis);
window.addEventListener('click', dis);

menu.addEventListener('click', () => {
    a.classList.toggle('clockwise');
    b.classList.toggle('disappear');
    c.classList.toggle('anticlockwise');
    sideNav.classList.toggle('removeNav');
})