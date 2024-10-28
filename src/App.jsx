import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNavbar from './components/DaisyNavbar/DaisyNavbar'

function App() {

  return (
    <>
      

      <NavBar></NavBar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <h1 className='text-xl rounded-full text-rose-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
