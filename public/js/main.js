let li = document.querySelectorAll("li");

/*li.forEach(element =>{
    element.addEventListener('click',function(){
        sayMyName(element);
    })
})

function sayMyName(elElement){
    alert(elElement.innerText);
}*/



li.forEach(element =>{
    element.addEventListener('dblclick',function(){
        onModifie(element);
    })
})

function onModifie(elElement){
    let newText = prompt('Veuillez entre un nouveau contenu pour le li');

    elElement.innerText = newText;
}



document.querySelectorAll("input")[2].addEventListener('click',()=>{
    let input = document.getElementById("li-one").value;
    let input2 = document.getElementById("li-two").value;

    li.forEach(element=>{
        if(element.innerText == input){
            element.innerText = input2;  
        } else if (element.innerText == input2){
            element.innerText = input;
        }
    })
})