"use client";
import { useState } from "react";
import Label from "@/components/From/Label";
import InputField from "./From/InputField";
import Dropdown from "./From/Dropdown";
import IndiaIcon from "@/images/India.svg";
import ImageGrid from "./ImageGrid";
import Image from "next/image";
import CircleIcon from "@/images/PlusCircle.svg";

const jobOptions = [
  { label: "UP Board", value: "up board" },
  { label: "CBSE Board", value: "cbse board" },
  { label: "ICSE Board", value: "icse board" },
];

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    mobileNumber: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="flex gap-8 justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-[24px] font-semibold text-center mb-4 text-[#677B8C] tracking-[4px]">
          BUILD A BETTER FUTURE
        </h1>
        <p className="text-center text-[20px] text-[#232323] font-semibold mb-6">
          Find a job you deserve, with Education Jobs
        </p>
        <div className="flex gap-5 mb-7">
          <Label title={"First name"}>
            <InputField />
          </Label>

          <Label title={"Last name"}>
            <InputField />
          </Label>
        </div>

        <div className="mb-7">
          <Label title={"email address"}>
            <InputField />
          </Label>
        </div>

        <div className="mb-7">
          <Dropdown label="Job you are applying" options={jobOptions} />
        </div>

        <div className="mb-7">
          <Label title={"Mobile Number address"}>
            <InputField type="tel" placeholder="mobile" icon={IndiaIcon} />
          </Label>
        </div>

        <div className="mb-4">
          <Label title={"upload resume"}>
            <div className="flex gap-4 border-2 p-[20px] border-dashed rounded-[6px]">
              <Image
                src={CircleIcon}
                width={32}
                height={32}
                alt="circle icon"
                className="w-auto"
              />
              <div className="flex flex-col w-full">
                <span className="text-[14px] font-medium leading-normal">
                  Upload Logo
                </span>
                <span className="text-[14px] text-[#5E6670] font-normal  leading-normal">
                  Browse files or drop here. only PDF
                </span>
              </div>
              <input type="file" className="hidden" />
            </div>
          </Label>
        </div>
        <button
          type="submit"
          className="text-[16px] font-bold px-[24px] py-[12px] bg-[#0086CA] text-white rounded-[15px]"
        >
          SUBMIT
        </button>
      </form>
      <ImageGrid />
    </div>
  );
};

export default JobApplicationForm;
