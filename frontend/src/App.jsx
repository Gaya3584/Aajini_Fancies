import Nav from './nav.jsx'
import Cont from './contact.jsx'
import Abo from './about.jsx'
import Hom from './home.jsx'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div id="home">
        <Hom />
      </div>
      <div id="about">
        <Abo />
      </div>
      <div id="contact">
        <Cont/>
      </div>
    </div>
    </Router>
  );
}
export default App;