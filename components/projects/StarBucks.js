import Slide from "../Slide";
import Summary from "../Summary";

export default function StarBucks() {
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-[3rem] font-bold text-gray-600">
        스타벅스 클론 코딩
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.01 개인 프로젝트
      </div>
      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>
          <Slide img1="/starbucks1.gif" img2="/starbucks2.gif" />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              Vanilla JS를 이용하여 스타벅스 웹페이지를 클론 코딩을 하였습니다.
            </article>
            <br />
            <header className="text-bold  text-lg italic text-gray-400">
              🎙️설명
            </header>
            <article>
              <span className="text-blue-400">React를 이용하지 않고</span> CSS와
              JS를 이용하여 웹페이지를 제작하면서,
              <span className="text-blue-400">React의 캡슐화된 컴포넌트</span>를
              이용하여 코드 가독성과 반복을 줄이는 것이 얼마나 효율적이고
              중요한지 느낄 수 있었습니다. <br />
              그동안 느껴보지 못했던 CSS in JS가 CSS 생산성에서 얼마나
              효과적인지 느낄수 있던 프로젝트였습니다.
              <br />
              이미지가 나타나는 시간을 바꿔 애니메이션 효과를 주거나, 특정
              스크롤 위치에서 나타나거나 사라지는 배너 효과가 웹페이지에서
              미적인 요소에서 얼마나 큰 효과를 줄 수 있는지 느낄수 있었습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="React를 사용하지 않고 스타벅스 웹페이지를 클론 코딩하여 Vanilla JS와 CSS를 연습"
            />
            <Summary
              fn="GitHub"
              url="https://github.com/kirk0201/starbucks_clone"
            />
            <Summary
              fn="URL"
              url="https://compassionate-dubinsky-6a8bc2.netlify.app/"
            />
            <Summary
              fn="SKILLS"
              content="Vanilla JS, Swiper, Gsap, Scrollmagic"
            />
            <Summary fn="Deployment" content="Netlify" />
          </section>
        </section>
      </article>
    </div>
  );
}
