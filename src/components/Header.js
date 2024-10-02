import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authenticationActions } from '../store';

function Header ()
{
  const isAuth = useSelector ( state => state.authentication.isAuthenticated );

  const dispatch = useDispatch ();

  function submitHamdler ( event )
  {
    event.preventDefault (); 
    dispatch ( authenticationActions.logout () );
  }

  return (
    <header className = { classes.header } >
      <h1> Redux Auth </h1>
      {
        isAuth &&
        <nav>
          <ul>
            <li>
              <a href = '/' > My Products </a>
            </li>
            <li>
              <a href = '/' > My Sales </a>
            </li>
            <li>
              <button onClick = { submitHamdler } > Logout </button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;