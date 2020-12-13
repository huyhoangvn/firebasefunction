const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
//say hello function call
const buttonHello = document.querySelector('.call');

//open request modal
requestLink.addEventListener('click', ()=>{
    requestModal.classList.add('open');
});

//close request modal
requestModal.addEventListener('click', (eventParams)=>{
    if(eventParams.target.classList.contains('new-request')){
        requestModal.classList.remove('open');
    }
});

buttonHello.addEventListener('click', ()=>{
    buttonHello.classList.add('active');
/*
    //get function reference
    const sayHello = firebase.function().https().httpsCallable('sayHello');
    sayHello({mes : 'Random Reply'}).then((result) => {
        console.log(result.data);
    });//async/return promise
*/
});

