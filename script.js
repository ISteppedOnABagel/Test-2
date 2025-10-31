
const setup = document.getElementById('setup');

const t = document.getElementById('t');
const w = document.getElementById('w');

const joke = document.getElementById('joke');
const hate = document.getElementById('hate');
const sorry = document.getElementById('sorry');
const hater = document.getElementById('hater');

const stage = document.getElementById('stage1');

const hintt = document.getElementById('hintt');

const help = document.getElementById('help');

const punchline = document.getElementById('punchline');
const Image = document.getElementById('Image')

function yesa() {  
    t.style.display='block';
    joke.style.display='none';
    setup.style.display='block'; 
    stage.style.display='block';  
}

function noa() {  
    w.style.display='block';
    joke.style.display='none';
    hater.style.display='block';  
}

function yes1() { 
    hater.style.display='none';  
    hate.style.display='block';
    setup.style.display='block';
    stage.style.display='block'; 
}

function no2() {  
    hater.style.display='none';  
    sorry.style.display='block';
    setup.style.display='block';
    stage.style.display='block';
}

function hint() {  
    hintt.style.display='none';
    help.style.display='block';  
}

function giveup() {  
    stage.style.display='none';
    punchline.style.display='block'; 
    document.getElementById('fun').src='shuck.jpg'
}