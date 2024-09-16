const figures = [
  {
    name: "ASSASSIN",
    image: "/images/banner/assassin.png",
  },
  {
    name: "NEON GUY",
    image: "/images/banner/neon-guy.png",
  },
  {
    name: "MAFIA ENGLAND",
    image: "/images/banner/mafia-england.png",
  },
  {
    name: "BASKETBALL GIRL",
    image: "/images/banner/basketball-girl.png",
  },
];

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative flex my-16">
        <img
          className="ml-[178px]"
          src="/images/banner/new-shop-now.svg"
          alt=""
        />
        <img src="/images/banner/arrival.svg" alt="" />
      </div>
      <div className="figure-board w-full relative pl-[148px] pt-[94px] pb-8">
        <img
          className="absolute top-0 left-0 z-0"
          src="/images/banner/figure-board.svg"
          alt=""
        />
        <div className="relative z-0 flex gap-[68px]">
          {figures.map((figure) => (
            <div
              key={figure.name}
              className="figure flex flex-col items-center gap-4"
            >
              <div className="relative">
                <img src="/images/banner/figure-frame.png" alt="" />
                <img
                  className="absolute -top-[47px] left-3"
                  src={figure.image}
                  alt=""
                />
              </div>
              <span>{figure.name}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0"
        src="/images/banner/the-dj.svg"
        alt=""
      />
    </div>
  );
};

export default Banner;
