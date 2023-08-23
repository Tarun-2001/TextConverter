import React, { useState } from 'react'

export default function Form(props) {

    const [text, setText] = useState('')
    const handleUppercase = ()=>{
        setText(text.toUpperCase())
        props.showAlert(" Converted to upper case", "success")
        setTimeout(() => {
            props.setAlert(null)
          }, 1500);
    }
    const handleLowercase = ()=>{
        setText(text.toLowerCase())
        props.showAlert(" Converted to lower case", "success")
        setTimeout(() => {
            props.setAlert(null)
          }, 1500);
    }
    const handleRemoveSpaces = ()=>{
        let textNew = text.split(/[ ]+/);
        setText(textNew.join(" "))
        props.showAlert(" Removed empty spaces", "success")
        setTimeout(() => {
            props.setAlert(null)
          }, 1500);
    }
    const handleclear = ()=>{
        setText('')
        props.showAlert(" Textbox cleared", "success")
        setTimeout(() => {
            props.setAlert(null)
          }, 1500);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const copyText= ()=>{
        var txt = document.getElementById('myBox')
        txt.select();
        txt.setSelectionRange(0,999)
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Texted is coppied!!!", "success")
        setTimeout(() => {
            props.setAlert(null)
          }, 1500);
    }

  return (
    <div>    
        <div className="mb-3">
            <h1><label hmtlFor="myBox" className="form-label" >Enter your text</label></h1>
            <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8" placeholder='Write your text here' style={{backgroundColor:props.mode=='dark'?'#e5e9e8ad':'white'}}></textarea>
        </div>
        <button disabled={text.length==0} className='btn btn-primary mx-3'  onClick={handleUppercase} >Convert Upper Case</button>
        <button disabled={text.length==0} className='btn btn-primary mx-3'  onClick={handleLowercase} >Convert Lower Case</button>
        <button disabled={text.length==0} className='btn btn-primary mx-3'  onClick={handleRemoveSpaces} >Remove Spaces</button>
        <button disabled={text.length==0} className='btn btn-primary mx-3'  onClick={copyText} >Copy Text</button>
        <button disabled={text.length==0} className='btn btn-primary mx-3'  onClick={handleclear}>Clear</button>

        <div className='container'>
            <h1>Your text summary</h1>
            <p>{text.split(' ').filter((element)=>{
                return element.length!=0
            }).length} Words, {text.length} characters</p>
            <p>{0.008* text.split(' ').filter((element)=>{
                return element.length!=0
            }).length} Minute read</p>
        </div>
    </div>
  )
}
