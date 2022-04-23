import Head from "next/head";
import Main from "../components/layouts/Main";

import { FaGithub, FaSpotify } from "react-icons/fa";
import ShaderComponent from "../components/UI/ShaderComponent";
import { IoCopySharp } from "react-icons/io5";
import { BiDotsHorizontal, BiPlay } from "react-icons/bi";

export default function Home() {
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
                  <h1 className=" font-syne  text-6xl text-white">Zerker</h1>
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
                  <p className="font-mono text-xs text-black/50">Instagram</p>
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  @not_zerker
                </p>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <p className="font-mono text-xs text-black/50">ENS</p>
                </div>
                <p className="rounded-full bg-black/10 py-1 px-2 font-mono text-xs text-black/50">
                  zerker.eth
                </p>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center -space-x-2">
                  <p className="font-mono text-xs text-black/50 ">Spotify</p>
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
            <div className="relative mb-12 h-36 w-full rounded-sm bg-transparent">
              <img
                src="images/smoke.png"
                className="absolute left-4 bottom-4 z-10 aspect-square w-36 rounded-sm shadow-zen"
              />
              <div className="relative z-10 flex h-full w-full flex-row justify-between pl-48 pr-12 pt-8">
                <div className="mr-64 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                    Lofi Hip-Hop
                  </p>
                  <p className="text-3xl">Fast Lane</p>
                </div>
                <div className="flex h-fit items-center justify-center rounded-full border border-black/10 p-4">
                  <BiPlay className="text-2xl text-black/50" />
                </div>
              </div>
              {/* <div className="absolute bottom-0 h-24 w-full rounded-b-sm bg-primary" /> */}
            </div>
            <div className="relative h-36 w-full rounded-sm bg-transparent">
              <img
                src="images/music.png"
                className="absolute left-4 bottom-4  z-10 aspect-square w-36 rounded-sm shadow-zen"
              />
              <div className="flex h-full w-full flex-row justify-between pl-48 pr-12 pt-8">
                <div className="mr-64 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-black/50">
                    R&B
                  </p>
                  <p className="text-3xl">Lights Off</p>
                </div>
                <div className="flex h-fit items-center justify-center rounded-full border border-black/10 p-4">
                  <BiPlay className="text-2xl text-black/50" />
                </div>
              </div>
              {/* <div className="absolute bottom-0 h-6 w-full rounded-b-sm bg-black/10" /> */}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
