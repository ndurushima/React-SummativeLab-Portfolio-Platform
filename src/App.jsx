import { useState } from 'react'
import './App.css';
import Header from './components/Header.jsx';
import InfoCard from './components/InfoCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <InfoCard />
        <ProjectCard />
      </div>
    </>
  )
}

export default App
