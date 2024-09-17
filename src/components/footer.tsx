const Footer = () => {
  return (
    <footer className="bg-[#17161A] pb-[208px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="py-[60px] flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-white mb-8">NAVIGATION</h3>
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white">
                  Home
                </a>
                <a href="#" className="text-white">
                  About us
                </a>
                <a href="#" className="text-white">
                  Our teams
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white">
                  Whitepaper
                </a>
                <a href="#" className="text-white">
                  Marketplace
                </a>
                <a href="#" className="text-white">
                  Roadmap
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white">
                  FAQs
                </a>
                <a href="#" className="text-white">
                  News
                </a>
                <a href="#" className="text-white">
                  Community
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-8">CONTACT US</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-2">
                <img src="/public/images/phone-icon.svg" alt="" />{" "}
                <a className="text-white" href="tel:+01234568910">
                  01234568910
                </a>
              </div>
              <div className="flex gap-2">
                <img src="/public/images/mail-icon.svg" alt="" />{" "}
                <a className="text-white" href="mailto:tymex-talent@tyme.com">
                  tymex-talent@tyme.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-8">
              SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
            </h2>
            <div className="flex gap-[20px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[426px] rounded-[4px] bg-[#1f1f1f] text-white py-3 px-[20px] text-xs outline-none"
              />
              <button className="bg-gradient-to-r from-[#da458f] to-[#d933dd] rounded-[4px] text-white py-[10px] px-[49px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-[#3A3841]" />
        <div className="flex justify-between mt-10">
          <span className="text-white">
            ©2023 Tyme - Edit. All Rights reserved.
          </span>
          <div className="flex gap-[60px]">
            <a href="#" className="text-white">
              Security
            </a>
            <a href="#" className="text-white">
              Legal
            </a>
            <a href="#" className="text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
