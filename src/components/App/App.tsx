import {FC, useState} from 'react';
// styles
import './App.css';


const App: FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="wrapper">
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
