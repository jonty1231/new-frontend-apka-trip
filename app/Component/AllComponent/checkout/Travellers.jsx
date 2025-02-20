"use client";

import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowDown, FaRupeeSign } from "react-icons/fa";
import { RiArrowDropDownLine, RiHospitalLine } from "react-icons/ri";
import { FaArrowDown19, FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";


import "swiper/css";
import Image from "next/image";
import axios from "axios";
import { apilink } from "../../common";
import { useRouter } from "next/navigation";

const page = ({ setActiveTab,fdatas,price }) => {
  const [passenger, setPassenger] = useState({
    Title: "Mr",
    FirstName: "vivek",
    LastName: "pundir",
    PaxType: 1,
    DateOfBirth: "1987-12-06",
    Gender: 1,
    PassportNo: "238e8923389",
    PassportExpiry: "2027-12-06",
    AddressLine1: "sdjsdhjf sd f sdf hw",
    City: "delhi",
    CountryCode: "91",
    ContactNo: "9876543210",
    Nationality: "IN",
    Email: "jonty@mail.com",
    IsLeadPax:true
  });

  // const [showAdult, setShowAdult] = useState(false);
console.log(fdatas,"sksdkskkkk")
  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", passenger);
  };

const router =useRouter()
const [user,setUser]=useState()
  const [cardDetailsError, setCardDetailsError] = useState(false);

  const validateCard = () => {
    setCardDetailsError(true); // Example: set error
  };

  const paymentOptions = [
    {
      id: 'cards',
      icon: '/images/payment/cards-ico.svg',
      title: 'Credit/Debit/ATM Cards',
      description: 'Use VISA, Mastercard, American Express etc.',
    },
    {
      id: 'netbanking',
      icon: '/images/payment/netbanking-ico.svg',
      title: 'Net Banking',
      description: 'All Major banks are supported',
    },
    {
      id: 'wallets',
      icon: '/images/payment/wallet-ico.svg',
      title: 'Wallets',
      description: 'Choose Mobikwik, Payzapp, PhonePe or Amazon',
    },
    {
      id: 'upi',
      icon: '/images/payment/upi-ico.svg',
      title: 'UPI',
      description: 'Make Online Payments Directly from Bank',
    },
    {
      id: 'emi',
      icon: '/images/payment/emi-ico.svg',
      title: 'EMI',
      description: 'HSBC, RBL, ICICI, Yes and others bank for EMI',
    },
    {
      id: 'rewards',
      icon: '/images/payment/twidsquare-ico.svg',
      title: 'Pay With Rewards',
      description: 'Check Your Rewards',
    },
    {
      id: 'giftcard',
      icon: '/images/payment/giftcard-ico.svg',
      title: 'GiftCard',
      description: 'Pay with GiftCard',
    },
    {
      id: 'paylater',
      icon: '/images/payment/paylater-ico.svg',
      title: 'PayLater',
      description: 'Simpl, ICICI Bank Pay later and Mobikwik Zip Available',
    },
    {
      id: 'googlepay',
      icon: '/images/payment/googlepay-ico.svg',
      title: 'GooglePay',
      description: 'Pay Easily with Google Pay',
    },
  ];

  const offers = [
    {
      id: 1,
      title: "DELIGHT",
      description:
        "Win a flight, hotel stay, and holidays and get assured voucher worth INR 4000",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description:
        "Get up to Rs. 750 Off on Flights and holidays and get assured voucher ",
      terms: "T&C apply",
    },
    {
      id: 3,
      title: "HSBCEMI",
      description:
        "Use this coupon and get up to Rs 4000 off holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 1,
      title: "AUEMI",
      description:
        "Use this coupon get Rs 4005 OFF For  payments holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description: "Get up to Rs. 750 Off on Flights",
      terms: "T&C apply",
    },
  ];

  const hospitalizationData = [
    { id: 1, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 2, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 3, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 4, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 5, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 6, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 7, title: "Hospitalization", sumInsured: "INR 1,00,000" },
  ];

  const [showAdult, setShowAdult] = useState(true)
  const handleAdultDropdown = () => {
 
    setShowAdult(!showAdult)
   

  }

  const [activeOption, setActiveOption] = useState('cards');

  const handleClick = (id) => {
    setActiveOption(id);
  };

  const timeFunction = (oldTime) => {
    const inputTime = new Date(`${oldTime}`);
  
    if (isNaN(inputTime)) {
      throw new Error("Invalid date provided");
    }
  
    const updatedTime = new Date(inputTime);
    updatedTime.setDate(updatedTime.getDate() + 3); // Example: Add 3 days
    return updatedTime;
  };


useEffect(()=>{

  const userid=JSON.parse(localStorage.getItem("NextGenUser"));
// if(!userid) router.push("/user/login")

const fetchuserData=async()=>{


  const data= await axios.get(`${apilink}/user/${userid}`);
  if(data.data.success){
    setUser(data.data.user);
  }

}
fetchuserData()

},[])
const formatDate = (dateStr) => {
  const targetDate = new Date(dateStr);

  // Format the date
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = targetDate.toLocaleDateString('en-US', options);

  // Reorder parts to match the desired format
  const [weekday, month, day, year] = formattedDate.split(/[\s,]+/);
  return `${weekday}-${day} ${month} ${year}`;
};


const handlebook=async(e)=>{
  e.preventDefault()
let response = await axios.post(`${apilink}/flight-book`,{
    ResultIndex:fdatas.ResultIndex,EndUserIp:fdatas.ip,
    TraceId:fdatas.traceid,
    ...passenger})

  console.log(response)
}


  return (
    <div className="">
      <div className="md:grid md:grid-cols-6 gap-5 mt-3">
        <div className=" col-span-4 leftSide space-y-6">
          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-sm md:text-xl font-medium">
                  Flight Detail
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" rounded-sm border  px-3 py-4 relative space-y-5">
                <h3 className="bg-gray-600 text-white text-xs w-fit px-3 font-bold rounded-br-xl absolute top-0 left-0">
                  Depart
                </h3>
                <div className="flex items-center gap-3 text-md md:text-xl">
                  <IoAirplaneSharp className=" font-bold -rotate-45" />
                  <div className="flex items-center gap-1">
                    <h4 className="">{fdatas?.data?.Segments[0][0]?.Origin?.Airport?.CityName} - {fdatas?.data?.Segments[0][0]?.Destination?.Airport?.CityName}  </h4>
                    <p className="border-s-2 border-black px-2  text-sm">
                    {formatDate(fdatas?.data?.Segments[0][0]?.Origin?.DepTime)}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-5 flex-col  md:flex-row items-start  justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center gap-4 ">
                    <img
                   src={`/images/${fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                    <p className="text-sm md:text-lg">{fdatas?.data?.Segments[0][0]?.Airline?.AirlineName}</p>
                      <p className="text-xs">{fdatas?.data?.Airline?.Segments[0][0]?.AirlineCode}-{fdatas?.data?.Segments[0][0]?.Airline?.FlightNumber}</p>
                      <p className="text-xs">{[
                        "All",
                        "Economy",
                        "PremiumEconomy",
                        "Business",
                        "PremiumBusiness",
                        "First",
                      ].filter((inf, ind)=>{ind + 1 == fdatas?.data?.Segments[0][0]?.CabinClass})}</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        15:10
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="font-bold text-nowrap">
                        {fdatas?.data?.Segments[0][0]?.Origin?.Airport?.CityName}  ({fdatas?.data?.Segments[0][0]?.Origin?.Airport?.AirportCode} )
                        </span>
                        <span>{ formatDate(fdatas?.data?.Segments[0][0]?.Origin?.DepTime)}</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-xs">{ Math.floor(fdatas?.data?.Segments[0][0]?.Duration / 60)}h-{fdatas?.data?.Segments[0][0]?.Duration % 60}m</p>
                      <div className="border-t-2 border-black border-dotted w-full flex justify-center relative">
                        <div className="absolute -top-3 bg-white text-lg rounded-full">
                          <GiAirplaneDeparture />
                        </div>
                      </div>
                      {fdatas?.data?.IsRefundable?  <span className="border border-green-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                        REFUNDABLE
                      </span>:  <span className="border border-red-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                       NO REFUNDABLE
                      </span>}
                     
                    </div>

                    <div className="flex flex-col gap-1 items-start">
                      <h4 className="font-extrabold text-sm md:text-xl">
                        17:40
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="text-nowrap font-bold">
                        {fdatas?.data?.Segments[0][0]?.Destination?.Airport?.CityName}  ({fdatas?.data?.Segments[0][0]?.Destination?.Airport?.AirportCode} )
                        </span>
                        <span>{formatDate(fdatas?.data?.Segments[0][0]?.Destination?.ArrTime)}</span>
                        <span>Terminal -2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <h3 className="bg-gray-200  font-bold w-fit text-gray-800 rounded-full px-5 text-xs py-1">
                    saver
                  </h3>
                  <p className="text-xs text-gray-400">Fare Rules Baggage</p>
                </div>
                {/* payment page part */}
                <div className="border-2 ">
                  <div className="p-2 bg-gray-50">
                    <div className="flex justify-between items-center mx-20  text-sm font-semibold">
                      <p className="text-gray-400">Airline</p>
                      <p className="text-gray-400">Check-in-Baggage</p>
                      <p className="text-gray-400">Cabin Baggage</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start p-2">
                    <div className="flex justify-start items-center w-[35%] gap-6">
                      <div className="flex  items-center   md:bg-transparent px-3 rounded-t-lg md:rounded-t-none py-4 md:py-0">
                        <img
                      src={`/images/${fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                          alt="refund policy"
                          className="h-7 w-h-7 rounded-lg"
                        />
                      </div>
                      <div className="">
                      
                        <h6 className=" text-black text-sm font-semibold capitalize">
                        {fdatas?.data?.Segments[0][0]?.Airline?.AirlineName}
                        </h6>
                        <p className="text-gray-500 text-[12px] font-semibold">
                        {fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}-{fdatas?.data?.Segments[0][0]?.Airline?.FlightNumber}
                        </p>
                      </div>
                    </div>
                    <div className="text-black text-sm font-semibold capitalize  w-[28%]">
                     {fdatas?.data?.Segments[0][0]?.Baggage}
                    </div>
                    <div className="text-black text-sm font-semibold capitalize w-[20%]">
                    {fdatas?.data?.Segments[0][0]?.CabinBaggage}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="FirstChild border rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
            <GiAirplaneDeparture />
          </div>
          <span className="text-sm md:text-xl font-medium">Traveller Details</span>
        </div>
      </div>

      {/* Traveller Form */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">ADULT</h3>
        <div className="m-4 rounded-lg shadow-lg border-2">
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-4 items-center">
              <input type="checkbox" className="h-6 w-6" />
              <h3 className="text-lg font-semibold">{passenger.Title} {passenger.FirstName}</h3>
            </div>
            <button onClick={() => setShowAdult(!showAdult)}>
              <RiArrowDropDownLine className="text-4xl" />
            </button>
          </div>

          {showAdult && (
            <form  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border rounded-md shadow-lg">
              {/* Title */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Title</label>
                <select name="Title" value={passenger.Title} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2">
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">First Name</label>
                <input type="text" name="FirstName" value={passenger.FirstName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Last Name</label>
                <input type="text" name="LastName" value={passenger.LastName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Date of Birth</label>
                <input type="date" name="DateOfBirth" value={passenger.DateOfBirth} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Passport No */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Passport No</label>
                <input type="text" name="PassportNo" value={passenger.PassportNo} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Passport Expiry */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Passport Expiry</label>
                <input type="date" name="PassportExpiry" value={passenger.PassportExpiry} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Address */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Address</label>
                <input type="text" name="AddressLine1" value={passenger.AddressLine1} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* City */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">City</label>
                <input type="text" name="City" value={passenger.City} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Contact Number</label>
                <input type="text" name="ContactNo" value={passenger.ContactNo} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-bold text-gray-900 mb-1">Email</label>
                <input type="email" name="Email" value={passenger.Email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Submit Button */}
              <div className="col-span-full flex justify-end">
                <button  onClick={handlebook} className="bg-blue-600 text-white px-4 py-2 rounded-md">Save Traveller</button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Security Notice */}
      <div className="p-4 text-gray-500 text-sm flex items-center gap-1">
        <FaLock /> Secure Booking & Data Protection
      </div>
    </div>
        </div>

        <div className=" w-full md:col-span-2 rightSide space-y-4 md:px-4  ">
          <div className="sticky top-0">
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Adult x 1</p>
                <p className="flex  items-center font-bold text-xs">
                  <FaRupeeSign />
                  {fdatas?.data?.Fare?.BaseFare}
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 text-xs border-b">
                <p>Total Taxes +</p>
                <p className="flex  items-center font-bold">
                  <FaRupeeSign />
                  {fdatas?.Fare?.Tax +fdatas?.Fare?.OtherCharges}
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 t border-b">
                <p>Medical Refund Policy </p>
                <div className="flex items-center gap-2 text-xs">
                  <p className="flex  items-center font-bold line-through">
                    <FaRupeeSign />
                    00
                  </p>
                  <span className="font-bold text-green-500">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-3 font-bold text-lg text-red-600">
                <p>Grand Total</p>
                <p className="flex items-center">
                  <FaRupeeSign />
                  {fdatas?.Fare?.PublishedFare}
                </p>
              </div>
            </div>
            <div className="offersAndPromoCode border rounded shadow-lg">
              <div className="bg-[#2196F3] px-3 py-2 text-white ">
                Offers and Promo Codes
              </div>
              <div className="border-b py-3 px-3 flex justify-center lg:justify-beween flex-wrap gap-2 lg:gap-0">
                <input
                  type="text"
                  placeholder="ENTER COUPON CODE"
                  className="border-b outline-none text-gray-600 uppercase font-semibold text-sm w-fit"
                />
                <div>
                  <button className="bg-[#2196F3] px-16 lg:px-8 py-3 lg:py-1 rounded-full text-sm font-bold text-white">
                    apply
                  </button>
                </div>
              </div>

              <div className="applyOffers  max-h-[300px] overflow-hidden overflow-y-scroll ">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex items-start gap-2 border-b py-4 px-3"
                  >
                    <div className="rounded-full w-[22px] flex items-center justify-center h-[18px] border hover:bg-gray-700">
                      <FaCheck className="text-xs text-white" />
                    </div>
                    <div>
                      <h6 className="font-bold text-xs">{offer.title}</h6>
                      <p className="text-xs">{offer.description}</p>
                      <p className="text-[10px] font-bold uppercase text-[#2196F3]">
                        {offer.terms}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="booking  flex justify-center items-center mt-3">
              <button
                className="bg-[#DA5200] text-sm lg:text-lg tracking-normal text-white rounded-full w-1/2 md:w-[80%] py-2"
                onClick={handlebook}
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
