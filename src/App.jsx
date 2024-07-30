
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Protofolio from './Components/Protofolio/Protofolio';
import Contact from './Components/Contact/Contact';

function App() {
  let routers = createHashRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"About",element:<About/>},
      {path:"Protofolio",element:<Protofolio/>},
      {path:"Contact",element:<Contact/>},
    ]}
  ])
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
