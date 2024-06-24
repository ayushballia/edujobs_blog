import Image from "next/image";
import FrameImage from "@/images/Frame 33901.svg";
import EllipseIcon from "@/images/Ellipse 537.svg";

const Sidebar = () => {
  return (
    <div className="w-1/4 p-3.5 border border-[#000000] border-opacity-20 rounded-[10px] mt-10 h-max ">
      <h2 className="text-[24px] font-bold text-[#29394E] my-6">
        More of this
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex gap-5">
          <div className="flex flex-col justify-between">
            <h3 className="text-[#29394E] text-[14px] font-bold">
              OpenAi se consolida como la empresa mas grande de IA
            </h3>
            <div className="flex justify-evenly items-center text-[11px] text-[#B9B9B9] font-bold ">
              <span>25 Nov</span>
              <Image
                src={EllipseIcon}
                width={3}
                height={3}
                alt="ellipse icon"
              />
              <span>2 min reading</span>
            </div>
          </div>
          <Image
            src={FrameImage}
            width={109}
            height={94}
            className="rounded-[8px]"
            alt="frame image"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-between">
            <h3 className="text-[#29394E] text-[14px] font-bold">
              OpenAi se consolida como la empresa mas grande de IA
            </h3>
            <div className="flex justify-evenly items-center text-[11px] text-[#B9B9B9] font-bold ">
              <span>25 Nov</span>
              <Image
                src={EllipseIcon}
                width={3}
                height={3}
                alt="ellipse icon"
              />
              <span>2 min reading</span>
            </div>
          </div>
          <Image
            src={FrameImage}
            width={109}
            height={94}
            className="rounded-[8px]"
            alt="frame image"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-between">
            <h3 className="text-[#29394E] text-[14px] font-bold">
              OpenAi se consolida como la empresa mas grande de IA
            </h3>
            <div className="flex justify-evenly items-center text-[11px] text-[#B9B9B9] font-bold ">
              <span>25 Nov</span>
              <Image
                src={EllipseIcon}
                width={3}
                height={3}
                alt="ellipse icon"
              />
              <span>2 min reading</span>
            </div>
          </div>
          <Image
            src={FrameImage}
            width={109}
            height={94}
            className="rounded-[8px]"
            alt="frame image"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
