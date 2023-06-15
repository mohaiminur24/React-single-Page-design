import Header from "./SinglePageLayout/Header";
import Bannersection from "./SinglePageLayout/Bannersection";
import CreativePlatfromSection from "./SinglePageLayout/CreativePlatfromSection";
import AssociateSection from "./SinglePageLayout/AssociateSection";
import FeaturesSection from "./SinglePageLayout/FeaturesSection";
import DiscoverSection from "./SinglePageLayout/DiscoverSection";

function App() {
  return (
    <div>
      <Header />
      <Bannersection/>
      <CreativePlatfromSection/>
      <AssociateSection/>
      <FeaturesSection/>
      <DiscoverSection/>
    </div>
  );
}

export default App;
