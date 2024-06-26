import React, { useState } from 'react';

const CountryCodeInput = () => {
  const [countryCode, setCountryCode] = useState('+91');

  return (
    <div className="flex items-center border border-gray-300 rounded-[12px] px-3">
      <div className="relative">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-12 appearance-none bg-transparent focus:outline-none"
        >
          <option value="+91">+91</option>
          
          {/* Add more country codes as needed */}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <input
        type="tel"
        className="ml-2w-full capitalize px-[22px] py-[12px] text-[13px] font-semibold w-full"
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default CountryCodeInput;
