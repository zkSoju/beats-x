import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ConnectButton from "./ConnectButton";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const popupAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-row justify-between border-b border-white/20 px-12 py-6">
      <div className="flex flex-row items-center justify-center space-x-8">
        <img src="images/logo.svg" />
        <a className="exampleClass font-mono text-xs text-white">Browse</a>
        <a className="exampleClass font-mono text-xs tracking-wide text-white">
          My Profile
        </a>
        <a className="exampleClass font-mono text-xs text-white">Collections</a>
        <a className="exampleClass font-mono text-xs text-white">Top Artists</a>
      </div>
      <Dialog.Root modal={false}>
        <Dialog.Trigger>
          <button>
            <p className="text-white">Sign In</p>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <div className="fixed inset-0 z-[60] bg-black/80">
            <div className="flex w-full justify-end py-16 px-16">
              <Dialog.Close>
                <IoMdClose className="text-2xl text-white" />
              </Dialog.Close>
            </div>
          </div>

          <Dialog.Content asChild>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={popupAnimation}
              className="fixed top-1/2 left-1/2 z-[60] w-[26rem] rounded-sm border border-white/10 bg-white p-12 shadow-zen"
            >
              <ConnectButton />
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
};

export default Navbar;
