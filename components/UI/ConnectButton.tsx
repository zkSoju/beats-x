import { useConnect } from "wagmi";
import { BsChevronRight } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import * as Dialog from "@radix-ui/react-dialog";

const ConnectButton = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();

  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [{ data: accountData }] = useAccount();
  const [{ data: networkData }] = useNetwork();

  const [state, setState] = useState<{
    address?: string;
    error?: Error;
    loading?: boolean;
  }>({});
  const [, signMessage] = useSignMessage();

  const signIn = useCallback(async (connector) => {
    try {
      const res = await connect(connector); // connect from useConnect
      if (!res.data) throw res.error ?? new Error("Something went wrong");

      const nonceRes = await fetch("/api/nonce");
      const message = new SiweMessage({
        domain: window.location.host,
        address: res.data.account,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: res.data.chain?.id,
        nonce: await nonceRes.text(),
      });

      const signer = await connector.getSigner();
      const signature = await signer.signMessage(message.prepareMessage());

      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) throw new Error("Error verifying message");

      // It worked! User is signed in with Ethereum
    } catch (error) {
      // Do something with the error
    }
  }, []);

  // Fetch user when:
  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch("/api/me");
        const json = await res.json();
        setState((x) => ({ ...x, address: json.address }));
      } finally {
        setState((x) => ({ ...x, loading: false }));
      }
    };
    // 1. page loads
    (async () => await handler())();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-4">
        {connectData.connectors.map((x) => (
          <button
            disabled={isMounted ? !x.ready : false}
            key={x.id}
            onClick={() => signIn(x)}
            className="group flex h-20 flex-row items-center justify-between rounded-sm border px-8 py-8 text-black transition duration-300 ease-linear hover:border hover:border-[#FFC061]"
          >
            <p className="text-left">
              {isMounted ? x.name : x.id === "injected" ? x.id : x.name}
              {isMounted ? !x.ready && " (unsupported)" : ""}
            </p>
            <div className="absolute right-12 flex h-20 w-8 items-center justify-center rounded-r-sm bg-black/10 transition ease-linear group-hover:bg-primary">
              <BsChevronRight className="text-xs text-black/50" />
            </div>
          </button>
        ))}
      </div>
      {connectError && (
        <div className="w-full">
          <p className="text-red-600">
            {connectError?.message ?? "Failed to connect"}
          </p>
        </div>
      )}
    </>
  );
};

export default ConnectButton;
