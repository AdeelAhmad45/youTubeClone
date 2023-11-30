import React from 'react'
import { BiLike } from "react-icons/bi";
import { 
    MdHomeFilled,
    MdVideocam ,
    MdSubscriptions ,
    MdOutlineWatchLater,
    MdHistory
    } from "react-icons/md";


function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled />,
            name: "Home"
        },
        {
            icon: <MdVideocam />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions />,
            name: "Subcription"
        }
       
    ]

    const otherLinks = [
        {
            icon: <MdHistory />,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater />,
            name: "Watch Later"
        },
        {
            icon: <BiLike />,
            name: "Liked"
        }

    ]
  return (
    <div className='w-2/12 h-screen p-4 pb-8 overflow-auto bg-[#212121]'>
        <ul className='flex flex-col border-b-2 border-gray-700'>
            {
                mainLinks.map(({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-3  hover:bg-zinc-600 rounded-md ${name === "Home" ? " bg-zinc-600" : ""}`}>
                            <a href="" className='flex items-center gap-5'>{icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <ul className='flex flex-col border-b-1 border-gray-800'>
            {
                otherLinks.map(({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-3  hover:bg-zinc-600 rounded-md ${name === "Home" ? " bg-zinc-600" : ""}`}>
                            <a href="" className='flex items-center gap-5'>{icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar