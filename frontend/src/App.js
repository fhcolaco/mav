import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faArrowRight,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logoWhite.png";
import ig from "./images/IG-logo.svg";
import fb from "./images/FB-logo.svg";

function App() {
  const [time, setTime] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const checkNewsletter = () => {
    if (!email || !email.includes("@")) {
      alert("Por favor insira um email válido");
    } else {
      setNewsletter(true);
    }
  };
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
      <div className="grid grid-cols-12 grid-rows-5 w-screen h-screen font-Montserrat">
        <div className="-z-10 absolute inset-0 bg-coming-soon bg-cover h-screen" />
        <overlay className="-z-10 absolute inset-0 bg-black h-screen w-screen opacity-50" />
        <div className="col-start-1 col-end-13 row-start-1 row-end-2">
          <header className="flex items-center justify-between px-6 h-full w-full">
            <div className="flex-1 flex flex-row flex-nowrap items-center ml-3 gap-4">
              <div
                className="border-2 border-gray-700 flex justify-center items-center p-1"
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-7 w-7 cursor-pointer text-pink-700"
                />
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
        </div>
        <div className="col-start-2 col-end-4 row-start-2 row-end-5 ">
          <div className="inline-flex justify-start gap-6 items-center w-full ml-10 my-10 text-xl">
            <FontAwesomeIcon icon={faArrowRight} className="text-pink-700" />
            <p className="text-white font-bold">Brevemente</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white w-full">
            <div className="inline-flex items-end justify-center gap-2">
              <span className="text-9xl">{time.days}</span>
              <p className="font-thin text-3xl">dias</p>
            </div>
            <div className="inline-flex justify-evenly gap-2 w-full">
              <div className="flex flex-row items-end justify-center gap-2">
                <span className="text-3xl">{time.hours}</span>
                <p className="font-thin text-xl">H</p>
              </div>
              <div className="flex flex-row items-end gap-2">
                <span className="text-3xl">{time.minutes}</span>
                <p className="font-thin text-xl">M</p>
              </div>
              <div className="flex flex-row items-end gap-2">
                <span className="text-3xl">{time.seconds}</span>
                <p className="font-thin text-xl">S</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-end-11 row-start-2 row-end-5">
          <div className="inline-flex justify-start gap-6 items-center w-full ml-10 my-10 text-xl">
            <FontAwesomeIcon icon={faArrowRight} className="text-pink-700" />
            <p className="text-white font-bold">Quem somos</p>
          </div>
          <div className="flex flex-col justify-start w-full mb-16 gap-2">
            <p className="text-white text-justify text-3xl font-bold font-Poltawski ">
              Bem-vindos à MAV, estamos a preparar uma nova experiência para ti!
            </p>
            <p className="text-white text-justify text-2xl font-bold font-Poltawski pb-4">
              Para já, podes visitar a nossa página do Facebook e do Instagram.
            </p>
            <p className="text-white text-justify text-sm">
              Somos um espaço onde a criatividade e a qualidade se unem para
              criar peças únicas e especiais. Localizado no coração da Serra da
              Estrela, o nosso atelier é um lugar onde a arte de costurar é
              levada a sério e onde os nossos clientes são tratados com o
              respeito e a atenção que merecem.
            </p>
            <p className="text-white text-justify text-sm">
              Vem visitar-nos e descubra como a nossa paixão pela costura pode
              transformar as suas roupas em peças únicas e incríveis. Estamos
              ansiosos te receber no nosso atelier em breve!
            </p>
            <p className="text-white text-justify text-sm">
              Increve na nossa newsletter para receberes todas as novidades!
            </p>
          </div>
          <div className="block">
            <label for="email" class="sr-only">
              Email
            </label>
            <div class="relative">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Insere o teu email"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <button
                  onClick={() => checkNewsletter()}
                  disabled={newsletter}
                  className={`group relative inline-flex items-center overflow-hidden rounded ${
                    newsletter
                      ? "bg-green-700 gap-4"
                      : "bg-pink-700 active:bg-pink-500"
                  } px-8 py-3 text-white focus:outline-none focus:ring `}
                >
                  <FontAwesomeIcon
                    icon={newsletter ? faCheck : faEnvelope}
                    className={` ${
                      newsletter
                        ? "group-hover:start-0"
                        : "absolute -start-full transition-all group-hover:start-4"
                    }
                      
                    `}
                  />
                  <span
                    className={`${
                      newsletter ? "group-hover:ms-0" : " group-hover:ms-4"
                    } text-sm font-medium transition-all`}
                  >
                    {newsletter ? "Subscrito" : "Subscrever"}
                  </span>
                </button>
              </span>
            </div>
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
        <div
          className={`transition-all h-full duration-500 ${
            open ? "opacity-100 w-full z-10" : "opacity-0 w-0 invisible"
          } `}
        >
          <div className="-z-10 absolute inset-0 bg-black bg-cover h-screen" />
          <div className="absolute top-0 left-0 h-full w-full grid grid-cols-12 grid-rows-5">
            <div className="col-start-1 col-end-13 row-start-1 row-end-2">
              <header className="flex items-center justify-between px-6 w-full h-full">
                <div className="flex-1 flex flex-row flex-nowrap items-center ml-3 gap-4">
                  <div
                    className="border-2 border-gray-700 flex justify-center items-center p-1"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      className="h-7 w-7 cursor-pointer text-pink-700 left-4 top-4"
                    />
                  </div>
                  <p className="uppercase font-thin text-white">
                    Mais informação
                  </p>
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
            </div>
            <div className="col-start-2 col-end-6 row-start-2 row-end-4">
              <div className="flex flex-col justify-start w-full mb-16 gap-2">
                <p className="text-white text-justify text-3xl font-bold font-Poltawski ">
                  IMAGEM
                </p>
              </div>
            </div>
            <div className="col-start-6 col-end-12 row-start-2 row-end-3">
              <div className="flex flex-col justify-start w-full mb-16 gap-2">
                <p className="text-white text-justify text-3xl font-bold font-Poltawski ">
                  Bem-vindos à MAV, estamos a preparar uma nova experiência para
                  ti!
                </p>
              </div>
            </div>
            <div className="col-start-6 col-end-12 row-start-3 row-end-4">
              <div className="flex flex-col justify-start w-full mb-16 gap-2">
                <p className="text-white text-justify text-2xl font-bold font-Poltawski pb-4">
                  LOCALIZAÇÃO
                </p>
                <p className="text-white text-justify text-sm">
                  Somos um espaço onde a criatividade e a qualidade se unem para
                  criar peças únicas e especiais. Localizado no coração da Serra
                  da Estrela, o nosso atelier é um lugar onde a arte de costurar
                  é levada a sério e onde os nossos clientes são tratados com o
                  respeito e a atenção que merecem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
