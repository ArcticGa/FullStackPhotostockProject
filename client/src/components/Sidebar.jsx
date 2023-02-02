import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'

import logo from '../assets/logo.png'

import { categories } from '../utils/data'

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all capitalize'

const isActiveStyle =
  'flex items-center px-5 gap-3 font-bold border-r-2 border-black text-gray-500 transition-all capitalize'

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false)
  }

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Домой
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">Категории</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                alt="category"
                className="w-8 h-8 rounded-full shadow-sm"
              />
              {category.clientName}
            </NavLink>
          ))}
        </div>
      </div>
      {user ? (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt="user" />
          <p>{user.userName}</p>
        </Link>
      ) : (
        <Link
          to={`login`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-red-500 text-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <p className=" w-full text-center ">Войти</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar
