import Slide from "../Slide";
import Summary from "../Summary";

export default function Projects() {
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-4xl font-bold text-gray-600 md:text-[3rem]">
        포트폴리오
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.07 개인 프로젝트
      </div>
      <article className="gap-10 py-5 px-10 md:grid md:grid-cols-2 ">
        <section>
          <Slide img1="/portfolio1.gif" img2="/portfolio2.gif" />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              저의 포트폴리오를 표현하기 위해 웹페이지를 만들게 되었습니다.
            </article>
            <br />
            <header className="text-bold  text-lg italic text-gray-400">
              🎙️설명
            </header>
            <article>
              빠른 생산성을 위해 Next와 TailwindCSS를 이용하였고 프로젝트
              이미지는 Swiper라이브러리를 이용하여 디자인 하였습니다. 전체적인
              구조를 <span className="text-blue-400">SementicTag로 구성</span>
              하여 효율적인 가독성을 위해 노력하였습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="포트폴리오 웹페이지를 통해 나의 대한 정보를 시각적으로 표현한다"
            />
            <Summary
              className="mx-auto"
              fn="GitHub"
              url="github.com/kirk0201/portfolio"
            />
            <Summary fn="URL" url="https://portfolio-kjh.vercel.app/" />
            <Summary fn="SKILLS" content="NextJS, TailwindCSS, Swiper" />
            <Summary fn="Deployment" content="vercel" />
          </section>
        </section>
      </article>
    </div>
  );
}
