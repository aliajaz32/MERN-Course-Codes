import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Signin, Signup, Dashboard, Profile, Detail } from '../views'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail/:adId" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
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