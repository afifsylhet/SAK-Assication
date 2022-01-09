import Banner from "./components/Banner/Banner";
import Faq from "./components/FAQ/Faq";
import Gallary from "./components/Gallary/Gallary";
import Navigation from "./components/Navigation/Navigation";
import OurStory from "./components/OurStory/OurStory";


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <OurStory></OurStory>
      <Gallary></Gallary>
      <Faq></Faq>
    </div>
  );
}

export default App;
