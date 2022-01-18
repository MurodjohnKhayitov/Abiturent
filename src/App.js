import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import RouterGroup from "./Components/Pages/Routers/RouterGroup";
import Footer from "./Components/Pages/LandingPage/Footer";
function App() {
  return (
    <div className="App">
      <RouterGroup />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
