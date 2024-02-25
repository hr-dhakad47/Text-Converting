import React, { useState } from 'react'

export default function Filetext(props) {
    const handleUpClick = () => {
        // console.log("uppercase button was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success")
    }
        const handleLoClick = () => {
            // console.log("lowercase button was clicked" + text)
            let newtext = text.toLowerCase();
            setText(newtext)
            props.showAlert("converted to lowercase", "success")

    }
    const handleclearClick = () => {
        // console.log("lowercase button was clicked" + text)
        let newtext = '';
        setText(newtext)
        props.showAlert("text has been cleared", "success")

    }
    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here')
    return (
        <>
        <div ClassName="container">
            <h1>{props.heading}</h1>
            <div ClassName="mb-3">
            <textarea class="form-control my-2" value={text} type="text" onChange={handleOnChange} id="myBox" rows="8"  placeholder="Default input" aria-label="default input example"/>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary" onClick={handleclearClick}>clear text</button>
            
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            {/* <p>{text}</p> */}
        </div>
        </>
    )
    }
