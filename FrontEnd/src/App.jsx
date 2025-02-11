import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage.jsx'
import LoginPage from './Components/LoginPage.jsx'
import SignUpPage from './Components/SignUpPage.jsx'
function App() {
  const router = createBrowserRouter([
    {path:"/login",
      element: <LoginPage></LoginPage>
    },
    {path: "/signUp",
      element: <SignUpPage></SignUpPage>
    },
    {
      path:"/",
      element: <HomePage></HomePage>
    }
  ])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
