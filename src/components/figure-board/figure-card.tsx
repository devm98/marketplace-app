import { FC } from "react";
import { FigureType } from "../../types/marketplace-data.type";

type FigureCardProps = {
  figure: FigureType;
};

const FigureCard: FC<FigureCardProps> = ({ figure }) => {
  return (
    <div className="max-w-[267px] flex-[267px] h-[365px] p-4 bg-[#3a3841]/60 rounded-[10px] flex-col justify-center gap-6 flex">
      <div className="w-full h-[233px] relative bg-gradient-to-r from-[#49dd81] to-[#22b4c6] rounded">
        <img className="bottom-0 absolute" src={figure.img} />
        <div className="w-full top-[8px] absolute justify-between items-center flex px-2">
          <div className="px-3 py-1 bg-[#313b45]/50 rounded justify-start items-center gap-2.5 flex">
            <span className="text-center text-white text-xs">
              {figure.tier}
            </span>
          </div>
          <img src="/images/card/bxs-heart.svg" alt="" />
        </div>
      </div>

      <div className="flex-col justify-center gap-4 flex">
        <div className="justify-between items-center flex">
          <div className="text-white font-semibold">{figure.role}</div>
          <div className="self-stretch justify-start items-center gap-2 flex">
            <img src="/images/card/ethereum-logo.svg" alt="" />
            <div className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">
              {figure.price} ETH
            </div>
          </div>
        </div>
        <div className="items-center gap-3 flex">
          <img src="/images/card/profile-thumb.png" alt="mninh" className="" />
          <span className="text-xs text-white">Ghozali_Ghozalu</span>
        </div>
      </div>
    </div>
  );
};

export default FigureCard;
