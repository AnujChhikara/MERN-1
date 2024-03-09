import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import RootLayout from './Components/Common/RootLayout';
import HomePage from './Components/Pages/HomePage';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import PageNotFound from './Components/Common/404Page';
import Logout from './Components/Pages/Logout';


const router = createBrowserRouter([
  {path: '/' ,
   element: <RootLayout/>,
   errorElement: <PageNotFound/>,
  children: [
    {index: true , element: <HomePage/>},
    {path: 'contact', element: <Contact/>},
    {path: 'about', element: <About/>},
    {path: 'service', element: <Service/>},
    {path: 'login', element: <Login/>},
    {path: 'register', element: <Register/>},
    {path: 'logout', element: <Logout/>}
    

  ]},
])
 

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
