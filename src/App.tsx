import Banner from "./components/banner";
import FigureBoard from "./components/figure-board";
import Footer from "./components/footer";
import Header from "./components/header";
import SearchBox from "./components/search-box";

function App() {
  return (
    <main className="marketplace-app bg-big-background bg-cover bg-no-repeat min-h-screen ">
      <div className="marketplace-app-content max-w-[1920px] mx-auto border border-sky-500 h-full">
        <Header />
        <Banner />
        <div className="marketplace-main pt-[120px] pl-[159px] pr-[120px] flex gap-10">
          <SearchBox />
          <FigureBoard />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
