import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom"
import { Signin, Signup, Dashboard, Profile, Detail } from '../views'
import { useSelector } from 'react-redux'

export default function Navigation() {
  const user = useSelector(state => state.userReducer.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes user={user} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:adId" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

const AuthRoutes = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet /> //Child componet, path="/profile"
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

/*
Redux
 1. Basic Redux
 2. Redux Persist (Sync with localStorage)
 3. Redux Thunk (Async operations in Actions)
 4. Combine Reducers
*/