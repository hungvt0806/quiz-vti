import React, { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto p-4 pl-10 bg-gray-100 w-[800px] h-[250px]">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex items-center mb-4 w-full">
          <div className="flex items-center">
            <div className="text-green-500 font-bold">
              <IoIosCheckboxOutline />
            </div>
            <span className="font-bold ml-1"> 1.</span>
            <span className="font-bold"> Nhiều lựa chọn</span>
          </div>
          <button className="bg-purple-500 hover:bg-purple-900 text-white py-1 px-2 rounded ml-auto inline-flex items-center">
            <span className="mr-1">
              <FaPencilAlt />
            </span>
            <span>Chỉnh sửa</span>
          </button>
        </div>

        <div className="text-2xl mb-8 w-full relative">
          <span>1. </span>
          Real vô địch C1 mấy lần?
        </div>
        <hr className="w-full border-0 border-b-2 bg-gray-200" />
        <br></br>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
          {/* Đáp án 1 */}
          <div className="md:w-1/2 w-full">
            <label className="radio flex items-center cursor-pointer text-left w-full">
              <input
                type="radio"
                value="1"
                checked={selectedOption === "1"}
                onChange={() => handleOptionChange("1")}
                className="hidden"
              />
              <div
                className={`radio-button w-4 h-4 flex justify-center items-center rounded-full border border-red-500 ${
                  selectedOption === "1" && "bg-green-500 border-green-500"
                }`}
              ></div>
              <span className="ml-2">1)</span>
              <span className="ml-2">12</span>
            </label>
          </div>

          {/* Đáp án 2 */}
          <div className="md:w-1/2 w-full">
            <label className="radio flex items-center cursor-pointer text-left w-full">
              <input
                type="radio"
                value="2"
                checked={selectedOption === "2"}
                onChange={() => handleOptionChange("2")}
                className="hidden"
              />
              <div
                className={`radio-button w-4 h-4 flex justify-center items-center rounded-full border border-red-500 ${
                  selectedOption === "2" && "bg-green-500 border-green-500"
                }`}
              ></div>
              <span className="ml-2">2)</span>
              <span className="ml-2">13</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full mb-3">
          {/* Đáp án 3 */}
          <div className="md:w-1/2 w-full">
            <label className="radio flex items-center cursor-pointer text-left w-full">
              <input
                type="radio"
                value="3"
                checked={selectedOption === "3"}
                onChange={() => handleOptionChange("3")}
                className="hidden"
              />
              <div
                className={`radio-button w-4 h-4 flex justify-center items-center rounded-full border border-red-500 ${
                  selectedOption === "3" && "bg-green-500 border-green-500"
                }`}
              ></div>
              <span className="ml-2">3)</span>
              <span className="ml-2">14</span>
            </label>
          </div>

          {/* Đáp án 4 */}
          <div className="md:w-1/2 w-full">
            <label className="radio flex items-center cursor-pointer text-left w-full">
              <input
                type="radio"
                value="4"
                checked={selectedOption === "4"}
                onChange={() => handleOptionChange("4")}
                className="hidden"
              />
              <div
                className={`radio-button w-4 h-4 flex justify-center items-center rounded-full border border-red-500 ${
                  selectedOption === "4" && "bg-green-500 border-green-500"
                }`}
              ></div>
              <span className="ml-2">4)</span>
              <span className="ml-2">15</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
