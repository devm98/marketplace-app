import ReactSlider from "react-slider";

const SearchBox = () => {
  return (
    <section className="w-[372px]">
      <form>
        <div className="justify-start items-center gap-2 flex w-[372px] px-4 rounded border border-[#88888b] mb-10">
          <img
            className="pl-[3px] pr-1 py-[3px]"
            src="/images/search-icon.svg"
            alt=""
          />
          <input
            className="text-[#88888b] border-none bg-transparent h-11 w-full outline-none"
            type="text"
            placeholder="Quick search"
          />
        </div>
        <div className="flex mb-12 flex-col gap-4">
          <label className="text-white">PRICE</label>
          <ReactSlider
            min={0}
            max={200}
            defaultValue={[100, 200]}
            onChange={(value) => console.log(value)}
            renderThumb={(props) => {
              const { key, style, className, ...rest } = props;

              return (
                <img
                  className={className
                    ?.split(" ")
                    .filter((c) => c !== "active")
                    .join(" ")}
                  key={key}
                  style={{
                    ...style,
                    top: "-27px",
                    left: `calc(${`${style?.left} - 36px`})`,
                  }}
                  {...rest}
                  src="/images/dot.svg"
                />
              );
            }}
            trackClassName="h-2 rounded-sm bg-[#3A3841]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-white">TIER</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select className="bg-transparent text-white w-full outline-none">
                <option value="All">All</option>
                <option value="Common">Common</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value="Legendary">Legendary</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">THEME</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select className="bg-transparent text-white w-full outline-none">
                <option value="All">All</option>
                <option value="Halloween">Halloween</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">TIME</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select className="bg-transparent text-white w-full outline-none">
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-white">PRICE</label>
            <div className="w-[372px] h-11 px-4 py-2.5 rounded border border-[#3a3841]">
              <select className="bg-transparent text-white w-full outline-none">
                <option value="lowToHight">Low to hight</option>
                <option value="hightToLow">Hight to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="action-group flex gap-10 mt-[30px]">
          <button className="text-white flex cursor-pointer items-center gap-2 px-2 py-2">
            <img src="/public/images/reset.svg" alt="" />
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
