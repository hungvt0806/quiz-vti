import React from "react";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";

const EditQuestion = () => {
  const [input1Clicked, setInput1Clicked] = useState(false);
  const [input2Clicked, setInput2Clicked] = useState(false);
  const [input3Clicked, setInput3Clicked] = useState(false);
  const [input4Clicked, setInput4Clicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false); 
   const [isHovered2, setIsHovered2] = useState(false);
   const [isHovered3, setIsHovered3] = useState(false);
   const [isHovered4, setIsHovered4] = useState(false);



  const handleInput1Click = () => {
    setInput1Clicked(true);
    setInput2Clicked(false);
    setInput3Clicked(false);
    setInput4Clicked(false);
  };

  const handleInput2Click = () => {
    setInput1Clicked(false);
    setInput2Clicked(true);
    setInput3Clicked(false);
    setInput4Clicked(false);
  };

  const handleInput3Click = () => {
    setInput1Clicked(false);
    setInput2Clicked(false);
    setInput3Clicked(true);
    setInput4Clicked(false);
  };

  const handleInput4Click = () => {
    setInput1Clicked(false);
    setInput2Clicked(false);
    setInput3Clicked(false);
    setInput4Clicked(true);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#461a42] flex flex-col    items-center justify-start pt-5 w-[1000px] h-[600px] rounded-md ">
        <label className="w-[950px] h-[300px] flex justify-center items-center border  border-gray-100 rounded-md bg-[#461a42] hover:bg-[#2e112b]">
          <textarea
            style={{ outline: "none", border: "1px solid transparent" }}
            placeholder="Nhập câu hỏi vào đây"
            className="w-[550px] h-[80px]   border border-none  resize-none bg-[#461a42] hover:bg-[#2e112b]"
          />
        </label>
        <div className="grid grid-cols-4 gap-1 pt-3  ">
          <div className="flex w-[240px] h-[250px]  bg-fuchsia-300 flex-col  items-center rounded-md">
            <div className="w-full h-4 flex justify-end mt-1  mr-1 relative">
              <FaRegCheckCircle
                onClick={handleInput1Click}
                className={`border ${
                  input1Clicked ? "bg-green-400" : "bg-fuchsia-300"
                } rounded-full w-[20px] h-[20px] `}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              />
              {isHovered1 && (
                <p className="absolute bg-black text-white p-1 rounded-lg mr-6  ">
                  Đánh dấu là câu trả lời đúng
                </p>
              )}
            </div>
            <label className="w-[240px] h-[214px] mt-3 flex justify-center items-center ">
              <textarea
                style={{ outline: "none", border: "1px solid transparent" }}
                type="text"
                className="w-full m-1  border-none h-full rounded-md resize-none border  bg-fuchsia-300 hover:bg-[#dd82ed]"
                placeholder="Nhập câu trả lời vào đây"
              />
            </label>
          </div>

          <div className="flex w-[240px] h-[250px]  bg-blue-300   flex-col  items-center rounded-md">
            <div className="w-full h-4 flex justify-end mt-1 mr-1">
              <FaRegCheckCircle
                onClick={handleInput2Click}
                className={`border ${
                  input2Clicked ? "bg-green-400" : "bg-blue-300"
                } rounded-full w-[20px] h-[20px] `}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              />
              {isHovered2 && (
                <p className="absolute bg-black text-white p-1 rounded-lg mr-6  ">
                  Đánh dấu là câu trả lời đúng
                </p>
              )}
            </div>
            <label className="w-[240px] h-[214px] mt-3 flex justify-center items-center ">
              <textarea
                style={{ outline: "none", border: "1px solid transparent" }}
                type="text"
                className="w-full m-1  border-none h-full rounded-md resize-none border  bg-blue-300 hover:bg-[#78aae3]"
                placeholder="Nhập câu trả lời vào đây"
              />
            </label>
          </div>

          <div className="flex w-[240px] h-[250px]  bg-[#7e9df2] flex-col  items-center rounded-md">
            <div className="w-full h-4 flex justify-end mt-1 mr-1">
              <FaRegCheckCircle
                onClick={handleInput3Click}
                className={`border ${
                  input3Clicked ? "bg-green-400" : "bg-[#7e9df2]"
                } rounded-full w-[20px] h-[20px] `}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              />
              {isHovered3 && (
                <p className="absolute bg-black text-white p-1 rounded-lg mr-6  ">
                  Đánh dấu là câu trả lời đúng
                </p>
              )}
            </div>
            <label className="w-[240px] h-[214px] mt-3 flex justify-center items-center ">
              <textarea
                style={{ outline: "none", border: "1px solid transparent" }}
                type="text"
                className="w-full m-1  border-none h-full rounded-md resize-none border  bg-[#7e9df2] hover:bg-[#4b71db]"
                placeholder="Nhập câu trả lời vào đây"
              />
            </label>
          </div>

          <div className="flex w-[240px] h-[250px]  bg-pink-300 flex-col  items-center rounded-md">
            <div className="w-full h-4 flex justify-end mt-1 mr-1">
              <FaRegCheckCircle
                onClick={handleInput4Click}
                className={`border ${
                  input4Clicked ? "bg-green-400" : "bg-fuchsia-300"
                } rounded-full w-[20px] h-[20px] `}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              />
              {isHovered4 && (
                <p className="absolute bg-black text-white p-1 rounded-lg mr-6  ">
                  Đánh dấu là câu trả lời đúng
                </p>
              )}
            </div>
            <label className="w-[240px] h-[214px] mt-3 flex justify-center items-center ">
              <textarea
                style={{ outline: "none", border: "1px solid transparent" }}
                type="text"
                className="w-full m-1  border-none h-full rounded-md resize-none border  bg-pink-300 hover:bg-[#eb75b6]"
                placeholder="Nhập câu trả lời vào đây"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 mb-9 ">
          <button className="mt-10  bg-fuchsia-700 rounded-md w-[100px] h-[30px] hover:bg-[#6f0d78]  ">
            Lưu câu hỏi
          </button>

          <button className="mt-10 bg-fuchsia-700 rounded-md w-[100px] h-[30px] hover:bg-[#6f0d78]  ">
            Xóa câu hỏi
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;
