import Header from "./SinglePageLayout/Header";
import Bannersection from "./SinglePageLayout/Bannersection";
import CreativePlatfromSection from "./SinglePageLayout/CreativePlatfromSection";
import AssociateSection from "./SinglePageLayout/AssociateSection";
import FeaturesSection from "./SinglePageLayout/FeaturesSection";
import DiscoverSection from "./SinglePageLayout/DiscoverSection";
import OurBlog from "./SinglePageLayout/OurBlog";
import RealWeddingSection from "./SinglePageLayout/RealWeddingSection";

function App() {
  return (
    <div>
      <Header />
      <Bannersection/>
      <CreativePlatfromSection/>
      <AssociateSection/>
      <FeaturesSection/>
      <DiscoverSection/>
      <OurBlog/>
      <RealWeddingSection/>
    </div>
  );
}

export default App;
