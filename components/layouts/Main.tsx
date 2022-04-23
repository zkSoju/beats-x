import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Navbar from "../UI/Navbar";

const Main = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="mx-auto overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wagmi Starter</title>
      </Head>
      <NextSeo
        title="Wagmi Boilerplate"
        description="Wagmi Boiler"
        openGraph={{
          url: "",
          title: "Wagmi",
          description: "Wagmi",
        }}
        twitter={{ handle: "@wagmi" }}
      />
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
