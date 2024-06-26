import React from "react";

const VerticalEllipsis = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-1">
      <div className="w-1 h-1 bg-[#1C1B1F] rounded-full"></div>
      <div className="w-1 h-1 bg-[#1C1B1F] rounded-full"></div>
      <div className="w-1 h-1 bg-[#1C1B1F] rounded-full"></div>
    </div>
  );
};

const JobTable = () => {
  const jobs = [
    {
      id: 1,
      title: "Assistant Professor",
      status: "Active",
      date: "05/05/2024",
      views: 5520,
      applicants: 5520,
    },
    {
      id: 2,
      title: "Assistant Professor",
      status: "Under Review",
      date: "05/05/2024",
      views: 5520,
      applicants: 5520,
    },
    {
      id: 3,
      title: "Assistant Professor",
      status: "Closed",
      date: "05/05/2024",
      views: 5520,
      applicants: 5520,
    },
  ];

  const statusColors = {
    Active: "bg-[#5CCB5EB2] bg-opacity-80 text-white text-[16px] font-bold ",
    "Under Review":
      "bg-[#F2D84F4D] bg-opacity-30 text-[16px] font-bold  text-[#232323] text-opacity-80",
    Closed: "bg-[#FCE6CB] text-[16px] text-[#232323] text-opacity-80 font-bold",
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="bg-[#F1F2F4] rounded-t-[20px]">
            <th className="px-[38px] rounded-tl-[20px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Posted Jobs
            </th>
            <th className="px-[38px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Status
            </th>
            <th className="px-[38px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Posted Date
            </th>
            <th className="px-[38px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Total Views
            </th>
            <th className="px-[38px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Applicants
            </th>
            <th className="px-[38px] rounded-tr-[20px] py-[14px] border-b text-[#232323D9] text-opacity-85 text-[20px] font-bold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="text-center">
              <td className="py-[30px] border-b text-[16px] font-bold text-[#232323CC] text-opacity-80 ">
                {job.title}
              </td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-[17px] py-[15px] rounded-full ${
                    statusColors[job.status]
                  }`}
                >
                  {job.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-[16px] font-bold text-[#232323CC] text-opacity-80">
                {job.date}
              </td>
              <td className="py-2 px-4 border-b text-[16px] font-bold text-[#232323CC] text-opacity-80">
                {job.views}
              </td>
              <td className="py-2 px-4 border-b">
                <button className="text-white bg-[#0A65CC] text-[20px] font-semibold px-[9px] py-[17px] rounded-[15px]">
                  View ({job.applicants})
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                <VerticalEllipsis />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
