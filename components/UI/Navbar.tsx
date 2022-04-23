import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ConnectButton from "./ConnectButton";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full flex-row justify-between border-b border-white/20 px-12 py-6">
      <div className="flex flex-row items-center justify-center space-x-8">
        <img src="images/logo.svg" />
        <p className="font-mono text-xs text-white">Browse</p>
        <p className="font-mono text-xs text-white">Collections</p>
        <p className="font-mono text-xs text-white">Top Artists</p>
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
            <div className="fixed top-1/2 left-1/2 z-[60] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-white/10 bg-white p-12 shadow-zen">
              <ConnectButton />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
};

export default Navbar;
