import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Destination from './components/Destination'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Getstarted from './components/Getstarted'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='main'>
          <About/>
          <Services/>
          <Destination/>
          <Experience/>
          <Gallery/>
          <Getstarted/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
