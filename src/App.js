import './App.css';
import {useState, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Buttons from './components/Buttons';
import Count from './components/Count';
import Search from './components/Search'

function App() {

  const [countOne, setCountOne] = useState({value : 0, btnColor : 'success', increment : 25})
  const [countTwo, setCountTwo] = useState({value : 0, btnColor : 'danger', increment : 17 })

  const incrementCountOne = useCallback( (val) => {
    countOne.value < 100 && setCountOne({...countOne, value : countOne.value + val })
  }, [countOne])

  const incrementCountTwo = useCallback( (val) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value : countTwo.value + val })
  }, [countTwo])
  
  return (
    <div className="App">

      <div className = "container">

        <Count count = {countOne.value} bgColor = {countOne.btnColor} />
        <Count count = {countTwo.value} bgColor = {countTwo.btnColor} />
        <Buttons handleClick = {incrementCountOne} btnColor = {countOne.btnColor } increment = {countOne.increment} >count 1</Buttons>
        <Buttons handleClick = {incrementCountTwo} btnColor = {countTwo.btnColor } increment = {countTwo.increment}> count 2</Buttons>

      </div>
      
    </div>
  );
}

export default App;
