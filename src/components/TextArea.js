import React, { useState } from 'react'

export default function TextArea(props) {
    const convertToUpper=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert(" Converted to upper case", "success")
    }
    const convertToLower=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert(" Converted to Lower case", "info")
    }
    const handleClearText =()=>{
        let newText=""
        setText(newText)
        props.showAlert(" Text cleared", "danger")
    }
    const extractName =()=>{
       const parts=text.split("@")
       if (parts.length===2) {
        setNewEmailName(parts[0])
       }
       else{
        setNewEmailName("")
       }
        props.showAlert(" Converted to upper case", "success")
       
    }
    const copyText=()=>{
        let copiedText = document.getElementById("my-textbox")
        copiedText.select()
        document.execCommand("copy")
        props.showAlert(" Copied successfully", "success")
        
    }
    
    const editText=(event)=>{
        console.log("Changed")
        setText(event.target.value)
    }
    const[text,setText]=useState("")
    const [newEmailName, setNewEmailName] = useState(""); 
    
    return (
    <>
            <div className='container' style={{ color: (props.mode === "dark" || props.modeGreen === "green") ? "white" : "black" }}> 
            <h1>{props.heading}</h1>
                    <div className="mb-3">
                    <textarea className='form-control' style={{backgroundColor: props.mode === "dark" ? "#121e6de0" : "white", color: props.mode ==="dark" ? "white" : "black" }} id="my-textbox" value={text} cols="30" rows="10" onChange={editText} placeholder='Enter your text here'></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={convertToUpper}>To UpperCase</button>
                    <button className="btn btn-primary mx-4" onClick={convertToLower}>To LowerCase</button>
                    <button className="btn btn-primary mx-4" onClick={extractName}>Extract Email name</button>
                    <button className="btn btn-primary mx-4" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary mx-4" onClick={handleClearText}>Clear Text</button>
        </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Counting Area</h2>
            <br />
                <p>{text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words and {text.length} charecters </p>

            <h2>Preview</h2>
            <p>{text}</p>
            <h2>The user name extracted from the email is {newEmailName}</h2>
        </div>
    </>
    )
}
