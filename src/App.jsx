import { useState } from 'react'
import styles from './App.module.css'
import Buttons from './components/Buttons'
import Display from './components/Display'
function App() {

  const  [calVal , setCalVal] = useState(""); 

  const onButtonClick = (buttonText)=>{
    if(buttonText==='C')
    {
      setCalVal("")
    }
    else if(buttonText === '=')
    {
      const result = eval(calVal);
      setCalVal(result);
    }
    else
    {
      const newDisplayVal = calVal + buttonText; 
      setCalVal(newDisplayVal);
    }
    console.log(buttonText);
  };

  return (
  <div className={styles.calculator}>
   <Display displayValue={calVal}></Display>
   <Buttons onButtonClick={onButtonClick} ></Buttons>
  </div>
  )
}

export default App
