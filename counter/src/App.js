import logo from './logo.svg';
import './App.css';

function App({onPlus, onMinus, value}) {
  return (
    <>
    <duv>{value}</duv>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </>
  );
}

export default App;
