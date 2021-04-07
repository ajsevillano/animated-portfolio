//Pages
import GlobalStyle from './components/GlobalStyled';
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation/Index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AboutUs />
    </div>
  );
}

export default App;
