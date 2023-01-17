import {  useState } from 'react'

function RobotForm (props) {
    const { onAdd }=props
    const [name, setName]=useState('')
    const [type, setType]=useState('')
    const [mass, setMass]=useState('')


    const add=(evt)=>{
        onAdd({
            name,
            type,
            mass
        })
        
    }
    return(
        <div >
            <div >
                <input  type='text' placeholder='name' value='name' onChange={(evt)=>
                setName(evt.target.value)} />
            </div>
            <div >
            <input type='text'  placeholder='type' value='type' onChange={(evt)=>
                setType(evt.target.value)} />
            </div>
             <div >
             <input  type='text'  placeholder='mass' value='mass' onChange={(evt)=>
                setMass(evt.target.value)} />
            </div>
            <div>
                <input type='button' value='add' onClick={add}/>
            </div>
            
        </div>
    )
	
}

export default RobotForm