

export default function allNewDice(){
    let diceArr = [] 
    for(let i=0; i < 10; i++){
        diceArr.push({
            id: i,
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        })
    }
    return diceArr
}

