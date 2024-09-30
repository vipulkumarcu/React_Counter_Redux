import { createStore } from "redux";

function counterReducer ( state = { counter : 0 }, action )
{
  if ( action.type === "increment" )
  {
    return {
      counter : state.counter + 1,
    }
  }

  if ( action.type === "decrement" )
  {
    return {
      counter : state.counter - 1,
    }
  }

  if ( action.type === "increment by 5" )
  {
    return {
      counter : state.counter + 5,
    }
  }

  if ( action.type === "decrement by 5" )
  {
    return {
      counter : state.counter - 5,
    }
  }


  return state;
}

const store = createStore ( counterReducer );

export default store;