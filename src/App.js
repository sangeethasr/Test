import React, {useState} from "react"
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";
import ErrorPage from "./ErrorPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/dashboard" element={<EmployeeList />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;