import Image from "next/image";
import React from "react";
import AboutImage1 from "@/images/about-us/Rectangle 13.svg";
import AboutImage2 from "@/images/about-us/Rectangle 14.svg";
import Icon from "@/images/about-us/Icon.svg";
import Icon1 from "@/images/about-us/Icon1.svg";
import Icon2 from "@/images/about-us/Icon2.svg";
import Recruitment from "@/images/about-us/Recruitment.svg";
import Ellipse from "@/images/about-us/Ellipse 8.svg";
import OfficeImage from "@/images/about-us/Office.svg";

const page = () => {
  return (
    <>
      <div className="flex justify-evenly mb-4">
        <div className="w-[535px]">
          <h1 className="capitalize text-[#0086CA] text-[60px] font-bold">
            about us
          </h1>
          <p className="text-[24px] leading-[48px] text-justify">
            Introducing Education Jobs - your ultimate destination for teaching
            and non teaching jobs in education sectors in India <br /> <br /> In
            a rapidly evolving world, education remains the cornerstone of
            progress. For those seeking meaningful careers in the education
            sector, the quest for the perfect opportunity can be both
            exhilarating and challenging Enter education jobs.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-[535px]">
          <div className="bg-[#F2F2F2] w-[474px] h-[474px] rounded-t-[10px] z-0"></div>
          <Image
            src={AboutImage1}
            width={376}
            height={246}
            className="absolute top-0 right-0"
            alt="about image"
          />
          <Image
            src={AboutImage2}
            width={376}
            height={246}
            className="absolute bottom-0 left-0"
            alt="about image"
          />
        </div>
      </div>
      <section className="my-2">
        <h2 className=" my-6 text-center text-[36px] font-semibold capitalize text-[#101828]">
          Why <span className="text-[#0086CA]">education jobs</span>?
        </h2>
        <div className="flex justify-evenly items-center">
          <div className="hover:bg-[#0086CA] w-[358px] h-[308px] p-[30px] border rounded-[12px] group">
            <div className="mb-2 bg-[#0086CA] group-hover:bg-white px-[12px] py-[11px] rounded-[10px] bg-[#0086CA] w-[46px] h-[48px]">
              <Image src={Icon} width={26} height={24} alt="icon" className="group-hover:filter group-hover:invert" />
            </div>
            <h3 className="my-2 ml-2 text-[22px] font-semibold group-hover:text-white">
              Your Search Ends Here
            </h3>
            <p className="my-2 text-[16px] font-normal text-justify tracking-tight leading-7 group-hover:text-white ">
              At educationjobs.co.in, we understand the unique demands and
              aspirations of the education industry. Our platform is
              meticulously designed to bridge the gap between talented educators
            </p>
          </div>
          <div className="hover:bg-[#0086CA] w-[358px] h-[308px] p-[30px] border rounded-[12px] group">
            <div className="mb-2 bg-[#0086CA] group-hover:bg-white px-[12px] py-[11px] rounded-[10px] bg-[#0086CA] w-[46px] h-[48px]">
              <Image src={Icon1} width={26} height={24} alt="icon" className="group-hover:filter group-hover:invert"/>
            </div>
            <h3 className="my-2 ml-2 text-[22px] font-semibold group-hover:text-white">
              Comprehensive Listings
            </h3>
            <p className="my-2 text-[16px] font-normal text-justify tracking-tight leading-7 group-hover:text-white ">
              With an extensive database of education jobs spanning various
              academic levels, subjects, and regions across India,
              EducationJobs.co.in ensures that you have access to the most
              relevant opportunities.
            </p>
          </div>
          <div className="hover:bg-[#0086CA] w-[358px] h-[308px] p-[30px] border rounded-[12px] group">
            <div className="mb-2 bg-[#0086CA] group-hover:bg-white px-[12px] py-[11px] rounded-[10px] bg-[#0086CA] w-[46px] h-[48px]">
              <Image src={Icon2} width={26} height={24} alt="icon" className="group-hover:filter group-hover:invert"/>
            </div>
            <h3 className="my-2 ml-2 text-[22px] font-semibold group-hover:text-white">
              Tailored for Educators
            </h3>
            <p className="my-2 text-[16px] font-normal text-justify tracking-tight leading-7 group-hover:text-white ">
              Our user-friendly interface and advanced search filters enable you
              to find teaching positions that align with your expertise,
              experience, and geographical preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 flex justify-center items-center gap-1">
        <Image
          src={Recruitment}
          width={321}
          height={242}
          alt="recruitment image"
        />
        <div className="w-[878px]">
          <div className="bg-[#0086CA] px-[16px] py-[6px] text-white text-[20px] font-medium rounded-[4px] w-max">
            Learn, Connect, and get Job
          </div>
          <h3 className="my-6 leading-tight w-[645px] text-[58px] text-[#232323] font-medium tracking-tight ">
            Empowering Educators, Transforming Education
          </h3>
          <p className="text-[18px] text-[#7E7E81] font-normal tracking-tight ">
            Our mission is to empower educators and contribute to the
            advancement of education in India. By connecting passionate
            educators with institutions that share our vision, we&apos;re
            driving positive change in the sector.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-4">
        <div className="p-[20px] bg-[#F8F7FD] h-[250px] w-[376px] rounded-[10px]">
          <div className="relative w-14 h-14">
            <span className="absolute text-[34px] font-medium text-[#0086CA]">
              01
            </span>
            <Image
              src={Ellipse}
              width={54}
              className="index-0"
              height={54}
              alt="ellipse background"
            />
          </div>
          <h3 className="my-4 text-[24px] text-[#141414] font-medium">
            Diverse Categories
          </h3>
          <p className="text-[16px] text-[#1E1E1E] font-normal ">
            From primary school teachers to university professors,
            educationjobs.co.in caters to educators across all levels.
          </p>
        </div>
        <div className="p-[20px] bg-[#F8F7FD] h-[250px] w-[376px] rounded-[10px]">
          <div className="relative w-14 h-14">
            <span className="absolute text-[34px] font-medium text-[#0086CA]">
              02
            </span>
            <Image
              src={Ellipse}
              width={54}
              className="index-0 rotate-90"
              height={54}
              alt="ellipse background"
            />
          </div>
          <h3 className="my-4 text-[24px] text-[#141414] font-medium">
            Geographical Filters
          </h3>
          <p className="text-[16px] text-[#1E1E1E] font-normal ">
            Search for teaching jobs in specific regions, ensuring you find
            opportunities in your preferred location.
          </p>
        </div>
        <div className="p-[20px] bg-[#F8F7FD] h-[250px] w-[376px] rounded-[10px]">
          <div className="relative w-14 h-14">
            <span className="absolute text-[34px] font-medium text-[#0086CA]">
              03
            </span>
            <Image
              src={Ellipse}
              width={54}
              className="index-0"
              height={54}
              alt="ellipse background"
            />
          </div>
          <h3 className="my-4 text-[24px] text-[#141414] font-medium">
            Subject Specialization
          </h3>
          <p className="text-[16px] text-[#1E1E1E] font-normal ">
            Filter job listings based on subjects, allowing you to focus on
            positions that match your expertise.
          </p>
        </div>
        <div className="p-[20px] bg-[#F8F7FD] h-[250px] w-[376px] rounded-[10px]">
          <div className="relative w-14 h-14">
            <span className="absolute text-[34px] font-medium text-[#0086CA]">
              04
            </span>
            <Image
              src={Ellipse}
              width={54}
              className="index-0 rotate-90"
              height={54}
              alt="ellipse background"
            />
          </div>
          <h3 className="my-4 text-[24px] text-[#141414] font-medium">
            Fresher-Friendly
          </h3>
          <p className="text-[16px] text-[#1E1E1E] font-normal ">
            Whether you&apos;re a seasoned educator or a fresh graduate aspiring
            to step into the education sector, educationjobs.co.in has
            opportunities for everyone.
          </p>
        </div>
        <div className="p-[20px] bg-[#F8F7FD] h-[250px] w-[376px] rounded-[10px]">
          <div className="relative w-14 h-14">
            <span className="absolute text-[34px] font-medium text-[#0086CA]">
              05
            </span>
            <Image
              src={Ellipse}
              width={54}
              className="index-0"
              height={54}
              alt="ellipse background"
            />
          </div>
          <h3 className="my-4 text-[24px] text-[#141414] font-medium">
            Regular Updates
          </h3>
          <p className="text-[16px] text-[#1E1E1E] font-normal ">
            Stay informed about the latest teaching job openings with our
            regularly updated listings.
          </p>
        </div>
        <div className="flex items-center justify-center h-[250px] w-[376px]">
          <h3 className="text-[#0086CA] text-[40px] font-bold text-center w-[255px] ">
            Our Sweet Six principle!
          </h3>
        </div>
      </section>

      <section className="flex items-center bg-[#FDF8EE] my-6 px-4">
        <Image src={OfficeImage} width={565} height={484} alt="office image" />
        <ul className="flex flex-col justify-evenly h-[366px] list-disc marker:text-[#0086CA]">
          <li>
            <p className="text-[28px] font-normal">
              <span className="text-[#0086CA] font-bold">Register:</span> Create
              your profile on educationjobs to start exploring teaching jobs in
              India.
            </p>
          </li>
          <li>
            <p className="text-[28px] font-normal">
              <span className="text-[#0086CA] font-bold">Set Preferences:</span>{" "}
              Create Customize your search criteria based on location, subject,
              experience, and more.
            </p>
          </li>
          <li>
            <p className="text-[28px] font-normal">
              <span className="text-[#0086CA] font-bold">Apply with Ease:</span>{" "}
              Create Submit applications directly through our platform, making
              the job search process seamless
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default page;
