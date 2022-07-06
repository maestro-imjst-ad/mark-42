import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Routes as Switcher, Route } from 'react-router-dom';
import Home from './Home';
import { useSelector } from 'react-redux';
import AddProfileInfo from './AddProfileInfo';
import Private from './Private';
import Quiz from './Quiz/Quiz';
import Dashboard from './Dashboard/Dashboard';
import QuizMaker from './QuizMaker/QuizMaker';
import Course from "./Course/Course"
const App = () => {
  const appName = 'Marker'
  
  return (
    <Switcher>
      <Route path='/make-quiz' element={<QuizMaker />} />
      <Route path='/course/:id' element={<Course />} />
      <Route path='/dashboard/' element={<Dashboard />} />
      <Route path='/quiz/:id' element={<Quiz />} />
      <Route path='/private' element={<Private />} />
      <Route path='/add-profile-info' element={<AddProfileInfo />} />
      <Route path='/sign-in' element={<SignIn appName={appName} />} />
      <Route path='/sign-up' element={<SignUp appName={appName} />} />
      <Route path='/'
        element={
          <Home appName={appName} />
        } />
    </Switcher>
  );
}

export default App;
