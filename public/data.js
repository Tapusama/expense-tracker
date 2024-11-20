import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSavings } from "react-icons/md";
export  const expenseData = [
    {
      catagory: "City Bank",
      amount: 25600,
      style: {
        width: "17%",
        backgroundColor: "#f97316",
      },
      icon: <IoFastFoodOutline size={25} color="white" />
    },
    {
      catagory: "Cash",
      amount: 22600,
      style: { width: "22%", backgroundColor: "#f59e0b" },
      icon: <BsFuelPump  size={25} color="white" />
    },
    {
      catagory: "SBI",
      amount: 20600,
      style: { width: "30%", backgroundColor: "#eab308" },
      icon: <MdOutlineEmojiTransportation size={25} color="white" />
    },
    {
      catagory: "Kotak-1",
      amount: 15600,
      style: { width: "30%", backgroundColor: "#84cc16" },
      icon: <GiHealthNormal  size={25} color="white" />
    },
    {
      catagory: "Kotak",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#22c55e" },
      icon: <FiBookOpen size={25} color="white" />
    },
    {
      catagory: "Axis Bank",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#06b6d4" },
      icon: <MdOutlinePets size={25} color="white" />
    },
    {
      catagory: "ICICI Bank",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#78716c" },
      icon: <MdOutlineLocalGroceryStore size={25} color="white" />
    },
  ];