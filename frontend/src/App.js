import React, { useEffect } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import logo from "./images/logoWhite.png";
import ig from "./images/IG-logo.svg";
import fb from "./images/FB-logo.svg";

function App() {
  const [time, setTime] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const milestone = new Date(2023, 11, 25, 0, 0, 0);
  const tick = () => {
    setTime({
      days: Math.floor((milestone - new Date()) / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        ((milestone - new Date()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (((milestone - new Date()) % (1000 * 60 * 60 * 24)) %
          (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds:
        Math.floor(
          ((((milestone - new Date()) % (1000 * 60 * 60 * 24)) %
            (1000 * 60 * 60)) %
            (1000 * 60)) /
            1000
        ) < 10
          ? "0" +
            Math.floor(
              ((((milestone - new Date()) % (1000 * 60 * 60 * 24)) %
                (1000 * 60 * 60)) %
                (1000 * 60)) /
                1000
            )
          : Math.floor(
              ((((milestone - new Date()) % (1000 * 60 * 60 * 24)) %
                (1000 * 60 * 60)) %
                (1000 * 60)) /
                1000
            ),
    });
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const checkTime = () => {
    let currentTime = new Date();
    console.log(
      "Days: ",
      Math.floor((milestone - currentTime) / (1000 * 60 * 60 * 24))
    );
    console.log(
      "Hours: ",
      Math.floor(
        ((milestone - currentTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
    );
    console.log(
      "Minutes: ",
      Math.floor(
        (((milestone - currentTime) % (1000 * 60 * 60 * 24)) %
          (1000 * 60 * 60)) /
          (1000 * 60)
      )
    );
    console.log(
      "Seconds: ",
      Math.floor(
        ((((milestone - currentTime) % (1000 * 60 * 60 * 24)) %
          (1000 * 60 * 60)) %
          (1000 * 60)) /
          1000
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-5 w-screen h-screen">
        {/* <div
          className={`h-full absolute w-full transition-all transform ${
            !open ? `animate-rightToLeft` : `animate-leftToRight`
          }`}
        >
          <div
            className={`  ${
              !open ? `sr-only` : `z-10`
            } flex items-center justify-center bg-black opacity-75 w-full h-full`}
          >
            <XCircleIcon
              className="h-7 w-7 cursor-pointer text-pink-700 absolute left-4 top-4"
              onClick={() => setOpen(false)}
            />
            <p className="font-extrabold text-white">MARIA</p>
          </div>
        </div> */}
        <div className="-z-10 absolute inset-0 bg-coming-soon bg-cover h-screen" />
        <overlay className="-z-10 absolute inset-0 bg-black h-screen w-screen opacity-50" />
        <header className="flex items-center justify-between px-6 pb-6 row-span-1 col-span-12">
          <div className="flex-1 flex flex-row flex-nowrap items-center ml-3 gap-4">
            <div
              className="border-2 border-gray-700 flex justify-center items-center p-1"
              onClick={() => setOpen(true)}
            >
              <Bars3Icon className="h-7 w-7 cursor-pointer text-pink-700" />
            </div>
            <p className="uppercase font-thin text-white">Mais informação</p>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src={logo}
              alt="logo"
              className="h-14 w-14"
              onClick={() => checkTime()}
            />
          </div>
        </header>
        <div className="col-start-2 col-end-4 row-start-2 row-end-5">
          <p className="text-lg my-10 text-white font-bold">
            A nossa nova página está a caminho
          </p>
          <div class="shadow-2xl font-mono text-lg text-white">
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col items-center">
                <p className="font-thin text-xs">Dias</p>
                <div className="relative bg-black p-8">
                  <div className="absolute inset-0 grid grid-rows-2">
                    <p className="bg-gradient-to-br from-gray-800 to-black" />
                    <p className="bg-gradient-to-br from-gray-700 to-black" />
                  </div>
                  <span className="relative ">{time.days}</span>
                  <div class="absolute inset-0 flex items-center">
                    <div class="h-px w-full bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-thin text-xs">Horas</p>
                <div className="relative bg-black p-8">
                  <div className="absolute inset-0 grid grid-rows-2">
                    <p className="bg-gradient-to-br from-gray-800 to-black" />
                    <p className="bg-gradient-to-br from-gray-700 to-black" />
                  </div>
                  <span className="relative">{time.hours}</span>
                  <div class="absolute inset-0 flex items-center">
                    <div class="h-px w-full bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-thin text-xs">Minutos</p>
                <div className="relative bg-black p-8">
                  <div className="absolute inset-0 grid grid-rows-2">
                    <p className="bg-gradient-to-br from-gray-800 to-black" />
                    <p className="bg-gradient-to-br from-gray-700 to-black" />
                  </div>
                  <span className="relative">{time.minutes}</span>
                  <div class="absolute inset-0 flex items-center">
                    <div class="h-px w-full bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-thin text-xs">Segundos</p>
                <div className="relative bg-black p-8">
                  <div className="absolute inset-0 grid grid-rows-2">
                    <p className="bg-gradient-to-br from-gray-800 to-black" />
                    <p className="bg-gradient-to-br from-gray-700 to-black" />
                  </div>
                  <span className="relative">{time.seconds}</span>
                  <div class="absolute inset-0 flex items-center">
                    <div class="h-px w-full bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-end-11 row-start-2 row-end-5">
          <div className="flex flex-col justify-center items-center">
            <p className="text-6xl text-white font-bold">Description</p>
            <p className="text-2xl text-white font-bold">
              We are working hard to launch our new website
            </p>
          </div>
        </div>
        <div className="col-start-12 col-end-13 flex flex-col justify-center items-center gap-4 row-start-3">
          <a
            href="https://www.instagram.com/mav.fashiondesign/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={ig} className="text-white h-10" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/people/MAVFashionDesign/100032330336732/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={fb} className="text-white h-10" alt="Facebook" />
          </a>
        </div>
        <div className="col-start-1 col-end-13 row-start-5">
          <div className="flex flex-col justify-end items-center h-full">
            <p className="text-white font-thin">
              © 2023 Maria Ana Valentim. Todos os direitos reservados.
              Desenvolvido por Francisco Colaço
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
