import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Premierface } from './components/Premierface'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Connexion } from './pages/authentification/Connexion'
import { Mesrendezvous } from './pages/authentification/Mesrendezvous'
import { Moncompte } from './pages/Moncompte'
import { Inscrire } from './pages/authentification/Inscrire'
import { Dashboard } from './components/Dashboard'
import { Accueil } from './pages/Accueil'
import { Patients } from './pages/Patients'
import { Nopage } from './pages/Nopage'
import {FMP} from './pages/FMP'
import { Priserendezvous } from './pages/Priserendezvous'
import { Affichagepatient } from './pages/Affichagepatient'
import { AffichageRDV } from './pages/AffichageRDV'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={< Premierface/>} />
          <Route path="/mesrendezvous" element={<Mesrendezvous />} />
          <Route path="/moncompte" element={<Moncompte />} />
          <Route path="/connexion" element={<Connexion/>} />
          <Route path="/inscrire" element={<Inscrire/>} />
          <Route path="/*" element={<Nopage/>} />
          </Route>

          <Route path="/dashboard" element={<Dashboard/>} > 
          <Route path='/dashboard/accueil' element={< Accueil/>} />
          <Route path="/dashboard/mesrendezvous" element={<Mesrendezvous />} />
          <Route path="/dashboard/patients" element={<Patients/>} />
          <Route path="/dashboard/moncompte" element={<Moncompte />} />
          </Route>
          <Route path="/fmp" element={<FMP/>} />
          <Route path="/prdv" element={<Priserendezvous/>} />
          <Route path="/affichepatient" element={<Affichagepatient/>} />
          <Route path="/affichageRDV" element={<AffichageRDV/>} />
          

          
      </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
