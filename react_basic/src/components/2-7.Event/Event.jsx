import React from 'react'

export default function Event() {
    const handleButtonClick = (e) => {
        // console.dir(e);
        console.log("handleButtonClick");
    }
    
    const handleMouseLeave = (e) => {
        console.dir(e);
        console.log("handleMouseLeave");
    }

    const handleClickCaptuer = () => {
        console.log("handleClickCaptuer");
    }

    const handleClickCaptuer2 = () => {
        console.log("handleClickCaptuer2");
    }

    const handleClickBubble = () => {
        console.log("handleClickBubble");
    }

    return (
        <div onClickCapture={handleClickCaptuer}>
            <div onClickCapture={handleClickCaptuer2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
            </div>
        </div>
    )
}
