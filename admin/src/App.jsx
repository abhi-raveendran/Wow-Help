import { Route,Routes } from 'react-router-dom'
import Department from './pages/Department'
import AddLocation from './pages/Location'
import Home from './pages/home'
import './App.css'


const App=()=>{
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin/department' element={<Department/>}/>
      <Route path='/admin/location' element={<  AddLocation/>}/>

    </Routes>
  )

}
export default App