/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import figureList from "../../api/marketplace-data.json";
import { convertToCamelCase } from "../../helpers";
import { FigureType } from "../../types/marketplace-data.type";
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
    to: Number(query.get("priceRangeTo")) || 200,
  };
  const quickSearchParam = query.get("quickSearch") ?? "";

  const [pagingFigureList, setPagingFigureList] = useState<FigureType[]>([]);

  const figureSearchList = figureList
    .filter((item) => {
      const newTier = convertToCamelCase(item.tier);
      const newTheme = convertToCamelCase(item.theme);
      const isPriceInRange =
        item.price >= priceRangeParam.from && item.price <= priceRangeParam.to;

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

      const isQuickSearch =
        quickSearchParam === "" ||
        item.tier
          .toLocaleLowerCase()
          .includes(quickSearchParam.toLocaleLowerCase()) ||
        item.role
          .toLocaleLowerCase()
          .includes(quickSearchParam.toLocaleLowerCase()) ||
        item.theme
          .toLocaleLowerCase()
          .includes(quickSearchParam.toLocaleLowerCase());

      if (tierParam === "all") {
        if (themeParam !== "all")
          return (
            isQuickSearch &&
            isPriceInRange &&
            isDaysAgo &&
            themeParam === newTheme
          );
        return (
          isQuickSearch && isPriceInRange && isDaysAgo && newTier !== "all"
        );
      }

      if (themeParam === "all") {
        if (tierParam !== "all")
          return (
            isQuickSearch &&
            isPriceInRange &&
            isDaysAgo &&
            tierParam === newTier
          );
        return (
          isQuickSearch && isPriceInRange && isDaysAgo && newTheme !== "all"
        );
      }

      if (tierParam === "all" && themeParam === "all") {
        return (
          isQuickSearch &&
          isPriceInRange &&
          isDaysAgo &&
          newTier !== "all" &&
          newTheme !== "all"
        );
      }

      return (
        isQuickSearch &&
        isPriceInRange &&
        isDaysAgo &&
        tierParam === newTier &&
        themeParam === newTheme
      );
    })
    .sort((a, b) => {
      if (priceParam === "lowToHigh") {
        return a.price - b.price;
      } else if (priceParam === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  console.log("figureSearchList", figureSearchList.length);

  useEffect(() => {
    setPagingFigureList(figureSearchList.slice(0, 12));
  }, [
    tierParam,
    themeParam,
    timeParam,
    priceParam,
    query.get("priceRangeFrom"),
    query.get("priceRangeTo"),
  ]);

  console.log(pagingFigureList);

  const handleViewMore = () => {
    const currentLength = pagingFigureList.length;
    const nextLength = currentLength + 8;
    const nextFigureList = figureSearchList.slice(0, nextLength);
    setPagingFigureList(nextFigureList);
  };

  return (
    <section className="">
      <TierFilter />
      <div className="figure-list">
        <div className="flex flex-wrap gap-10">
          {pagingFigureList.map((figure) => {
            return <FigureCard key={figure.id} figure={figure} />;
          })}
        </div>
        {figureSearchList.length > pagingFigureList.length && (
          <button
            className="w-[326px] h-[70px] py-[23px] text-white bg-gradient-to-r from-[#da458f] to-[#d933dd] rounded shadow justify-center items-center flex mt-[55px] mx-auto"
            onClick={handleViewMore}
          >
            View more
          </button>
        )}
      </div>
    </section>
  );
};

export default FigureBoard;
