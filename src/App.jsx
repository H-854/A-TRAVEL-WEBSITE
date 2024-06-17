import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Destination from './components/Destination'

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
        </div>
        <div className="footer">
            
        </div>
      </div>
    </>
  )
}

export default App
