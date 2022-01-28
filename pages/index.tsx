// Import Components
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

// Import Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Header/>
      <Footer/>
    </div>
  );
};

export default Home;
