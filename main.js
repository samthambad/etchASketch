
function updateInput(parameter) {
    if (parameter < 100){
        //first delete the initial grid
        deleteChild()
        console.log(document.querySelector(".flex-container .content .input"));
        document.querySelector(".flex-container .content .input").value = parameter;//parameter's value is given to input which is in html
        let dimen = document.querySelector('.flex-container .content .input')
        console.log("The dimension value is"+dimen.value)
        board.style.gridTemplateColumns = `repeat(${dimen.value}, 1fr)`
        //create square
        for (let n=1; n<(((dimen.value)**2) +1 ); n++){
            let square = document.createElement('div')
            square.classList.add(`eachSquare`)
            board.appendChild(square)
            console.log(`${n}`)
    }
    }
    else {
        alert("Enter a number smaller than 100!")
    }

}


let board = document.querySelector('.board');

let dimen = document.querySelector('.flex-container .content .input')//input not changing from 16
console.log(dimen.value)//still 16
board.style.gridTemplateColumns = `repeat(${dimen.value}, 1fr)`
//create square
for (let n=1; n<(((dimen.value)**2) +1 ); n++){
    let square = document.createElement('div')
    square.classList.add(`eachSquare`)
    board.appendChild(square)
    console.log(`${n}`)
}





board.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'black'
    console.log(e.target) 
});

function deleteChild() {
    var board = document.querySelector(".flex-container .content .board");//var gas global scope while let is limited to the block where it is declared
    board.style.backgroundColor ='#ffffe6'//reset the color to white before deleting divs 
    console.log(board)
    //e.firstElementChild can be used.
    var child = board.lastElementChild; 
    while (child) {//while child exists 
        board.removeChild(child);
        child = board.lastElementChild;//the previous lastElmentChild is gone so define a new lastElementChild
    }
}



function clearButton() {
        //first delete the initial grid
        deleteChild()
        console.log(document.querySelector(".flex-container .content .input"));
        document.querySelector(".flex-container .content .input").value = parameter;//parameter's value is given to input which is in html
        let dimen = document.querySelector('.flex-container .content .input')
        console.log("The dimension value is"+dimen.value)
        board.style.gridTemplateColumns = `repeat(${dimen.value}, 1fr)`
        //create square
        for (let n=1; n<(((dimen.value)**2) +1 ); n++){
            let square = document.createElement('div')
            square.classList.add(`eachSquare`)
            board.appendChild(square)
            console.log(`${n}`)
    }
}