import TextArea from "../../components/TextArea";
import About from "./About";
import Banner from "./Banner";

const Home = () => {
   return (
      <div>
         <Banner/>
         <About/>
         <TextArea category="Services" title="Our Services Area" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
      </div>
   );
};

export default Home;