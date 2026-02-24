import CostieFormFlow from "../CostieFormFlow";
import Footer from "../Footer";
import Header from "../Header";
import LanguageSelector from "../LanguageSelector";

const AppTree = () => (
  <main className="w-3/4 max-w-75 mt-20 h-md:mt-50">
    <LanguageSelector />
    <Header />
    <CostieFormFlow />
    <Footer />
  </main>
);

export default AppTree;
