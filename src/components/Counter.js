import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

function Counter ()
{
  const counter = useSelector ( state => state.counter.counter );

  const show = useSelector ( state => state.counter.showCounter );

  const dispatch = useDispatch ();

  function incrementHandler ()
  {
    dispatch ( counterActions.increment () );
  };

  function decrementHandler ()
  {
    dispatch ( counterActions.decrement () );
  };

  function AddMoreHandler ()
  {
    dispatch ( counterActions.increase ( 5 ) );
  };

  function RemoveMoreHandler ()
  {
    dispatch ( counterActions.decrease ( 5 ) );
  };

  function toggleCounterHandler ()
  {
    dispatch ( counterActions.toggle () );
  };

  return (
    <main className = { classes.counter } >
      <h1> Redux Counter </h1>
      { show && <div className = { classes.value } > { counter } </div> }
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