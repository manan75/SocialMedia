import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Components/Navbar';
import LeftBar from './Pages/Components/LeftBar';
import RightBar from './Pages/Components/RightBar';
import Home from "./Pages/Home/home"
import Profile from './Pages/Profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom';
function App() {
 const currentUser = true;  //for test , if i do false it will get protected routed i.e user isnt logged in
  const Layout = () =>{  //for variable users , outlet allows other children to be visible there
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <Outlet/>                  
          <RightBar/>
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({children}) =>{      //if user is logged in it will return to login page
    if(!currentUser){
      return <Navigate to="/login"></Navigate>
    }
    return children
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoute><Layout/></ProtectedRoute> ,
      children:[
        {
          path: "/home",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
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
