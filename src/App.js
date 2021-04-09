//Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Navigation from './components/Navigation/Index';
import MovieDetails from './pages/MovieDetails';

//Global styled
import GlobalStyle from './components/GlobalStyled';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
