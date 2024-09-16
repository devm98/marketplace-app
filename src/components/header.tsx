const Header = () => {
  return (
    <header className="marketplace-header flex h-[84px] relative bg-[#17161a]/70 justify-between items-center">
      <div className="menu-list flex gap-[60px] ml-[304px]">
        <a href="#" className="leading-tight text-white uppercase text-sm">
          Home
        </a>
        <a href="#" className="leading-tight text-white uppercase text-sm">
          About us
        </a>
        <a href="#" className="leading-tight text-white uppercase text-sm">
          Our teams
        </a>
        <a href="#" className="leading-tight text-white uppercase text-sm">
          <div className="h-[22px] flex-col justify-start items-start inline-flex">
            <div className="text-center text-[#da458f] text-sm font-bold leading-tight">
              Marketplace
            </div>
            <div className="w-4 h-0.5 bg-gradient-to-r from-[#da458f] to-[#d933dd]" />
          </div>{" "}
          roadmap
        </a>
        <a href="#" className="leading-tight text-white uppercase text-sm">
          Whitepaper
        </a>
      </div>
      <div className="menu-actions flex gap-[40px] mr-[160px]">
        <button className="btn-wallet w-40 h-10 pl-[21px] pr-5 py-2 bg-gradient-to-r from-[#da458f] to-[#d933dd] rounded shadow justify-center items-center inline-flex font-semibold text-white text-base">
          Connect Wallet
        </button>
        <div className="switch-lang flex justify-between items-center gap-2">
          <img src="/images/header/world-icon.svg" alt="" />
          <img src="/images/header/chevron-down.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
