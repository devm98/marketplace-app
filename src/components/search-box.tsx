import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import ReactSlider from "react-slider";
import { themeOptions, tierOptions } from "../constant";

type Inputs = {
  tier: string;
  theme: string;
  time: string;
  price: string;
  quickSearch: string;
};

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const priceRangeParamFrom = Number(query.get("priceRangeFrom") ?? 0.01);
  const priceRangeParamTo = Number(query.get("priceRangeTo") ?? 200);
  const [priceVl, setPriceRange] = useState([
    priceRangeParamFrom,
    priceRangeParamTo,
  ]);

  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      tier: query.get("tier") || "all",
      theme: query.get("theme") || "all",
      time: query.get("time") || "lastFiveDays",
      price: query.get("price") || "lowToHigh",
      quickSearch: query.get("quickSearch") || "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSearchParams((params) => {
      params.set("tier", data.tier);
      params.set("theme", data.theme);
      params.set("time", data.time);
      params.set("price", data.price);
      params.set("quickSearch", data.quickSearch);
      params.set("priceRangeFrom", priceVl[0].toString());
      params.set("priceRangeTo", priceVl[1].toString());
      return params;
    });
  };

  const handleClearFilter = () => {
    reset({
      price: "lowToHigh",
      tier: "all",
      theme: "all",
      time: "lastFiveDays",
      quickSearch: "",
    });
    setPriceRange([0.01, 200]);
    setSearchParams((params) => {
      params.delete("tier");
      params.delete("theme");
      params.delete("time");
      params.delete("price");
      params.delete("quickSearch");
      params.delete("priceRangeFrom");
      params.delete("priceRangeTo");
      return params;
    });
  };

  return (
    <section className="w-[372px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="justify-start items-center gap-2 flex w-[372px] px-4 rounded border border-[#88888b] mb-10">
          <img
            className="pl-[3px] pr-1 py-[3px]"
            src="/images/search-icon.svg"
            alt=""
          />
          <input
            className="text-[#88888b] border-none bg-transparent h-11 w-full outline-none"
            placeholder="Quick search"
            {...register("quickSearch")}
          />
        </div>
        <div className="flex mb-12 flex-col gap-4">
          <label className="text-white">PRICE</label>
          <ReactSlider
            min={0}
            max={200}
            value={priceVl}
            onChange={(value) => {
              setPriceRange(value);
            }}
            renderThumb={(props, state) => {
              const { key, style, ...rest } = props;
              return (
                <div
                  key={key}
                  style={{
                    ...style,
                    top: -7,
                    cursor: "pointer",
                  }}
                  {...rest}
                  className="w-6 h-6 bg-transparent border-2 border-white rounded-full relative group"
                >
                  <div className="absolute w-4 h-4 bg-dot top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full"></div>
                  <div className="absolute w-[100px] h-[49px] bottom-7 -left-10 hidden group-hover:inline-block	">
                    <img src="/images/union.png" alt="" />
                    <span className="text-white absolute top-2 left-2/4 -translate-x-2/4  w-full justify-center inline-flex">
                      {state.valueNow} ETH
                    </span>
                  </div>
                </div>
              );
            }}
            trackClassName="h-2 rounded-sm bg-[#3A3841]"
          />
          <div className="flex justify-between text-white">
            <span>0.01 ETH</span>
            <span>200 ETH</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-white">TIER</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select
                defaultValue={"all"}
                className="bg-[#060a18] text-white w-full outline-none"
                {...register("tier")}
              >
                {tierOptions.map((tier) => {
                  return (
                    <option key={tier.value} value={tier.value}>
                      {tier.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">THEME</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select
                defaultValue={"all"}
                className="bg-[#060a18] text-white w-full outline-none"
                {...register("theme")}
              >
                {themeOptions.map((theme) => {
                  return (
                    <option key={theme.value} value={theme.value}>
                      {theme.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">TIME</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select
                defaultValue={"lastFiveDays"}
                className="bg-[#060a18] text-white w-full outline-none"
                {...register("time")}
              >
                <option value="lastFiveDays">The last 5 days</option>
                <option value="lastTenDays">The last 10 days</option>
                <option value="lastTwentyDays">The last 20 days</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">PRICE</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select
                defaultValue={"lowToHigh"}
                className="bg-[#060a18] text-white w-full outline-none"
                {...register("price")}
              >
                <option value="lowToHigh">Low to high</option>
                <option value="highToLow">High to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="action-group flex gap-10 mt-[30px]">
          <button
            className="text-white flex cursor-pointer items-center gap-2 px-2 py-2"
            onClick={handleClearFilter}
          >
            <img src="/images/reset.svg" alt="" />
            <span>Reset filter</span>
          </button>
          <button
            type="submit"
            className="text-white pl-[57px] pr-14 py-2.5 bg-gradient-to-r from-[#da458f] to-[#d933dd] rounded shadow justify-center items-center inline-flex"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBox;
