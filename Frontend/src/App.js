import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component imports
import { Header } from "./components/organisms/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/organisms/Footer";

// images
import wallpaper from "./assets/images/wallpaper.jpg";
import AllJokesPage from "./pages/AllJokesPage";
import NewJokePage from "./pages/NewJokePage";
import FilterJokesPage from "./pages/FilterJokesPage";
import SingleJokePage from "./pages/SingleJokePage";

// style
const StyledApp = styled.div`
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
`;

// images

function App() {
  return (
    <StyledApp className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/all-jokes" component={AllJokesPage} />
          <Route path="/post-joke" component={NewJokePage} />
          <Route path="/filter-jokes" component={FilterJokesPage} />
          <Route path="/single-joke" component={SingleJokePage} />
        </Switch>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
