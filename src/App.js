import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LogIn from "./LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>>", authUser);
      if (authUser) {
        //the user is just logged in  / the user was logeed in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <Checkout />
              </>
            }
          />
          <Route exact path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
