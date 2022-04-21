import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>AI BOX</title>
        <link rel="icon" href={"/logo.svg"} />
      </Head>

      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
