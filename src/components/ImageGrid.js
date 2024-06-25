import Image from "next/image";
import GridIcon1 from "@/images/ImageGrid/grid5.svg";
import GridIcon2 from "@/images/ImageGrid/grid6.svg";
import GridIcon3 from "@/images/ImageGrid/grid3.svg";
import GridIcon5 from "@/images/ImageGrid/grid1.svg";
import GridIcon6 from "@/images/ImageGrid/grid2.svg";
import GridIcon4 from "@/images/ImageGrid/grid4.svg";
import GridIcon7 from "@/images/ImageGrid/grid7.svg";
import GridIcon8 from "@/images/ImageGrid/grid8.svg";
import GridIcon9 from "@/images/ImageGrid/grid9.svg";

const ImageGrid = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex gap-4 mt-5 flex-col">
            <Image src={GridIcon1} width={145} height={97} alt="image 1" />
            <Image src={GridIcon3} width={145} height={97} alt="image 1" />
          </div>
          <Image src={GridIcon2} width={145} height={97} alt="image 1" />
        </div>
        <Image src={GridIcon9} width={261} className="ml-5" height={132} alt="image 1" />
        <Image src={GridIcon7} width={261} height={132} alt="image 1" />
      </div>
      <div className="flex flex-col gap-4">
        <Image src={GridIcon5} width={244} height={163} alt="image 1" />
        <Image src={GridIcon6} width={257} height={166} alt="image 1" />
        <Image src={GridIcon8} width={261} height={132} alt="image 1" />
        <Image src={GridIcon4} width={251} height={146} alt="image 1" />
      </div>
    </div>
  );
};

export default ImageGrid;
