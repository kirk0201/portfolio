import Summary from "./Summary";

export default function Projects() {
  return (
    <div className="border-2 border-solid">
      <header className="py-5 text-center text-2xl font-semibold">
        비트코인트래커
      </header>
      <div className="text-center">2022.02 개인 프로젝트</div>
      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>사진</section>
        <section>
          <section className="font-semibold">
            <article>
              Coinpaprika에서 제공하는 API를 이용하여 코인 시가총액 순위에 따라
              나열하여 선택한 코인에 대한 최신 동향을 살펴볼 수 있는
              프로젝트입니다.
            </article>
            <br />
            <article>
              Apexchart를 이용하여 처음으로 캔들스틱 차트를 만들어보면서
              데이터를 이용하여 시각화하는데 익숙해지는 시간이었습니다. 다크모드
              기능 또한 처음 개발하게 되어 UI/UX적 측면에서 다시 한번 고민해볼
              수 있던 시간이었습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="Coin API를 이용하여 실시간 시세 변동 파악 및 데이터 시각화, 다크모드"
            />
            <Summary fn="GitHub" url="https://github.com/kirk0201/coin_info" />
            <Summary fn="URL" url="https://kirk0201.github.io/coin_info/" />
            <Summary
              fn="SKILL"
              content="React, Typescript, Recoil, ApexChart, ReactQuery, Styled-Components"
            />
            <Summary fn="Deployment" content="gh-pages" />
          </section>
        </section>
      </article>
    </div>
  );
}
