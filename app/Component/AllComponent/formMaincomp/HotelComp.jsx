"use client";
import React, { useEffect, useState } from "react";
import TravellerDropDownhotels from "../TravellerDropDownhotels";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AutoSearchcity from "../AutoSearchcity";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import Navbar from "../Navbar";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserLarge, FaCalendarAlt } from "react-icons/fa6";
import TypeWriterHeaderEffect from "../TypeWriterHeaderEffect";

const HotelComp = () => {
  const router = useRouter();
  const localTimeZone = getLocalTimeZone();
  const [isVisible, setIsVisible] = useState("");
  const [defaultInfo, setDefaultInfo] = useState(null);

  useEffect(() => {
    const hotelItems = JSON.parse(localStorage.getItem("hotelItems"));
    if (hotelItems) {
      setDefaultInfo(hotelItems);
    }
  }, []);

  const [city, setCity] = useState(
    defaultInfo?.place || { Name: "Delhi", Code: "130443" }
  );

  const currentDate = today(localTimeZone);

  const [arrivalTime, setArrivalTime] = useState(
    defaultInfo?.checkIntime ? new Date(defaultInfo.checkIntime) : new Date()
  );
  const [checkOut, setCheckOut] = useState(
    defaultInfo?.checkouttime ? new Date(defaultInfo.checkouttime) : new Date(arrivalTime.getTime() + 86400000)
  );

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setIsVisible("");
  };

  const handleVisibilityChange = (value) => setIsVisible(value);

  const handleDateChange = (newRange, isCheckOut = false) => {
    const newDate = new Date(newRange.year, newRange.month - 1, newRange.day);
    
    if (isCheckOut) {
      setCheckOut(newDate);
    } else {
      setArrivalTime(newDate);
      setCheckOut(new Date(newDate.getTime() + 86400000)); // Default checkout is next day
    }

    setIsVisible("");
  };

  const handleHotelSearch = () => {
    localStorage.setItem(
      "hotelItems",
      JSON.stringify({
        place: { Name: city.Name, Code: city.Code },
        checkIntime: arrivalTime,
        checkouttime: checkOut,
      })
    );

    const formatDate = (date) => date.toISOString().slice(0, 10);

    router.push(
      `/hotels/cityName=${city.Name}&citycode=${city.Code}&checkin=${formatDate(arrivalTime)}&checkout=${formatDate(checkOut)}&adult=${adultCount}&child=${childCount}&rooms=${numberOfRooms}&page=0&star=0`
    );
  };

  return (
    <div className="header relative md:px-5 lg:px-12 xl:px-24">
      <div className="bg-[#002043] h-[12rem] absolute inset-0 -z-10" />

      <TypeWriterHeaderEffect />

      <div className="flex flex-col bg-white lg:block rounded-lg">
       <div className="bg-gray-200 rounded-sm shadow">
          <Navbar />
        </div> 
  
        <div className="px-4 border-b-2 shadow-sm space-y-1 py-3">
          <div className="tabs FromDateDeapt flex flex-col lg:flex-row justify-between gap-4">
            
            
            <div className="relative w-full lg:w-[27%]">
              <div
                onClick={() => setIsVisible("city")}
                className="relative rounded gap-3 h-full min-h-[3rem] flex items-center px-2 w-full border border-slate-400 text-black"
              >
                <IoLocationSharp className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl text-black font-bold capitalize">
                    {city.Name}
                  </span>
                </div>
              </div>
              {isVisible === "city" && (
                <AutoSearchcity
                  value="From"
                  handleClosed={handleVisibilityChange}
                  onSelect={handleCitySelect}
                  visible={setIsVisible}
                />
              )}
            </div>

          <div className="relative w-full lg:w-[20%]">
              <div
                onClick={() => setIsVisible("date")}
                className="flex items-center gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
              >
                {/* <FaCalendarAlt /> */}
                <div className="text-black">
                  <div className="flex items-baseline">
                    <span className="text-xl md:text-2xl pr-1 font-bold">
                      {arrivalTime.getDate()}
                    </span>
                    <span className="text-sm font-semibold">
                      {arrivalTime.toLocaleString("default", { month: "short" })}
                    </span>
                    <span className="text-sm font-semibold">
                      {arrivalTime.getFullYear()}
                    </span>
                  </div>
                  <p className="text-black text-xs">Check In</p>
                </div>
              </div>

              {isVisible === "date" && (
                <div className="absolute top-full bg-white z-50">
                <Calendar
                
                  aria-label="Select a date"
                  onChange={(newRange) => handleDateChange(newRange)}
                  minValue={currentDate}
                />
                </div>
              )}
              
            </div> 

               








            <div className="relative w-full lg:w-[20%]">
              <div
                onClick={() => setIsVisible("checkout")}
                className="flex items-center gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
              >
                {/* <FaCalendarAlt /> */}
                <div className="text-black">
                  <div className="flex items-baseline">
                    <span className="text-xl md:text-2xl pr-1 font-bold">
                      {checkOut.getDate()}
                    </span>
                    <span className="text-sm font-semibold">
                      {checkOut.toLocaleString("default", { month: "short" })}
                    </span>
                    <span className="text-sm font-semibold">
                      {checkOut.getFullYear()}
                    </span>
                  </div>
                  <p className="text-black text-xs">Check Out</p>
                </div>
              </div>

              {isVisible === "checkout" && (
                <div className="absolute top-full bg-white">
                <Calendar
                  aria-label="Select a date"
                  onChange={(newRange) => handleDateChange(newRange, true)}
                  minValue={currentDate}
                />
                </div>
              )}
            </div>
            
           

            
            <div className="flex justify-center items-center">
              <button
                onClick={handleHotelSearch}
                className="bg-[#0A5EB0] w-full md:w-fit py-2 px-4 font-semibold text-lg rounded-md text-white"
              >
                Search Hotels
              </button>
            </div> 
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default HotelComp;
