import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Routes as Switcher, Route } from 'react-router-dom';
import Home from './Home';
import { useSelector } from 'react-redux';
import AddProfileInfo from './AddProfileInfo';
import Private from './Private';
const App = () => {
  const appName = 'Marker'
  const userData = useSelector(state => state)
  console.log(userData)
  return (
    // <Check />
    <Switcher>
      <Route path='/private' element={<Private />} />
      <Route path='/add-profile-info' element={<AddProfileInfo />} />
      <Route path='/sign-in' element={<SignIn appName={appName} />} />
      <Route path='/sign-up' element={<SignUp appName={appName} />} />
      <Route path='/' element={
        <Home appName={appName} />
      } />
    </Switcher>
  );
}

export default App;
