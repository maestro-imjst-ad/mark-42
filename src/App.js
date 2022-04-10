import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Routes as Switcher, Route } from 'react-router-dom';
import Home from './Home';
import Box from '@mui/material/Box';
import AddProfileInfo from './AddProfileInfo';
import Check from './Check'
const App = () => {
  const appName = 'Marker'
  return (
    // <Check />
    <Switcher>
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
