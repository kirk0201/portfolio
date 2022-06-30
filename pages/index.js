import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import desk from "../public/desk.jpg";
export default function Home() {
  return (
    <div>
      <Navbar />
      <article>
        <Image className="-z-10" src={desk} width={2000} height={600}></Image>
      </article>
      <article>
        <div>About me</div>
      </article>
    </div>
  );
}
