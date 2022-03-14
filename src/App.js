import RouteView from "./routes/RouteView";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main" className="main search_result">
        <RouteView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
