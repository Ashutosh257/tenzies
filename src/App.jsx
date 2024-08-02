

import { useEffect, useState } from 'react'
import Confetti from "react-confetti"
import Die from './Die'
import allNewDice from './utils'


import './App.css'


function App() {

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    
    useEffect(() => {
        
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const sameValue = dice.every(die => die.value === firstValue)

        if(sameValue && allHeld){
            // console.log("Tenziess!!!")
            setTenzies(true)
        }
        
    }, [dice])

    
    function diceHold(id){
        let diceArr = dice.map(die => {
            if(die.id === id){
                die.isHeld = !die.isHeld 
            }
            return die
        })
        setDice(diceArr)
    }
    
    function rollDice() {
        if(!tenzies){
            setDice(oldDice => oldDice.map(die => {
                return !die.isHeld ? 
                {...die, value: Math.ceil(Math.random() * 6)} :
                die
            }))
        }else{
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} hold={diceHold}/>
    ))

    return (
        <>
            { tenzies && <Confetti />}
            <main>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. 
                    <br />
                    Click each die to freeze it at its current value between rolls.
                </p>
                <div className='dice-container'>
                    {diceElements}
                </div>
                <button className="roll-dice" onClick={rollDice}>
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </main>
        </>
    )
}

export default App
