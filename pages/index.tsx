import Head from "next/head";
import Main from "../components/layouts/Main";
import WaveSurfer from "wavesurfer.js";
import { FaGithub, FaSpotify } from "react-icons/fa";
import ShaderComponent from "../components/UI/ShaderComponent";
import { IoCopySharp } from "react-icons/io5";
import { BiDotsHorizontal, BiPlay } from "react-icons/bi";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const WaveformComponent = dynamic(() => import("../components/UI/Waveform"), {
  ssr: false,
});

export default function Home() {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Main>
      <ShaderComponent />
      <div className="relative mb-48 flex min-h-screen w-full flex-auto flex-col items-start justify-start">
        <div className="relative h-[400px] w-full">
          <div className="absolute bottom-0 z-10 flex w-full translate-y-1/2 flex-col items-start justify-center px-24">
            <div className="mb-4 flex w-full flex-row justify-between">
              <div className="flex flex-row">
                <div className="relative mr-12">
                  <img
                    src="/images/archer.png"
                    className="aspect-square w-72 rounded-sm"
                  />
                  <div className="absolute bottom-0 right-0 z-10 h-4 w-4 translate-x-1/2 translate-y-1/2 rounded-full border-4 border-white bg-primary" />
                </div>

                <div className="relative flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center">
                    <h1 className="mr-4 font-syne  text-6xl text-white">
                      Zerker
                    </h1>
                    <svg
                      display="block"
                      width="28"
                      height="28"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                        fill="#FFC061"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                  <p className="mb-12 text-left font-mono text-white/50">
                    Music Producer — Hollywood, CA
                  </p>
                  <div className="flex flex-row space-x-12">
                    <div className="flex flex-col">
                      <p className="mb-2 text-2xl text-black">1.5m</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                        Listeners
                      </p>
                    </div>

                    <div className="h-14 w-px bg-black/10" />
                    <div className="flex flex-col">
                      <p className="mb-2 text-2xl text-black">5</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                        Albums
                      </p>
                    </div>
                    <div className="h-14 w-px bg-black/10" />
                    <div className="flex flex-col">
                      <p className="mb-2 text-2xl text-black">10</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                        Songs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16 flex flex-row items-center justify-center">
                <div className="mr-8 flex h-fit flex-row items-center justify-center rounded-sm border border-white/10 bg-primary py-2 px-4">
                  <p className="mr-4 font-mono text-xs text-black">
                    0x790—Ed34
                  </p>
                  <div className="flex flex-row">
                    <IoCopySharp className="cursor-pointer text-xs text-black/10 transition duration-200 ease-linear hover:text-black" />
                  </div>
                </div>
                <div className=" h-fit rounded-l-sm border border-white/10 bg-opacity-90 bg-clip-padding py-2 px-4 backdrop-blur-xl backdrop-filter">
                  <p className="font-mono text-xs text-white">Edit Profile</p>
                </div>
                <div className="h-fit rounded-r-sm border border-white/10 bg-opacity-90 bg-clip-padding py-2 px-2 backdrop-blur-xl backdrop-filter">
                  <BiDotsHorizontal className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-48 flex w-full flex-row px-24">
          <div className="mr-12 flex h-fit flex-col items-start justify-between">
            <div className="mb-8 flex flex-col">
              <p className="mb-4 w-72 font-mono text-sm uppercase text-black">
                Followed by
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <img
                    src="/images/archer.png"
                    className="aspect-square h-10 w-10 rounded-full border-4 border-white"
                  />
                  <img
                    src="/images/music.png"
                    className="aspect-square h-10 w-10 rounded-full border-4 border-white"
                  />
                  <img
                    src="/images/smoke.png"
                    className="aspect-square h-10 w-10 rounded-full border-4 border-white"
                  />
                  <img
                    src="/images/element.png"
                    className="aspect-square h-10 w-10 rounded-full border-4 border-white"
                  />
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  + 1.2K others
                </p>
              </div>
            </div>
            <div className="mb-8 h-px w-full bg-black/10" />
            <div className="flex flex-col">
              <p className="mb-4 w-72 font-mono text-sm uppercase text-black">
                Socials
              </p>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <img src="images/twitter.svg" className="h-4 w-4" />
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  @not_zerker
                </p>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <img src="images/ig.svg" className="h-4 w-4" />
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  @zerker
                </p>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <img src="images/ens.svg" className="h-4 w-4" />
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  zerker.eth
                </p>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <img src="images/spotify.svg" className="h-4 w-4" />
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  zerker
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-12 flex flex-row items-center justify-center">
              <div className="flex w-48">
                <p className="font-mono text-lg uppercase tracking-widest">
                  My Songs
                </p>
              </div>
              <div className="h-px w-full bg-black/10" />
            </div>
            <div className="relative mb-16 h-36 w-full rounded-sm bg-transparent">
              <motion.div className="absolute bottom-4 left-4 z-10 aspect-square w-36">
                <img
                  src="images/music.png"
                  className={`aspect-square w-36 rounded-sm shadow-zen`}
                />
              </motion.div>

              <div className=" flex h-full w-full flex-row items-center rounded-sm border border-black/10 pl-48 pr-12">
                <div className="mr-8 h-fit w-fit cursor-pointer items-center justify-center rounded-full bg-primary p-4 shadow-zen">
                  <BiPlay className="text-2xl text-black" />
                </div>{" "}
                <div className="mr-32 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                    R&B
                  </p>
                  <p className="text-3xl">Lights Off</p>
                </div>
                <WaveformComponent key="1" />
              </div>
              {/* <div className="absolute bottom-0 h-6 w-full rounded-b-sm bg-black/10" /> */}
            </div>
            <div className="relative h-36 w-full rounded-sm bg-transparent">
              <motion.div className="absolute bottom-4 left-4 z-10 aspect-square w-36">
                <img
                  src="images/music.png"
                  className={`aspect-square w-36 rounded-sm shadow-zen`}
                />
              </motion.div>
              <div className="flex h-full w-full flex-row items-center rounded-sm border border-black/10 pl-48 pr-12">
                <div className="mr-8 h-fit w-fit cursor-pointer items-center justify-center rounded-full bg-primary p-4 shadow-zen">
                  <BiPlay className="text-2xl text-black" />
                </div>{" "}
                <div className="mr-32 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                    R&B
                  </p>
                  <p className="text-3xl">Lights Off</p>
                </div>
                <WaveformComponent key="2" />
              </div>
              {/* <div className="absolute bottom-0 h-6 w-full rounded-b-sm bg-black/10" /> */}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
