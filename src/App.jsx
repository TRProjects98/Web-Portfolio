import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ProjectDetails />}/>
      </Routes>
        
      <Footer/>
    </>
  )
}

export default App
