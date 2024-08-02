
import React from 'react'

const Die = ({value, isHeld, id, hold}) => {

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }

    return (
        <div className='die-face' style={styles} onClick={() => hold(id)}>
            <h2 className='die-num'>{value}</h2>
        </div>
    )
}

export default Die