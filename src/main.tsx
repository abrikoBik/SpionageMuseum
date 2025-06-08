import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './index.css'
import Spy from './Spy.tsx'
import Home from './Home.tsx'
import SpyQuiz from './Quiz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/SpionageMuseum">
      <Routes>
        <Route path="/spy" element={<Spy/>}/>
        <Route path="/quiz" element={<SpyQuiz/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
