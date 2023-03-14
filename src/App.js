import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import MainMenu from './pages/MainMenu';
import AddStudent from './student/AddStudent';
import StudentDetails from './pages/StudentDetails';
import EditStudent from './student/EditStudent';
import SystemLog from './pages/SystemLog';
import ViewStudent from './student/ViewStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/studentdetails' element={<StudentDetails/>}/>
          <Route exact path='/menu' element={<MainMenu/>}/>
          <Route exact path='/addstudent' element={<AddStudent/>}/>
          <Route exact path='/editstudent/:id' element={<EditStudent/>}/>
          <Route exact path='/viewstudent/:id' element={<ViewStudent/>}/>
          <Route exact path='/log' element={<SystemLog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
