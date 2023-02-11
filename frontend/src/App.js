import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
      </Route>
    </Routes>
  );
}
 
export default App;