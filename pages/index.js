import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

import desk from "../public/desk.jpg";
import ty from "../public/typescript.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import next from "../public/next.png";
import recoil from "../public/recoil.png";
import styled from "../public/styled.jpg";
import tailwind from "../public/tailwind.jpg";
import git from "../public/git.png";
import github from "../public/github.png";
import html from "../public/html.png";
import js from "../public/js.png";
import css from "../public/css.jpg";
import aws from "../public/aws.png";
import netlify from "../public/netlify.png";
import notion from "../public/notion.png";
import {
  Person,
  Cake,
  Home as Address,
  PhoneInTalk,
  Mail,
  School,
} from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Bitcoin from "../components/Bitcoin";
import Kanban from "../components/Kanban";
import StarBucks from "../components/StarBucks";
import Moom from "../components/Moom";
import Maiim from "../components/Maiim";
import Flixnet from "../components/Flixnet";
import Market from "../components/Market";
import useMoveScroll from "../components/useMoveScroll";

export default function Home() {
  const { element: ele, onMoveToElement: move } = useMoveScroll();
  const { element: ele1, onMoveToElement: move1 } = useMoveScroll();
  const { element: ele2, onMoveToElement: move2 } = useMoveScroll();
  const { element: ele3, onMoveToElement: move3 } = useMoveScroll();
  const { element: ele4, onMoveToElement: move4 } = useMoveScroll();
  const { element: ele5, onMoveToElement: move5 } = useMoveScroll();
  return (
    <div>
      <Navbar
        move={move}
        move1={move1}
        move2={move2}
        move3={move3}
        move4={move4}
      />
      <article ref={ele}>
        <Image
          alt=""
          className="-z-10"
          src={desk}
          width={2000}
          height={570}
        ></Image>
      </article>
      <article className="mx-auto w-2/3">
        <header
          className="pt-20 text-center text-5xl font-bold italic"
          ref={ele1}
        >
          🔎 About me
        </header>
        <div className="grid grid-cols-3 gap-2 pt-10 text-center text-2xl">
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg">
            <Person style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">이름</span>
              <span className="text-xl font-semibold">김재현</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg">
            <Cake style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">생년월일</span>
              <span className="text-xl font-semibold">1990.02.01</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg">
            <Address style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">주소지</span>
              <span className="text-xl font-semibold">강원도 원주시</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl">
            <PhoneInTalk style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">연락처</span>
              <span className="text-xl font-semibold">010-9750-2278</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl">
            <Mail style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">이메일</span>
              <span className="text-xl font-semibold">mine6546@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl">
            <School style={{ fontSize: "3rem" }} />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-gray-500">학력</span>
              <span className="text-xl font-semibold">한라대학교 기계과</span>
            </div>
          </div>
        </div>
      </article>
      <article className="mx-auto w-2/3">
        <header
          className="py-20 text-center text-5xl font-bold italic"
          ref={ele2}
        >
          📖 Skills
        </header>
        <div className="space-y-10 rounded-xl text-2xl font-bold italic">
          <div className="gap-2 rounded-xl border-2 border-solid border-gray-50 py-5 shadow-md">
            <div className="py-5 pl-5">
              <span className="text-red-600">L</span>anguage
            </div>
            <div className="flex justify-start gap-2 pl-5">
              <div className="border-2 border-solid py-1">
                <Image alt="" src={html} width={190} height={100}></Image>
              </div>
              <div className="border-2 border-solid py-1">
                <Image alt="" src={js} width={190} height={92}></Image>
              </div>
              <div className="flex items-center justify-center border-2 border-solid py-1">
                <div className="w-4/5">
                  <Image alt="" src={css} width={190} height={90}></Image>
                </div>
              </div>
              <div className="border-2 border-solid py-1">
                <Image alt="" src={ty} width={190} height={90}></Image>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-2 border-solid border-gray-100 py-5 shadow-xl">
            <div className="py-5 pl-5">
              <span className="text-blue-500">F</span>ramework
              <span className="text-gray-500"> & </span>
              <span className="text-green-500">L</span>ibrary
            </div>
            <div className="flex flex-wrap justify-start gap-2 pl-5">
              <div className="border-2 border-solid">
                <Image alt="" src={next} width={190} height={100}></Image>
              </div>
              <div className="border-2 border-solid">
                <Image alt="" src={react} width={190} height={100}></Image>
              </div>
              <div className="border-2 border-solid">
                <Image alt="" src={redux} width={190} height={100}></Image>
              </div>
              <div className="border-2 border-solid">
                <Image alt="" src={recoil} width={190} height={100}></Image>
              </div>
              <div className="border-2 border-solid">
                <Image alt="" src={tailwind} width={190} height={100}></Image>
              </div>
              <div className="flex border-2 border-solid">
                <Image alt="" src={styled} width={190} height={100}></Image>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-2 border-solid border-gray-100 py-5 shadow-xl">
            <div className="py-5 pl-5">
              <span className="text-teal-600">T</span>ools
            </div>
            <div className="flex flex-wrap justify-start gap-2 pl-5">
              <div className=" border-2  border-solid py-2">
                <Image alt="" src={git} width={190} height={85}></Image>
              </div>
              <div className=" border-2  border-solid py-2">
                <Image alt="" src={github} width={190} height={85}></Image>
              </div>
              <div className=" border-2  border-solid py-2">
                <Image alt="" src={aws} width={190} height={85}></Image>
              </div>
              <div className=" border-2  border-solid py-2">
                <Image alt="" src={netlify} width={190} height={85}></Image>
              </div>
              <div className=" border-2  border-solid py-2">
                <Image alt="" src={notion} width={190} height={85}></Image>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="mx-auto w-2/3 pt-20">
        <header
          className="py-20 text-center text-5xl font-bold italic"
          ref={ele3}
        >
          💼 Archiving
        </header>
        <div className="mx-auto flex w-1/2 rounded-xl border-2 border-solid py-5">
          <Image alt="" src={github}></Image>
          <div className="">
            <a
              className="text-blue-500"
              href="https://github.com/kirk0201"
              target="_blank"
              rel="noreferrer"
            >
              github.com/kirk0201
            </a>
            <p className="pt-10 font-semibold">
              혼자서 코딩을 연습하며 만든 프로젝트와 학습을 위한 문서들이
              담겨있습니다.
            </p>
          </div>
        </div>
      </article>
      <article className="mx-auto w-2/3 pt-20">
        <header
          className="py-20 text-center text-5xl font-bold italic"
          ref={ele4}
        >
          📋 Projects
        </header>
        <section className="space-y-20">
          <Market />
          <Flixnet />
          <Maiim />
          <Kanban />
          <Bitcoin />
          <StarBucks />
          <Moom />
        </section>
      </article>
    </div>
  );
}
