import './App.css';
import LineOfSquares from './components/UI/LineOfSquares/LineOfSquares';
import UserInput from './components/UI/UserInput/UserInput';
import { useRef, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const inputRef = useRef(null); // реф для інпуту

  const handleButtonClick = () => {
    if (inputRef.current) {
      setText(inputRef.current.value); 
    }
  };
  
  return (
    <div className="main">
      <UserInput inputRef={inputRef} onButtonClick={handleButtonClick} />
      <LineOfSquares text={text} />
    </div>
  );
}
export default App;
