import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <BrowserRouter>
    <Routes>
      <Route path='/secret' element={<App></App>}></Route>
    </Routes>
   </BrowserRouter> */}

   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
