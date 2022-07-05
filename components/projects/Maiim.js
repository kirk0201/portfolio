import Slide from "../Slide";
import Summary from "../Summary";

export default function Maiim() {
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-4xl font-bold text-gray-600 md:text-[3rem]">
        Maiim
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.4 2인 프로젝트<div className="font-bold text-red-400">진행 중</div>
      </div>
      <article className="gap-10 py-5 px-10 md:grid md:grid-cols-2">
        <section>
          <Slide img1="/maiim1.gif" img2="/maiim2.gif" img3="/maiim3.gif" />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              어머니가 운영하시는 마임화장품 학성지사 웹페이지 입니다.
            </article>
            <br />
            <header className="text-bold  text-lg italic text-gray-400">
              🎙️설명
            </header>
            <article>
              동생과 첫 협업으로 진행 중인 프로젝트 입니다. 저는 프론트엔드를
              동생은 백엔드 영역을 맡았습니다.
              <br /> 비록 미완성이지만 어머니께서 실제 웹페이지를 운용하실것을
              염두하여 UI&UX를 효율적으로 하면서 애니메이션을 적절히 사용하여
              시각적 효과를 주기 위해 노력하였습니다. <br />
              <span className="text-blue-400">
                처음으로 PC, Tablet, Mobile 등 모든 기기에서 가능한 반응형 웹
              </span>
              으로 구현해보면서 레이아웃 배치에 대해 많은 부분을 고민해볼 수
              있던 경험이었습니다.
              <br />또 제품의 홍보 효과를 위한 배너 슬라이드 기능을
              만들어봄으로써 디자인적인 부분을 많이 생각해 볼 수 있던
              프로젝트입니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="PC, Tablet, Mobile 모두를 지원하는 반응형 웹으로 구성, 실제 운영중인 화장품회사에 광고 효과를 극대화를 위해 배너 활용"
            />
            <Summary
              fn="GitHub"
              url="https://github.com/kirk0201/maiim_client"
            />
            <Summary fn="URL" url="https://maiim.netlify.app/" />
            <Summary fn="SKILLS" content="Next, Styled-components, Swiper" />
            <Summary fn="Deployment" content="Netlify" />
          </section>
        </section>
      </article>
    </div>
  );
}
