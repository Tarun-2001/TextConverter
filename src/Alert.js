import React from 'react'

export default function Alert(props) {
    const capitlise = (str)=>{
        const temp = str.toUpperCase();
        return temp.charAt(0)+str.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    {
      props.alert&&<div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{capitlise(props.alert.type)}</strong>:{props.alert.msg}
          </div>
      </div>
    }

    </div>
  )
}