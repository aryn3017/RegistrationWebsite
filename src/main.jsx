import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx' 
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Navbar from './components/Header/Navbar.jsx'
import Speakerhead from './components/Speakers/Speakerhead.jsx'
import Teamhead from './components/Team/Teamhead.jsx'
import Contact from './components/Contact/Contact.jsx'
import Impinfo from './components/Impinfo/Impinfo.jsx'



const router = createBrowserRouter([
  {
    path: '#/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home visib="hidden"/>
      },
      {
        path: "speakers",
        element: <Speakerhead/>,
      },
      {
        path: "team",
        element: <Teamhead/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "Impinfo",
        element: <Impinfo/>,
      },
      {
        path: "*",
        element: <Home visib="hidden"/>,
      },
      
      {
        path: "About",
        element: <About Heading={"ABOUT "} Content={"This workshop aims to provide an introductory training on open-source indigenously developed Reference Energy System models - energyRT and Switch."}/>,

        
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
