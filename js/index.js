//select html elements
const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

//Event function
sendBtn.addEventListener('click', passMsg);
function passMsg(content){
        content= messageIn.value;
    if(content === ''){
        alert('Please enter a value');
    }else{
    messageOut.innerHTML=content;
    messageIn.value='';
    }
};