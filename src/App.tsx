import './App.css'
import Navbar from './components/Navbar'
import Front from './components/section1st/Front'
import MetricsContainer from './components/section2nd/MetricsContainer'
import FunctionalityContainer from './components/section3rd/FunctionalityContainer'

function App() {

  return (
    <>
    <div className="w-screen">
    <Navbar/>
    <Front/>
    <MetricsContainer/>
    <FunctionalityContainer/>
    </div>
    </>
  )
}

export default App
