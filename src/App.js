import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
// import Counter from './components/Counter';


function App ()
{
  const isAuth = useSelector ( state => state.authentication.isAuthenticated );
  
  return (
    <>
      <Header />
      { isAuth ? <UserProfile /> : <Auth /> }
      {/* <Counter /> */}
    </>
  );
}

export default App;