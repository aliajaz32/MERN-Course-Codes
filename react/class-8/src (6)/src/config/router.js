import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import Detail from '../views/Detail'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail/:adId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

/*
1. npm install react-router-dom
2. Created config/router.js
3. BrowserRouter, Routes, Route from 'react-router-dom'
4. Create Navigation component (Configuration)
5. Import it to App.js
*/

/*
Routing scenarios:
1. Basic Routing
2. Passing Ids (Dynamic Routing)
3. Authentication
*/