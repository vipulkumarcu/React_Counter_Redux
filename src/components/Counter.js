import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

function Counter ()
{
  const counter = useSelector ( state => state.counter );

  const dispatch = useDispatch ();

  function incrementHandler ()
  {
    dispatch ( { type: "increment" } );
  };

  function decrementHandler ()
  {
    dispatch ( { type: "decrement" } );
  };

  function AddMoreHandler ()
  {
    dispatch ( { type: "increment by 5" } );
  };

  function RemoveMoreHandler ()
  {
    dispatch ( { type: "decrement by 5" } );
  };

  function toggleCounterHandler ()
  {};

  return (
    <main className = { classes.counter } >
      <h1> Redux Counter </h1>
      <div className = { classes.value } > { counter } </div>
      <div>
        <button onClick = { incrementHandler } > Increment </button>
        <button onClick = { decrementHandler } > Decrement </button>
      </div>
      <div>
        <button onClick = { AddMoreHandler } > Increment By 5 </button>
        <button onClick = { RemoveMoreHandler } > Decrement By 5 </button>
      </div>
      <button onClick = { toggleCounterHandler } > Toggle Counter </button>
    </main>
  );
}

export default Counter;