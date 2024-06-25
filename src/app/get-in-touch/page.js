import Image from "next/image";
import React from "react";
import PhoneIcon from "@/images/PhoneIcon.svg";
import EmailIcon from "@/images/EmailIcon.svg";

const page = () => {
  return (
    <div className="flex gap-6 justify-center">
      <div className="w-[545px]">
        <h1 className="text-[54px] text-[#000000] font-bold ">
          Get in <span className="text-[#0086CA] ">Touch</span>
        </h1>
        <p className="text-[14px] text-[#232323] font-semibold leading-[24px] mb-5 ">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>

        <form>
          <input
            type="text"
            className="block w-full border mb-4 px-[20px] py-[12px] text-[14px] font-normal text-[#828282]"
            placeholder="Name"
          />
          <input
            type="email"
            className="block w-full border mb-4 px-[20px] py-[12px] text-[14px] font-normal text-[#828282]"
            placeholder="email"
          />
          <input
            type="tel"
            className="block w-full border mb-4 px-[20px] py-[12px] text-[14px] font-normal text-[#828282]"
            placeholder="Phone number"
          />
          <select className="block border mb-4 w-full px-[20px] py-[12px] text-[14px] font-normal text-[#828282] ">
            <option>How did you find us?</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#0086CA] text-white text-[16px] font-bold uppercase py-[12px] rounded-[6px]"
          >
            Submit
          </button>
        </form>
        <div className="flex gap-[50px] my-6">
          <div className="flex items-center gap-4">
            <Image src={PhoneIcon} width={24} height={24} alt="phone icon" />
            <div className="flex flex-col">
              <p className="text-[#232323] text-[13px] font-semibold tracking-[2px] uppercase">
                phone
              </p>
              <a className="text-[#0086CA]" href={`tel:****`}>
                ***
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src={EmailIcon} width={24} height={24} alt="phone icon" />
            <div className="flex flex-col">
              <p className="text-[#232323] text-[13px] font-semibold tracking-[2px] uppercase">
                Email
              </p>
              <a className="text-[#0086CA]" href={`mailto:****`}>
                ***********
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[545px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.694689861781!2d77.42151817461644!3d28.60893467567763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb2ac604e0b%3A0xf26d77a981d0e23b!2s9111%2C%20Greater%20Noida%20W%20Rd%2C%20Gaur%20City%201%2C%20Nai%20Basti%20Dundahera%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1719316854682!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
