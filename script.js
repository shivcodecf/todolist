let input=document.getElementById('input-box');
let btn= document.getElementsByTagName('button');

let contan=document.getElementById('list-container');

function push(){
    const create = document.createElement("li");
    create.innerHTML = input.value;
    
    
   
    contan.appendChild(create);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    create.appendChild(span);

    input.value = "";
 saveData();


}
contan.addEventListener("click",function(e)
{
if(e.target.tagName === "LI")
{
e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
saveData();
});

function saveData(){
    localStorage.setItem("data", contan.innerHTML);
}
function show(){
contan.innerHTML = localStorage.getItem("data");
}
show();
