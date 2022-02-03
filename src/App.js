import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "white",
      color: "black",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
