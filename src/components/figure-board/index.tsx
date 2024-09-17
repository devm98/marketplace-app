import figureList from "../../api/marketplace-data.json";
import FigureCard from "./figure-card";
import TierFilter from "./tier-filter";

const FigureBoard = () => {
  return (
    <section className="">
      <TierFilter />
      <div className="figure-list">
        <div className="flex flex-wrap gap-10">
          {figureList.map((figure) => {
            return <FigureCard key={figure.id} figure={figure} />;
          })}
        </div>
        <button className="w-[326px] h-[70px] py-[23px] text-white bg-gradient-to-r from-[#da458f] to-[#d933dd] rounded shadow justify-center items-center flex mt-[55px] mx-auto">
          View more
        </button>
      </div>
    </section>
  );
};

export default FigureBoard;
