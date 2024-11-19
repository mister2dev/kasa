import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
