import {React, useState} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  const onClickPlus = () => {
    if (count < max)
    setCount(count + 1);
  }

  const onClickMinus = () => {
    if (count > min)
    setCount(count - 1);
  }

  const minimumChange = event => setMin(parseInt(event.target.value));

  const maxChange = event => setMax(parseInt(event.target.value));
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <div className="counter counter-container">
            <span className='min-num'>Минимальное число: </span>
            <input type="text" onChange={minimumChange} placeholder="Минимальное введённое число" value={min} />
            <span className='max-num'>Максимальное число: </span>
            <input type="text" onChange={maxChange} placeholder="Максимальное введённое число" value={max} />
            <div className='line'></div>
            <h2 className="counter-title">Счётчик:</h2>
            <h1 className="counter-number">{count}</h1>
            <button className="minus" onClick={onClickMinus}>-</button>
            <button className="plus" onClick={onClickPlus}>+</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
