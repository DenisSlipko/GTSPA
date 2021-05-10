import { useTransition, animated } from "react-spring";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import About from "./pages/About";
import AboutPlaces from "./pages/AboutPlaces";
import Homepage from "./pages/Homepage";
import Offer from "./pages/Offer";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Header />
      <main className="main-container">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Switch location={item}>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/places" component={AboutPlaces} />
                <Route exact path="/offer" component={Offer} />
              </Switch>
            </div>
          </animated.div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
