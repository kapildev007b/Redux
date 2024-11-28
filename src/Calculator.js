import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, divisionNumber, modulusNumber, multiplicationNumber, powerNumber, refreshNumber, subtractNumber } from './Redux/action';
import './Calculator.scss'

function Calculator() {

const [input1, Setinput1] = useState('');
const [input2, Setinput2] = useState('');
const[addvalue , setAddvalue] = useState('')

const dispatch = useDispatch();

const   addResult = useSelector(state=> state.add.result)
const subtractResult = useSelector(state => state.subtract.result)
const multiplicationResult = useSelector( state=>state.multiplication.result)
const divisionResult = useSelector( state =>state.division.result)
const modulusResult = useSelector( state =>state.modulus.result)
const powerResult = useSelector( state =>state.power.result)

console.log(multiplicationResult , "multiplicationResult");

const handleinput1 = (e) => Setinput1(e.target.value)
const handleinput2 = (e) => Setinput2(e.target.value) 

const handleAdd = () =>{
  const value1 = Number(input1);
  const value2 = Number(input2);

  if(!isNaN(value1) && !isNaN(value2)){
    dispatch(addNumber(value1+value2));
    Setinput1('')
    Setinput2('')
  }
}

const handleSubtract = () =>{
  const value1 = Number(input1);
  const value2 = Number(input2);
  if(!isNaN(value1)&& !isNaN(value2)){
    dispatch(subtractNumber(value1-value2));
    Setinput1('')
    Setinput2('')
  }
}
const handleMultiplication = () =>{
  console.log("Hello");
  
  const value1 = Number(input1);
  const value2 = Number(input2);

  console.log(value1 , value2);
  
  if(!isNaN(value1)&& !isNaN(value2)){
   console.log( dispatch(multiplicationNumber(value1 * value2)));
   
    Setinput1('')
    Setinput2('')
  }
}
const handleDivision = () =>{
  const value1 = Number(input1);
  const value2 = Number(input2);
  if(!isNaN(value1)&& !isNaN(value2)){
    dispatch(divisionNumber(value1/value2));
    Setinput1('')
    Setinput2('')
  }
}
const handleModulus = () =>{
  const value1 = Number(input1);
  const value2 = Number(input2);
  if(!isNaN(value1)&&!isNaN(value2)){
    dispatch(modulusNumber(value1%value2));
    Setinput1('')
    Setinput2('')
  }
}
const handlePower = () =>{
  const value1 = Number(input1);
  const value2 = Number(input2);
  if(!isNaN(value1)&&!isNaN(value2)){
    dispatch(powerNumber(value1**value2));
    Setinput1('')
    Setinput2('')
  }
}

const handleRefresh = () =>{
  dispatch(refreshNumber())
  Setinput1('')
  Setinput2('')
}
 

  return (
    
    <div> 
      <h1>CALCULATOR USING REDUX</h1>
   <input type="number" placeholder="Enter the number" value={input1} onChange={handleinput1}></input><br></br>
   <input type="number" placeholder="Enter the number" value={input2} onChange={handleinput2}></input><br></br>
   <center>
   <button className='btn' onClick={handleAdd}>ADD</button>
   <button className='btn' onClick={handleSubtract}>SUBTRACT</button>
   <button className='btn' onClick={handleMultiplication}>MULTIPLY</button>
   <button className='btn' onClick={handleDivision}>DIVISION</button>
   <button className='btn' onClick={handleModulus}>MODULUS</button>
   <button className='btn' onClick={handlePower}>POWER</button>
   <button className='btn' onClick={handleRefresh}>REFRESH</button>
   <div>
   <h2>Addition Result:{addResult}</h2>
   <h2>Subtraction Result:{subtractResult}</h2>
   <h2>Multiplication Result :{multiplicationResult}</h2>
   <h2>Division Result :{divisionResult}</h2>
   <h2>Modulus Result :{modulusResult}</h2>
   <h2>Power Result :{powerResult}</h2>
   </div>
   </center>

   </div>




  )
}

export default Calculator