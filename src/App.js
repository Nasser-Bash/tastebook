import TopHeader from "./componets/layout/TopHeader";
import Header from "./componets/layout/Header";
import Footer from "./componets/layout/Footer";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { useState , useEffect } from "react";
import UseBackToTop from "./hooks/useBackToTop";
import Fade from 'react-reveal/Fade';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

if (isLoading) {
  return <span className="loader"></span>;
}
  return (
    <div className="App"> 
     <Fade>
      <BrowserRouter>
      <UseBackToTop />
        <TopHeader/>
        <Header/>
        <MainRoutes/>
        <Footer/>
      </BrowserRouter>
    </Fade>
    </div>
   
  );
}

export default App;
