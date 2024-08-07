import React, { useRef, useState } from "react";
import './TicTacToe.css'
import x_icon from './cross.png'
import o_icon from './circle.png'

let data = ["","","","","","","","",""];

let currentSymbol = 'x'
let currentIcon = x_icon

const TicTacToe = () => {

    let [lock, setlock] = useState(false);
    let titleref = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        
        console.log("clicked...", num)

        if(lock){
            return 0;
        }

        data[num] = currentSymbol;
        e.target.innerHTML = `<img src='${currentIcon}'>`;
        
        if(currentSymbol == 'x') {
            currentSymbol = 'o'
            currentIcon = o_icon
        } else {
            currentSymbol = 'x'
            currentIcon = x_icon
        }
    

        checkwin()
    }
    const checkwin = () => {
            
        if(data[0] === data[1] && data[1] === data[2] && data[2] !==""){
            win(data[2]);

        }else if(data[3] === data[4] && data[4] === data[5] && data[5] !=="") {
            win(data[5]);

        }else if(data[6] === data[7] && data[7] === data[8] && data[8] !=="") {
            win(data[8]);

        }else if(data[1] === data[4] && data[4] === data[7] && data[7] !=="") {
            win(data[7]);
            
        }else if(data[2] === data[5] && data[5] === data[8] && data[8] !=="") {
            win(data[8]);
        
        }else if(data[0] === data[4] && data[4] === data[8] && data[8] !=="") {
            win(data[8]);
    
        }else if(data[0] === data[1] && data[1] === data[2] && data[2] !=="") {
            win(data[2]);

        }else if(data[2] === data[4] && data[4] === data[6] && data[6] !=="") {
            win(data[6]);

        }
    }

    const win = (winner) => {
        setlock(true)
        if(winner === "x") {
            titleref.current.innerHTML = `<img src='${x_icon}'>: Wins`;
        } else {
            titleref.current.innerHTML = `<img src='${o_icon}'>: Wins`;
        }
    }

    const reset = () => {
        data = ["","","","","","","","",""]
        setlock(false);
        titleref.current.innerHTML = `Tic Tac Toe Game`;
        box_array.map((e) =>{
            e.current.innerHTML = "";
        })
    }

    return(
        <div className="container">
            <h1 className="title" ref = {titleref}>Tic Tac Toe Game</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e, 0)}}>0</div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e, 1)}}>1</div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e, 2)}}>2</div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e, 3)}}>3</div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e, 4)}}>4</div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e, 5)}}>5</div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e, 6)}}>6</div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e, 7)}}>7</div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e, 8)}}>8</div>
                </div>
            </div>
            <button className="reset" onClick={() => {reset()}}>Reset</button>
        </div>
    )
}

export default TicTacToe