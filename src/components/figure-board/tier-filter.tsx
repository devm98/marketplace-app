import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { tierOptions } from "../../constant";

const TierFilter: FC = () => {
  // set and get param from url
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const tierParam = query.get("tier");

  const onSelect = (t: string) => {
    // set param to url
    console.log(t);
    setSearchParams((params) => {
      params.set("tier", t);
      return params;
    });
  };

  return (
    <div className="overflow-x-auto max-w-[1188px] scroll-smooth scrollbar scroll-pb-2 mb-10 pb-1">
      <div className="min-w-full flex gap-6">
        {tierOptions.map((tier) => {
          return (
            <div
              onClick={() => onSelect(tier.value)}
              key={tier.value}
              className={`px-4 py-2.5 ${
                tier.value === tierParam
                  ? "bg-gradient-to-r from-[#da458f] to-[#d933dd]"
                  : "bg-gradient-to-r from-[#da459075] to-[#da33dd6e]"
              } rounded text-white cursor-pointer min-w-max`}
            >
              {tier.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TierFilter;
