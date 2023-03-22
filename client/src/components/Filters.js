import React from 'react'
import Filter from '../components/Filter'
import { SlFire } from 'react-icons/sl'
import { HiOutlineKey} from 'react-icons/hi'
import { IoGolfOutline} from 'react-icons/io5'
import { TbCoffee, TbMountain, TbSnowflake} from 'react-icons/tb'
import { BiHandicap} from 'react-icons/bi'
import { MdOutlineBeachAccess, MdOutlineForest } from 'react-icons/md'


const Filters = () => {
  const sorting = [
    { title: "Trending", icon: <SlFire /> },
    { title: "New", icon: <HiOutlineKey /> },
    { title: "Play", icon: <IoGolfOutline /> },
    { title: "Guesthouse", icon: <TbCoffee /> },
    { title: "Arctic", icon: <TbSnowflake /> },
    { title: "National Parks", icon: <MdOutlineForest /> },
    { title: "Adapted", icon: <BiHandicap /> },
    { title: "Mountains", icon: <TbMountain /> },
    { title: "Beach", icon: <MdOutlineBeachAccess /> },
];
  return (
    <div className="text-center no-underline my-6 sm:mx-6 md:mx-10 lg:mx-10">
      <div className="flex justify-between gap-4 ">
        {sorting.map((object) => (
          <Filter title={object.title} icon={object.icon}/>
        ))}
      </div>
    </div>
  )
};

export default Filters
