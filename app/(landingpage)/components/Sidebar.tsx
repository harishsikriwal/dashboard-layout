"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Campaign", src: "Overview",url:'/' },
      { title: "Apps", src: "Card", url: '/apps' },
      { title: "Phone number", src: "Calendar", url: '/phonenumber' },

      { title: "Setting", src: "Settings", gap: true },
    ];
    const router = useRouter()

  return (
        <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/smiley.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Logo
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              onClick={() => router.push(Menu.url ? Menu.url : '/')}
            >
              <img src={`/assets/${Menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Sidebar