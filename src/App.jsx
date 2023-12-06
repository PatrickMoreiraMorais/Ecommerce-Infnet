import './App.css'

import logo from "./imgs/logo.png";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import banner from "./imgs/banner.jpeg";
import CardFather from "./Components/CardFather/CardFather";
import Footer from "./Components/Footer/Footer";
import reactLogo from './imgs/reactLogo.png'
import bannerDesktop from './imgs/bannerDesktop.jpeg'


function App() {
  return (
    <>
      <NavBar
        src={logo}
        childrenList1="Produtos"
        childrenList2="Avaliações"
        childrenList3="Perguntas"
        href1='#produto'
        href2='#avaliações'
        href3='#perguntas'
      />
      <Banner 
        mobileSrc={banner} 
        src={bannerDesktop}
        />
      <div className="bodyApp">
        <CardFather />
      </div>
      <Footer
      src={reactLogo}
      />
    </>
  );
}

export default App;
