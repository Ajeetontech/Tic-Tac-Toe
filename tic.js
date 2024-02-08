let boxes = document.querySelectorAll(".box");
console.log(boxes);
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
let reset = document.querySelector("#reset-btn");
let msgcon = document.querySelector(".msg-container");

let turnO = true;  //PlayerX, PlayerY

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="X";
            turnO=false;

        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){

            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};

const showWinner=(Winner)=>{
    msg.innerText = `Congratulation Winner is, ${Winner}`;
    msgcon.classList.remove("hide");
    disableButton();
};

const disableButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableButton=()=>{
    for(let en of boxes){
        en.disabled=false;
        en.innerText="";
    }
};

const resetButton=()=>{
    enableButton();
    turnO=true;
    msgcon.classList.add("hide");
};
newGame.addEventListener("click",resetButton);
reset.addEventListener("click",resetButton);

