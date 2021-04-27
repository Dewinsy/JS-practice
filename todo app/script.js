let ourInput = document.querySelector(".our-input");
let ourBtn = document.querySelector(".our-btn");
let ourContainer= document.querySelector(".our-container");


console.log(`Input Element ${ourInput}`);
console.log(`Button Element ${ourBtn}`);
console.log(`Container Element ${ourContainer}`);

ourContainer.style.border = "1px solid black";
ourContainer.style.height= "100px";
ourContainer.innerHTML = "<h2>hello guys...</h2>";

function change(){
    console.log(ourInput.value);
    ourContainer.innerHTML = `<li> ${ourInput}.value </li>`
    
}






