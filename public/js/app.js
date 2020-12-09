
const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

//open request modal
requestLink.addEventListener('click', ()=>{
    requestModal.classList.add('open'); 
});

//close request modal
requestModal.addEventListener('click', (eventParams)=>{
    if(eventParams.target.ClassList.contains('new-request')){
        requestModal.classList.remove('open');
    }
});