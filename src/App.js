import './App.css';
import Extra from './Components/Extra/Extra.js';
import Header from './Components/Header/Header.js';
import Companies from './Components/Companies/Companies.js';
import Recidencies from './Components/Recidencies/Recidencies.js';
import Value from './Components/Value/Value.js';
import Contact from './Components/Contact/Contact.js'
import GetStarted from './Components/GetStarted.js/GetStarted.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <Extra />
      </div>
      <Companies  />
      <Recidencies id="recidencies" />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
