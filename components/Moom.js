import Summary from "./Summary";

export default function Moom() {
  return (
    <div className="border-2 border-solid">
      <header className="py-5 text-center text-2xl font-semibold">m00m</header>
      <p className="text-center text-sm text-gray-400">
        20.11~20.12 4인 프로젝트
      </p>
      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>사진</section>
        <section>
          <section className="font-semibold">
            <article>
              날짜별로 변화하는 나의 신체 사이즈를 작성하여 시간에 따라 변화
              중인 나의 신체 변화를 그래프를 통해 한눈에 알아볼 수 있는
              웹서비스입니다.
            </article>
            <br />
            <article>
              제가 수료한 Codestates에서 마지막 프로젝트로 진행하였습니다. 저는
              프론트엔드를 맡았으며 제가 작성한 주요 기능으로는 회원가입과
              마이페이지를 작성하고 비로그인시 웹을 체험할 수 있는 페이지를
              작성하여 체험 기능을 구현하였습니다. 처음으로 데이터를 시각화하기
              위해 그래프 라이브러리인 Highcharts를 이용하였습니다.
              <br />
              웹페이지 배포를 제가 하게되어 AWS를 이용하여 첫 배포를 해봄과
              동시에 EC2, S3, RDS를 좀 더 깊이 공부할 수 있었고, 서버 배포를
              위해 Certbot과 Nginx를 이용하여 인증서로 HTTPS 인증을 받는것을
              연습할 수 있었습니다.
              <br />
              <br />
              <p className="text-sm italic text-gray-400">
                🌧️현재 AWS프리티어 기간이 끝나 지나친 과금으로 인해 부득이하게
                서버를 내렸습니다.
              </p>
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="사이즈 단위 변환 기능 및 신체 사이즈를 날짜별로 추가 제거 수정을 이용하여 시각화된 신체사이즈를 한눈에 파악 가능"
            />
            <Summary
              fn="GitHub"
              url="https://github.com/codestates/moom_client/wiki"
              urls="https://github.com/kirk0201/moom_client"
            />
            <Summary
              fn="NOTION WIKI"
              url="https://gilded-silence-f0d.notion.site/Ruler-m00m-77fc3425651d4d6e8ddaa0b8a344882f"
            />
            <Summary
              fn="SKILL"
              content="React, TailwindCSS, ContextAPI, Scrollmagic"
            />
            <Summary fn="Deployment" content="AWS" />
          </section>
        </section>
      </article>
    </div>
  );
}
