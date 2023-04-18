import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./DashBoard/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import {useGetLoggedUserQuery} from '../src/services/userAuthApi'
import Hello from '../src/DashBoard/helloUser'

function App() {
  const { access_token } = useSelector(state => state.auth)
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  const userId=data?.id
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="/dashboard" element={access_token ? <Dashboard id={userId} /> : <Navigate to="/login" />} />
            <Route path="/hello" element={<Hello/> }/>
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
