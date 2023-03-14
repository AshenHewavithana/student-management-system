import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import MainMenu from './pages/MainMenu';
import AddStudent from './student/AddStudent';
import StudentDetails from './pages/StudentDetails';
import EditStudent from './student/EditStudent';
import SystemLog from './pages/SystemLog';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/studentdetails' element={<StudentDetails/>}/>
          <Route exact path='/adduser' element={<AddUser/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
          <Route exact path='/menu' element={<MainMenu/>}/>
          <Route exact path='/addstudent' element={<AddStudent/>}/>
          <Route exact path='/editstudent/:id' element={<EditStudent/>}/>
          <Route exact path='/log' element={<SystemLog/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
