import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from "./redux/ducks/counter";

const Counter = (props) => {
    const { name } = props;
    const [localCount, setLocalCount] = React.useState(0);


    //useDispatch allows us to call any function that our ducks has.
    const dispatch = useDispatch();

    const handleIncrement = () => {
        //can't just call increment() because the function itself does nothing (go look at fxn for yourself)
        dispatch(increment());
        setLocalCount(localCount + 1);
    }

    const handleDecrement = () => {
        dispatch(decrement());
        setLocalCount(localCount - 1);
    }
 
    return (
        <React.Fragment>
        <div style={{backgroundColor: "grey", margin: "10px" }}>
            <h2> {`${name}'s count: ${localCount}`} </h2>
            <div style={{ display: "flex", justifyContent: "center",}}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
                {/* <button onClick={() => setCount(count * 2)}> Multiply by 2 </button>
                <button onClick={() => setCount(0)}> Reset </button>                 */}
            </div>
        </div>

        </React.Fragment>
    )    
}

export default Counter;