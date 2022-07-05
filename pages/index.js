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
import Bitcoin from "../components/projects/Bitcoin";
import Kanban from "../components/projects/Kanban";
import StarBucks from "../components/projects/StarBucks";
import Moom from "../components/projects/Moom";
import Maiim from "../components/projects/Maiim";
import Flixnet from "../components/projects/Flixnet";
import Market from "../components/projects/Market";
import useMoveScroll from "../components/useMoveScroll";
import Projects from "../components/projects/Projects";

export default function Home() {
  const { element: ele, onMoveToElement: move } = useMoveScroll();
  const { element: ele1, onMoveToElement: move1 } = useMoveScroll();
  const { element: ele2, onMoveToElement: move2 } = useMoveScroll();
  const { element: ele3, onMoveToElement: move3 } = useMoveScroll();
  const { element: ele4, onMoveToElement: move4 } = useMoveScroll();
  return (
    <div className="relative">
      <Navbar
        move={move}
        move1={move1}
        move2={move2}
        move3={move3}
        move4={move4}
      />
      <div className="relative ">
        {/* Banner */}
        <article className="relative" ref={ele}>
          <div className="relative bg-black-rgba md:h-[500px]">
            <Image
              objectFit="cover"
              alt=""
              className="relative -z-10 h-[300px]"
              src={desk}
            ></Image>
          </div>
          <section className="absolute inset-x-0  left-1/2 top-1/2 h-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-black-rgba p-5 md:w-1/2">
            <span className="rounded-lg bg-blue-600 font-sans text-2xl font-bold text-blue-100 md:text-4xl">
              🔥안녕하세요 웹개발자 김재현입니다
            </span>
            <br />
            <br />

            <main className="font-sans font-semibold text-blue-100">
              남들과 <span className="text-blue-400">협업</span>하는 것을
              좋아하며, <span className="text-blue-400">소통</span>하는 것을
              좋아해 언제나{" "}
              <span className="text-blue-400">긍정적인 마인드</span>
              로 주변 사람에게 좋은 영향을 주기 위해 노력하는 사람입니다.
              <br />
              새로운 기술을 습득하는 것에 대한 거부감이 없고, 오히려{" "}
              <span className="text-blue-400">배움</span>을 즐기고 있습니다.
              <br />
              <br />
              <span className="border-b-[1px] border-solid border-red-300 italic">
                지금 보다 더 큰 프로젝트를 진행해 볼 수 있을 날을 꿈꾸며 열심히
                공부 중입니다.
              </span>
            </main>
          </section>
        </article>
        {/* About me */}
        <article className="bg-gray-50">
          <section className="mx-auto w-2/3  pb-20">
            <header
              className="pt-20 text-center text-4xl font-bold italic md:text-5xl"
              ref={ele1}
            >
              🔎 <span className="text-red-300">About</span> me
            </header>
            <div className="relative z-10 grid gap-2 pt-10 text-center text-2xl lg:grid-cols-3">
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg hover:bg-gray-300">
                <Person style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">이름</span>
                  <span className="font-sans text-xl font-bold text-gray-600">
                    김재현
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg hover:bg-gray-300">
                <Cake style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">
                    생년월일
                  </span>
                  <span className="font-sans text-xl font-semibold text-gray-600">
                    1990.02.01
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-lg hover:bg-gray-300">
                <Address style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">
                    주소지
                  </span>
                  <span className="font-sans text-xl font-semibold text-gray-600">
                    강원도 원주시
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl hover:bg-gray-300">
                <PhoneInTalk style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">
                    연락처
                  </span>
                  <span className="font-sans text-xl font-semibold text-gray-600">
                    010-9750-2278
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl hover:bg-gray-300">
                <Mail style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">
                    이메일
                  </span>
                  <span className="font-sans text-xl font-semibold text-gray-600">
                    mine6546@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-solid border-gray-50 px-10 py-5 shadow-xl hover:bg-gray-300">
                <School style={{ fontSize: "3rem" }} />
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-bold text-gray-400">학력</span>
                  <span className="font-sans text-xl font-semibold text-gray-600">
                    한라대학교 기계과
                  </span>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* Skills */}
        <article className="bg-yellow-100 pb-20">
          <section className="mx-auto w-2/3">
            <header
              className="py-20 text-center text-5xl font-bold italic "
              ref={ele2}
            >
              📖 <span className="text-yellow-500">S</span>kills
            </header>
            <div className="space-y-10 rounded-xl text-2xl font-bold italic ">
              <div className="gap-2 rounded-xl border-2 border-solid border-gray-50 bg-gray-50 py-5 shadow-xl ">
                <div className="py-5 pl-5">
                  <span className="text-red-600">L</span>anguage
                </div>
                <div className="flex flex-wrap justify-center gap-2 space-y-2 px-5 md:justify-start md:space-y-0 ">
                  <div className="flex justify-center border-2 border-solid py-1">
                    <Image alt="" src={html} width={190} height={100}></Image>
                  </div>
                  <div className="flex justify-center border-2 border-solid py-1">
                    <Image alt="" src={js} width={190} height={92}></Image>
                  </div>
                  <div className="flex justify-center border-2 border-solid py-1">
                    <Image alt="" src={css} width={190} height={90}></Image>
                  </div>
                  <div className="flex justify-center border-2 border-solid py-1">
                    <Image alt="" src={ty} width={190} height={90}></Image>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-2 border-solid border-gray-100 bg-gray-50 py-5 shadow-xl">
                <div className="py-5 pl-5">
                  <span className="text-blue-500">F</span>ramework
                  <span className="text-gray-500"> & </span>
                  <span className="text-green-500">L</span>ibrary
                </div>
                <div className="flex flex-wrap justify-center gap-2 px-5">
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
                    <Image
                      alt=""
                      src={tailwind}
                      width={190}
                      height={100}
                    ></Image>
                  </div>
                  <div className="flex border-2 border-solid">
                    <Image alt="" src={styled} width={190} height={100}></Image>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-2 border-solid border-gray-100 bg-gray-50 py-5 shadow-xl">
                <div className="py-5 pl-5">
                  <span className="text-teal-600">T</span>ools
                </div>
                <div className="flex flex-wrap justify-center gap-2 pl-5 md:justify-start">
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
          </section>
        </article>
        {/* Archiving */}
        <article className="mx-auto w-2/3 pb-20">
          <header
            className="py-20 text-center text-5xl font-bold italic"
            ref={ele3}
          >
            💼 <span className="text-green-600">A</span>rchiving
          </header>
          <div className="flex overflow-hidden rounded-xl border-2 border-solid p-5 md:mx-auto md:w-1/2">
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
        {/* Projects */}
        <article className="bg-blue-200 pb-20">
          <section className="mx-auto w-2/3">
            <header
              className="py-20 text-center text-5xl font-bold italic"
              ref={ele4}
            >
              📋 <span className="text-sky-500">P</span>rojects
            </header>
            <section className="space-y-20 ">
              <Projects />
              <Market />
              <Flixnet />
              <Maiim />
              <Kanban />
              <Bitcoin />
              <StarBucks />
              <Moom />
            </section>
          </section>
        </article>
      </div>
    </div>
  );
}
