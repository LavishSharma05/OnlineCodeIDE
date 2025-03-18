import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import NoPage from "./Pages/NoPage"
import './App.css'
import SignUp from "./Pages/SignUp"
import Editor from "./Pages/Editor"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editor/:projectID" element={<Editor />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
