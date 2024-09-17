import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import figureList from "../../api/marketplace-data.json";
import { convertToCamelCase } from "../../helpers";
import FigureCard from "./figure-card";
import TierFilter from "./tier-filter";

const FigureBoard = () => {
  const [searchParams] = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const tierParam = query.get("tier") ?? "all";
  const themeParam = query.get("theme") ?? "all";
  const timeParam = query.get("time") ?? "lastFiveDays";
  const priceParam = query.get("price") ?? "lowToHigh";
  const priceRangeParam = {
    from: Number(query.get("priceRangeFrom")) || 0.01,
    to: Number(query.get("priceRangeTo")) || 100,
  };

  const figureSearchList = figureList
    .filter((item) => {
      const newTier = convertToCamelCase(item.tier);
      const newTheme = convertToCamelCase(item.theme);

      const isDaysAgo = dayjs(item.createdAt).isAfter(
        dayjs().subtract(
          timeParam === "lastTenDays"
            ? 10
            : timeParam === "lastTwentyDays"
            ? 20
            : 5,
          "day"
        )
      );

      if (tierParam === "all") {
        if (themeParam !== "all") return isDaysAgo && themeParam === newTheme;
        return isDaysAgo && newTier !== "all";
      }

      if (themeParam === "all") {
        if (tierParam !== "all") return isDaysAgo && tierParam === newTier;
        return isDaysAgo && newTheme !== "all";
      }

      if (tierParam === "all" && themeParam === "all") {
        return isDaysAgo && newTier !== "all" && newTheme !== "all";
      }

      return isDaysAgo && tierParam === newTier && themeParam === newTheme;
    })
    .sort((a, b) => {
      if (priceParam === "lowToHigh") {
        return a.price - b.price;
      } else if (priceParam === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  console.log("figureSearchList", figureSearchList);

  return (
    <section className="">
      <TierFilter />
      <div className="figure-list">
        <div className="flex flex-wrap gap-10">
          {figureSearchList.map((figure) => {
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
