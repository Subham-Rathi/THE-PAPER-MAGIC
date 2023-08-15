import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'
import {Routes,Route} from "react-router-dom"
import About from './components/About'; 
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Header/>
     
     <Routes>
      <Route path = '/' element={<Cards />}/>
      <Route path="/about" element={<About/>} />
      <Route path = '/cart/:id' element={<CardsDetails />}/>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
