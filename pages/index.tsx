import Footer from "@components/Footer";
import GiftCard from "@components/GiftCard";
import Header from "@components/Header";
import Landing from "@components/Landing";
import CustomHead from "@elements/Common/Head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[#24252D]">
      <CustomHead/>
      <Header/>
      <Landing/>
      <GiftCard/>
      <Footer/>
    </div>
  );
};

export default Home;
