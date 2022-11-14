import styles from './App.module.css';
import classnames from 'classnames';
import { useState, useEffect } from 'react';

// Use state effects
// function App() {

//   const [ageCount, setAgeCount] = useState(0);

//   useEffect(() => {
//     setAgeCount(0)
//   }, [])

//   // const increaseAge = () => setAgeCount((increaseAge) => increaseAge + 1)
//   const increaseAge = () => {
//     setAgeCount(ageCount + 1);
//   }

//   return (
//     <div className={classnames([styles.App, styles.App_header])}>
      
//       {ageCount}
//       <button onClick={increaseAge}>Increase Age</button>
//     </div>
//   );
// }

// Input onchange with use State
// function App() {
//   const [inputVal, setInputVal] = useState();
//   const handleInputChange = (e) => {
//     setInputVal(e.target.value)
//   };
//   return (
//     <div className={classnames([styles.App, styles.App_header])}>
//       <input type="text" onChange={handleInputChange} />
//       {inputVal}
//     </div>
//   );
// }

// Other example - toggling show/hide text
// function App() {
//   const [showText, setShowText] = useState(true);
//   const toggleText = () => {
//     setShowText(!showText);
//   }
//   return (
//     <div className={classnames([styles.App, styles.App_header])}>
//       <button onClick={toggleText}>Show/Hide</button>
//       {showText && <>Test</>}
//     </div>
//   );
// }

// Other example - toggling text colors
// function App() {
//   const [color, setColor] = useState('red');
//   const [isChanged, setIsChanged] = useState(true);
//   const toggleColor = () => {
//     // toggle color 1
//     // setIsChanged(!isChanged)
//     // setColor(isChanged ? 'green' : 'black')

//     // toggle color 2
//     setColor(color === 'red' ? 'green' : 'red');
//   }

//   return (
//     <div className={classnames([styles.App, styles.App_header])}>
//       <button onClick={toggleColor}>Show/Hide</button>
//       <h1 style={{color: color}}>Test</h1>
//     </div>
//   );
// }


// Activity sample
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((incCount) => incCount + 1);
  }
  const decreaseCount = () => {
    setCount((decCount) => decCount - 1);
  }
  const countZero = () => {
    setCount(0)
  }

  return (
    <div className={classnames([styles.App, styles.App_header])}>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={countZero}>Set to Zero</button>
      <br></br>
      {count}
    </div>
  );
}

export default App;
