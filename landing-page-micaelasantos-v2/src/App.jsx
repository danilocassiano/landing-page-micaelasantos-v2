import Contato from "./components/Contato/Contato.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Infos from "./components/Infos/Infos.jsx"
import Modalidades from "./components/Modalidades/Modalidades.jsx"
import NavbarHome from "./components/Navbar/Navbar.jsx"
import Servicos from "./components/Servicos/Servicos.jsx"
import Sobre from "./components/Sobre/Sobre.jsx"


function App() {
   return (
    <>
    <NavbarHome />    
    <Home /> 
    <Infos /> 
    <Servicos />   
    <Sobre />
    <Modalidades />  
    <Contato />
    <Footer /> 
    </>
  )
}

export default App
