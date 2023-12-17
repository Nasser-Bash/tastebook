import TopHeader from "./components/layout/TopHeader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { useState , useEffect } from "react";
import UseBackToTop from "./hooks/useBackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

if (isLoading) {
  return  <div className="loader-wra ">
              <div className="loader-item">
               <div className="cd-loader-layer" data-frame="25">
          <div className="loader-layer"></div>
      </div>
      <span className="loader"></span>
  </div>
</div>;
}
  return (
    <div className="App">
      <BrowserRouter>
      <UseBackToTop />
        <TopHeader/>
        <Header/>
        <MainRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
