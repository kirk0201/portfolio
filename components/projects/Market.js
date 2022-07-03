import Slide from "../Slide";
import Summary from "../Summary";

export default function Market() {
  return (
    <div className="rounded-xl border-2  border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-[3rem] font-bold text-gray-600">
        우리동네 마켓
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.5 개인 프로젝트 <span className="text-blue-400">풀스택</span>
        <div className="font-semibold text-red-500">진행 중</div>
      </div>

      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>
          <Slide img1="/market1.gif" img2="/market2.gif" img3="/market3.gif" />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              당근마켓 디자인을 오마주 하여 다양한 커뮤니티와 채팅, 거래가
              가능한 플랫폼 입니다.
            </article>
            <br />
            <header className="text-bold  text-lg italic text-gray-400">
              🎙️설명
            </header>
            <article>
              다양한 기능을 복합적으로 사용해볼 수 있고, 현업에서 자주 쓰일 만한
              스킬을 연습할 기회라고 생각하여 플랫폼 서비스를 선택하게
              되었습니다.
              <br />더 나아가 Next를 이용하여 홀로{" "}
              <span className="text-blue-400">풀 스택 개발을 도전</span>하기
              위해 시작한 프로젝트입니다. <br />
              Next에서 자체 서버를 구현하여 그동안 사용해보지 못한 SendGrid나
              Twilio 같은 서비스를 활용하여 유저가 회원가입 시 보안 문자를
              보내거나, 메일을 보내는 기능도 추가하고 있습니다.
              <br /> CSS는 Tailwindcss를 사용하여 구성하였고,
              <br />
              DB는 Prisma ORM을 사용하여 복잡한 SQL문을 작성하지 않고 쉽게 DB에
              접근하고 있습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="유저간 커뮤니티를 이용해 거래와 채팅이 가능한 플랫폼"
            />
            <Summary fn="GitHub" url="https://github.com/kirk0201/market" />
            <Summary fn="URL" url="https://market-five-nu.vercel.app/" />
            <Summary
              fn="SKILLS"
              content="Next, Typescript, TailwindCSS, Prisma"
            />
            <Summary fn="Deployment" content="vercel" />
          </section>
        </section>
      </article>
    </div>
  );
}
