import React, { useState } from "react";
import logo from "./../Assets/logo.png";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { HiX, HiHome } from "react-icons/hi";
import { useMainContext } from "../Context/Context";
import { NavLink, Link } from "react-router-dom";
import {FiSearch, FiShoppingCart, FiUser} from 'react-icons/fi'
import {CgProfile, CgIfDesign} from 'react-icons/cg'
import {VscSignIn} from 'react-icons/vsc'

function Navbar({cart}) {
  const [cari, setCari] = useState('')
  const [openSearch, setOpenSearch] = useState(false)
  const {openToggle, setOpenToggle} = useMainContext()
  const [resource, setResource] = useState(false)
  // console.log(cart.length)
  return (
    <section>
      <nav className={`py-6 max-w-[1280px] ${openToggle ? "z-0" : 'z-[10] w-full'}`}>
        <div className="flex justify-between items-center gap-4">
            <NavLink to={'/'} className="w-full flex flex-row items-center">
                <img src={logo} alt="Full Fashion" className="w-[56px] h-[56px]" />
                <p className="text-2xl font-semibold text-primary hidden sm:flex">Full Fashion</p>
            </NavLink>

          <div className="w-full relative text-slate-400 md:flex hidden">
            <input value={cari} onChange={(e) => setCari(e.target.value)} type="text" className="w-[100%] border-none outline-none p-2 text-[16px] px-[32px] rounded-2xl shadow-md" placeholder="Searching Design ..." />
            <p className="absolute top-[30%] left-[10px]"><FiSearch fontSize={16}/></p>
            { cari != "" && (
              <p className="absolute top-[30%] right-[10px] cursor-pointer" onClick={() => setCari("")}><HiX fontSize={16}/></p>
              )
            }
          </div>

          <Link to={`/cart`} className="relative flex justify-end cursor-pointer">
            <FiShoppingCart fontSize={28} className="text-primary"/>
            {cart.length > 0 && (
              <p className="absolute top-0 left-6 bg-yellow-400 w-[12px] h-[12px] flex items-center justify-center rounded-full text-white"><span className="text-[12px]">{cart.length}</span></p>
            )}
          </Link>

          <ul className="list-none w-full md:flex hidden justify-end items-center flex-1 gap-1 pr-[12px] relative">
            <NavLink to={'/'}>
              <li className="font-semibold cursor-pointer text-[16px] mr-4 text-primary">
                Home
              </li>
            </NavLink>
            <NavLink to={'/products'}>
              <li className="font-semibold cursor-pointer text-[16px] mr-4 text-primary">
                Design
              </li>
            </NavLink>
            <li className="font-semibold cursor-pointer text-[16px] mr-4">
              <CgProfile className="text-primary" fontSize={28} onClick={() => setResource(!resource)} />
              {resource && (
              <section className={`w-[180px] bg-white rounded-lg absolute top-[50px] right-0 drop-shadow-xl notifikasi-before shadow-md transition duration-300 ease-in-out flex flex-col`}>
                <NavLink to={'/profile'} className={"flex gap-4 px-6 py-3 border-b-[1px] hover:shadow-md justify-between items-center"} onClick={() => setResource(false)}>
                  <FiUser fontSize={24}/>
                  <p className="font-semibold w-full">Profile</p>
                </NavLink>
                <div className={"flex gap-4 px-6 py-3 border-b-[1px] hover:shadow-md justify-between items-center"} onClick={() => setResource(false)}>
                  <VscSignIn fontSize={24}/>
                  <p className="font-semibold w-full">Sign in</p>
                </div>
              </section>
            )}
            </li>
          </ul>
          
          <div className={`md:hidden flex flex-1 justify-end items-center`}>
            <FiSearch
              fontSize={28}
              className="text-primary cursor-pointer"
              onClick={() => setOpenSearch(true)}
            />
          </div>

          <div className={`md:hidden flex flex-1 justify-end items-center`}>
            <RiBarChartHorizontalFill
              fontSize={28}
              className="text-primary cursor-pointer rotate-180"
              onClick={() => setOpenToggle(true)}
            />
          </div>
        </div>
      </nav>

      <div className={`md:hidden z-100 flex fixed ${openSearch ? "w-full" : "w-0"} shadow-2xl duration-50 top-0 left-0 bg-white h-[100px] overflow-y-auto z-10 peer-focus:left-0 peer:transition ease-out`}>
        <div className="w-full justify-end items-center p-2 flex flex-row">
          <HiX
            fontSize={40}
            className="cursor-pointer mt-3"
            onClick={() => setOpenSearch(false)}
          />
          <div className="mt-3 w-full p-2">
            <input type="text" value={cari} onChange={(e) => setCari(e.target.value)} className="w-full border-none outline-none" name="" id="" placeholder="Searching ..."/>
          </div>
        </div>
      </div>

      <div className={`md:hidden z-100 flex fixed ${openToggle ? "w-full" : "w-0"} shadow-2xl duration-300 top-0 left-0  h-screen overflow-y-auto z-10 peer-focus:left-0 peer:transition ease-out flex-col bg-white`}>
        <div className="w-full flex flex-col p-2 items-end">
          <HiX
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setOpenToggle(false)}
          />
        </div>
        <div className="w-full flex flex-col">
          <NavLink to={'/'} onClick={() => setOpenToggle(false)} className="p-4 flex items-center mt-3 gap-2 text-primary border-b-[1px] py-4 cursor-pointer">
            <HiHome fontSize={28}/>
            <p>Home</p>
          </NavLink>
          <NavLink to={'/products'} onClick={() => setOpenToggle(false)} className="p-4 flex items-center mt-3 gap-2 text-primary border-b-[1px] py-4 cursor-pointer">
            <CgIfDesign fontSize={28}/>
            <p>Design</p>
          </NavLink>
          <NavLink to={'/profile'} onClick={() => setOpenToggle(false)} className="p-4 flex items-center mt-3 gap-2 text-primary border-b-[1px] py-4 cursor-pointer">
            <CgProfile fontSize={28}/>
            <p>Design</p>
          </NavLink>
        </div>
        <div onClick={() => setOpenToggle(false)} className="w-full flex justify-center items-center gap-2 mt-4">
            <VscSignIn fontSize={24}/>
            <p>Sign in</p>
        </div>
      </div>

    </section>
  );
}

export default Navbar;
