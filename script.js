const containerEle = document.querySelector(".container");
const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click", ()=>{
    for(let i=0; i<60; i++){
        let actColor = getColor();
        const colorContainerEle = document.createElement("div");
        colorContainerEle.classList.add("color-container");
        colorContainerEle.innerText = actColor;
        colorContainerEle.style.backgroundColor = actColor;
        containerEle.appendChild(colorContainerEle);
    }
})


function getColor(){
    let color = "";
    for(let i=0; i<6; i++){
        let colorCode = "0123456789abcdef";
        let randomNo = Math.floor(Math.random()*16)
        color = color + `${colorCode[randomNo]}`;
        // console.log(color);
    }
    let actualColor =" #" + `${color}`;
    // console.log(actualColor);

    return actualColor;
}






