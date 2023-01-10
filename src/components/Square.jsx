import React from 'react'

function Square({ val, chooseval }) {
    return (
        <div className="square" onClick={chooseval}>{val}</div>
    )
}

export default Square;