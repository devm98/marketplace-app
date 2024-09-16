import figureList from "../../api/marketplace-data.json";
import TierFilter from "./tier-filter";

const FigureBoard = () => {
  return (
    <div className="">
      <TierFilter />
      <section className="">
        {figureList.map((figure) => {
          return <div key={figure.id}>{figure.theme}</div>;
        })}
      </section>
    </div>
  );
};

export default FigureBoard;
