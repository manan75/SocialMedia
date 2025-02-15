import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
function App() {
 
  const Layout = () =>{  //for variable users
    return(
      <div></div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])
  return (
    <div >
     <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
