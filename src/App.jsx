import './App.css';
import { Machine } from './Components/Machine';

function App() {

  const number1 = Math.floor(Math.random() * 10 + 1)
  const number2 = Math.floor(Math.random() * 10 + 1)
  const numbers = number1 + " x " + number2
  const result = number1 * number2


  return (
    <div className="body_content">
      <div className="box">
          
          <Machine
          numbersMachine = {numbers}
          resultOperation = {result}
          number1= {number1}
          number2= {number2}
          />

      </div>
    </div>
    )
}

export default App;
