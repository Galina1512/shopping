const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', ()=> {
const item = document.createElement('li');
item.innerText = inputField.value;
toDoContainer.appendChild(item);
item.classList.add('toDoAdd');

inputField.value = ' ';

item.addEventListener('click',()=>{
    item.classList.add ('toDoComplited');
})
item.addEventListener('dblclick', ()=>{
    toDoContainer.removeChild(item);
})
})
// btn.addEventListener('mouseover', ()=>{
//     document.body.style.backgroundImage = 'url(/coffe.jpg)'
// })
// btn.addEventListener('mouseout', ()=>{
//     document.body.style.backgroundImage = 'url(/cap.jpg)'
// })

