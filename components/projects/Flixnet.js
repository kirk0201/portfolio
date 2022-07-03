import Slide from "../Slide";
import Summary from "../Summary";

export default function Flixnet() {
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-[3rem] font-bold text-gray-600">
        FLIXNET
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.4 개인 프로젝트
      </div>
      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>
          <Slide
            img1="/flixnet1.gif"
            img2="/flixnet2.gif"
            img3="/flixnet3.gif"
          />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              넷플릭스 서비스의 테마를 오마주하여 영화 API를 이용한{" "}
              <span className="text-blue-400">
                영화정보와 소개 및 예고편을 제공
              </span>
              하는 웹서비스입니다.
            </article>
            <br />
            <header className="text-bold  text-lg italic text-gray-400">
              🎙️설명
            </header>
            <article>
              Framer-motion이라는 애니메이션 라이브러리를 이용하여 시각적 효과에
              힘을 주어
              <span className="text-blue-400">생동감 있는 웹페이지</span>를
              제작하기 위해 노력했습니다.
              <br />
              Gradient를 사용하여 이미지와 Navbar 배경 색상이 다른 요소들과
              자연스럽게 어울리는 효과를 만들어 보았고, React-player를 사용하여
              처음으로 웹페이지에서
              <span className="text-blue-400">동영상을 재생</span>할 수 있게
              만들어보았고, 더 자세한 영화 정보를 얻기 위해 영화를 선택할 때,
              나타나는 설명창을 Modal 창으로 구현하여 시각적으로 효과를
              주었습니다.
              <br />
              시각적인 효과를 위해 애니메이션을 많이 사용하게 되어 레이아웃이
              어긋나는 것을 바로 잡기 위해 Refactor 작업을 하는 게 가장 힘들었던
              기억이 있습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="최신 영화 정보 및 예고편 시청이 가능하고 다양한 애니메이션 효과로 생동감 있는 웹페이지 구현"
            />
            <Summary fn="GitHub" url="https://github.com/kirk0201/movie-app" />
            <Summary fn="URL" url="https://kirk0201.github.io/movie-app/" />
            <Summary
              fn="SKILLS"
              content="Typescript, Recoil, Styled-components, Framer-motion"
            />
            <Summary fn="Deployment" content="gh-pages" />
          </section>
        </section>
      </article>
    </div>
  );
}
