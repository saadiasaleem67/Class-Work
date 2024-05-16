"use client";
import Image from "next/image";
import main from "/public/main.png";
import { useState } from "react";


const Hero = () => {
  // let count = 1;
  // const [count, setNumber] = useState(0);
  // const [firstName , setName] =useState("saadia")

  const [show, setShow] = useState(true);
  
    function toogle (){
      setShow(!show)
    }
  return (
    <div className="bg-red-200 ">
      <div className="flex flex-col justify-between items-center px-5 pt-3 md:flex-row gap-2">
        <div className="flex justify-center">
        </div>

          {show== true?

          <Image src={main} alt="logo" width={300}/>:
        <h1>hello</h1>
          }
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl">Hello! Welcome</h1>
          <div className="w-[100px] bg-yellow-500 h-1 rounded "></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            tempora quas quae voluptates aperiam .
          </p>
          <div>
            <button
              className=" bg-red-600 px-4 rounded-full text-white hover:bg-yellow-500 hover:text-gray-950 1"
              onClick={
                // setNumber(count +1)//initaila vlaue 0 hy phir 1 hui
                // setNumber(count +1)//initial 1 then 3
                // setNumber(count +3)//initial 2 then 3
                // last wala jb call hoga tb use state update hoga.
                // setNumber((item) => item + 1);
                // setNumber((item) => item + 1);
                // setNumber((item) => item + 1);
                // setNumber((item) => item + 1);
                // setNumber((item) => item + 1);
                //  direct number 'incresase krny k leyea end wala dhelhy ga.
                // name change
                // setName(firstName+"duaa")
              toogle
              }
            >
            toogle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
    
}

export default Hero 
  
