import Image from "next/image";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Trynow from "./components/Trynow";

export default function Home() {
  return (
    <div>
      <Header>
      </Header>
     <HomePage />
     <Trynow />
    </div>
  );
}

