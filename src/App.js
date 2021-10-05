import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { About } from './components/About';
import Home  from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div className="App relative bg-primary box-content max-w-screen-xl min-h-screen md:min-h-90 lg:mt-5vh mx-auto bg-white flex flex-col lg:px-24 lg:rounded-xl">
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
