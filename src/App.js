//Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Navigation from './components/Navigation/Index';
import MovieDetails from './pages/MovieDetails';

//Global styled
import GlobalStyle from './components/GlobalStyled';

//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
