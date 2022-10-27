import React, { useState, useEffect } from "react";
import { DesainerData } from "../../../Data";
import { Routes, Route, NavLink, Link } from "react-router-dom";

const activeBtnStyles =
    "bg-primary text-white font-bold p-2 rounded-full w-[100px] outline-none";
  const notActiveBtnStyles =
    "mr-4 text-black font-bold p-2 rounded-full w-20 outline-none";

function Desainer() {
  const [text, setText] = useState("Trending");
  const [activeBtn, setActiveBtn] = useState("Trending");
  const [data, setData] = useState([])

  useEffect(() => {
    DesainerData.map((data) => {
      if(text == "Trending"){
        setData(DesainerData.filter(e => e.type == "Trending"))
      } else{
        setData(DesainerData.filter(e => e.type == "Top"))
      }
    })
  },[text, activeBtn])

  return (
    <section className="flex flex-col justify-center sm:mx-16 mx-[14px] pb-3">
      <div className="flex items-center w-full text-[16px]">
        <div className="flex items-center w-full gap-2">
          <button
            type="button"
            onClick={(e) => {
              console.log(e.target.textContent);
              setText(e.target.textContent);
              setActiveBtn("Trending");
            }}
            className={`${
              activeBtn === "Trending" ? activeBtnStyles : notActiveBtnStyles
            }`}
          >
            Trending
          </button>

          <button
            type="button"
            onClick={(e) => {
              console.log(e.target.textContent);
              setText(e.target.textContent);
              setActiveBtn("Top");
            }}
            className={`${
              activeBtn === "Top" ? activeBtnStyles : notActiveBtnStyles
            }`}
          >
            Top
          </button>
        </div>
        <div className="w-full flex justify-end items-center">
          <Link to={"/products"}>
            <h3 className="font-semibold p-2 w-[100px] text-center rounded-full border-2 drop-shadow-sm">View All</h3>
          </Link>
        </div>
      </div>

      <h3 className="font-bold md:text-[24px] sm:text-[20px] text-[16px] mt-3 mb-3 text-center">Our Designer</h3>

      <div className="md:grid md:grid-rows-3 flex flex-col grid-flow-col gap-4 mt-3 mx-[12px]">
        {data.map((e,i) => (
          <Link to={`/user/${e.owner}`} key={e.id}>
          <div className="flex items-center mx-6">
            {/* <div className="w-[5%]">{i+1}</div> */}
            <div className="flex items-center w-[60%] gap-5">
              <img
                src={e.imgUrl}
                className="w-[60px] rounded-2xl h-[60px] object-cover object-top"
                alt=""
              />
              <p className="font-semibold">{e.owner}</p>
            </div>
            <div className="w-[40%]"><p className="text-right">{e.collects.length} Designs</p></div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Desainer;
