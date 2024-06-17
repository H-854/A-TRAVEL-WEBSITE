import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Destination from './components/Destination'
import Experience from './components/Experience'
import Gallery from './components/Gallery'

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
        </div>
        <div className="footer">
            
        </div>
      </div>
    </>
  )
}

export default App
