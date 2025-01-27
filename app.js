let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); // Fixed typo in 'querySelector'

let turnO = true;
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); // Hide message container
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("box was clicked.");
        if (box.innerText !== "") return; // Prevent overwriting an already clicked box
        if (turnO) {
            box.innerText = "O";
            box.setAttribute("data-player", "O");
        } else {
            box.innerText = "X";
            box.setAttribute("data-player", "X");
        }
        turnO = !turnO;
        checkWinner(); // Check for a winner after each move
    });
});

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
        box.removeAttribute("data-player"); // Clear data-player attribute
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winning) {
        let [a, b, c] = pattern;
        let boxA = boxes[a];
        let boxB = boxes[b];
        let boxC = boxes[c];
        let pos1Val = boxA.getAttribute("data-player");
        let pos2Val = boxB.getAttribute("data-player");
        let pos3Val = boxC.getAttribute("data-player");

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
            return; // Exit the function after finding a winner
        }
    }
};

// Add event listener for reset and new game buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);









// let boxes=document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelecctor("#msg")

// let turnO = true;
// const winning=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
// };

// boxes.forEach((box) => {
//     box.addEventListener("click",() => {
//         console.log("box was clicked.");
//         if(turnO) {
//             box.innerText= "O";
//             turnO =false;
//         } else {
//             box.innerText ="X";
//             turnO = true;
//         }
//     })
// }

// );

// const disableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = true;
//     }
// }

// const enableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = false;
//         box.innerText="";
//     }
// }



// const showWinner = (winner) => {
//     msg.innerText = `congratulations, winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };



// const checkWinner= () => {
//     for(let pattern of winPatterns) {
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;


//         if(pos1Val != "" && pos2Val!="" && pos3Val !=""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val) {
//                 console.log("winner", pos1Val);

//             }
//         }
//     }
// }