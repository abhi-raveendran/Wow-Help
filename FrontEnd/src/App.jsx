import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import 'react-toastify/dist/ReactToastify.css';
import UserLogin from './Pages/UserLogin';
import UserSignup from './Pages/userSignup';

import LabourLogin from './Pages/LabourLogin';
import Department from './Pages/Department';
import DepartmentDetails from './Pages/DepartmentDetails';
import BookLabour from './Pages/BookLabour';
import LabourProfile from './Pages/LabourProfile';
import LabourRequest from './Pages/LabourRequest';
import LabourSignUp from './Pages/labourSignup';
import PrivateRoute from './Components/privateRoutes';
import MyBookings from './Pages/UserBookings';
import About from './Pages/About';
import './App.css'


const App=()=>{
  return (
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/user/signup' element={<UserSignup/>}/>
      <Route element={<PrivateRoute role={['USER']} path="/login"/>} >
      <Route path='/user/department' element={<Department/>}/>
      <Route path='/department/departmentdetails/:id' element={<DepartmentDetails/>}/>
      <Route path='/labour/bookingpage/:id' element={<BookLabour/>}/>
      <Route path='/booking/:id' element={<MyBookings/>}/>
      

      </Route>


      
      <Route path='/labour/signup' element={<LabourSignUp/>}/>
      <Route path='/labour/login' element={<LabourLogin/>}/>
      <Route element={<PrivateRoute role={['LABOUR']} path="/labour/login"/>} >
      <Route path='/labour/request' element={<LabourRequest/>}/>
      <Route path='/labour/profile/:id' element={<LabourProfile/>}/>
      </Route>



    </Routes>
  )

}
export default App;