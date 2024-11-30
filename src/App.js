import './App.css';
import Footer from './components/footer/Footer';
import Navbars from './components/nav/Navbars';
import Aboutus from './page/Aboutus';
import Appointment from './page/appointment';
import Home from "./page/Home";
import News from './page/news';
import Post from './page/Post';
import Proces from './page/Process';
import Service from './page/service';
import Test from './page/test';
function App() {
  return (
  <>
    <Navbars/>
    <Home/>
    <Aboutus/>
    <Proces/>
    <Appointment/>
    <Service/>
    <Test/>
    <News/>
    <Post/>
    <Footer/>
  </>
  );
}

export default App;
