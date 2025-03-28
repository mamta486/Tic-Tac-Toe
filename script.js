let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newBtn=document.querySelector(".newBtn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.style.color="#ef233c";
      box.innerText = "O";
      turnO = false;
    } else {
      box.style.color="blue";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer.classList.remove("container-size");

}

const disabledBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("container-size");
    disabledBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }
  }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
