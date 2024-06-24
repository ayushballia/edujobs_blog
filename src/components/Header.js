import Image from "next/image";
import HeaderImage from "@/images/files-play-Ur5cERAGiy.svg"

const Header = () => {
  return (
    <div className="w-11/12 m-auto bg-[#F6F6F6]  border border-[#000000] border-opacity-20 rounded-[20px]">
      <div className="flex justify-between items-center">
        <div className="ml-[40px]">
          <h4 className="mb-2.5 text-[16px] font-bold bg-[#0A65CC] text-white p-[10px] rounded-[4px] w-max capitalize ">
            A knowledge treasure trove
          </h4>
          <h2 className="text-[#232323] text-[30px] font-semibold ">
            Read the best blogs to stay in relevant
          </h2>
        </div>
        <Image src={HeaderImage} width={236} height={158} alt="header image"/>
      </div>
    </div>
  );
};

export default Header;
