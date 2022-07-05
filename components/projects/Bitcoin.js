import Slide from "../Slide";
import Summary from "../Summary";

export default function Bitcoin() {
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 bg-white shadow-xl">
      <header className="py-5 text-center text-4xl font-bold text-gray-600 md:text-[3rem]">
        비트코인트래커
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.02 개인 토이 프로젝트
      </div>
      <article className="gap-10 py-5 px-10 md:grid md:grid-cols-2">
        <section>
          <Slide img1="/coin1.gif" img2="/coin2.gif" img3="/coin3.gif" />
        </section>
        <section>
          <section className="font-semibold">
            <header className="text-bold  text-lg italic text-gray-400">
              📣소개
            </header>
            <article>
              Coinpaprika에서 제공하는 API를 이용하여 코인 시가총액 순위에 따라
              나열하여 선택한{" "}
              <span className="text-blue-400">코인에 대한 최신 동향</span>을
              살펴볼 수 있는 프로젝트입니다.
            </article>
            <br />
            <article>
              <header className="text-bold  text-lg italic text-gray-400">
                🎙️설명
              </header>
              Apexchart를 이용하여 처음으로 캔들스틱 차트를 만들어보면서
              데이터를 이용하여 시각화하는데 익숙해지는 시간이었습니다.
              <br /> 다크모드 기능 또한 처음 개발하게 되어 UI/UX 측면에서 다시
              한번 고민해볼 수 있던 시간이었습니다.
              <br />
              <br />
              <div className="text-sm italic text-gray-400">
                🌧️Coinpaprika 서비스가 유료화 되면서 그래프를 만드는 기간
                데이터를 주던 OHLC API가 하루동안의 데이터만 가능하여 그래프를
                그릴수가 없어 고정된 데이터로 바꿔서{" "}
                <span className="text-red-400">
                  실제와 차트 데이터는 다르지만
                </span>{" "}
                다른 데이터는 올바른 정보입니다.
              </div>
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
              fn="SKILLS"
              content="React, Typescript, Recoil, ApexChart, ReactQuery, Styled-Components"
            />
            <Summary fn="Deployment" content="gh-pages" />
          </section>
        </section>
      </article>
    </div>
  );
}
