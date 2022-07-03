import Slide from "./Slide";
import Summary from "./Summary";

export default function Kanban() {
  return (
    <div className="border-2 border-solid">
      <header className="py-5 text-center text-2xl font-semibold">
        KANBAN보드
      </header>
      <div className="text-center text-sm text-gray-400">
        2022.03 개인 토이 프로젝트
      </div>
      <article className="grid grid-cols-2 gap-10 py-5 px-10">
        <section>
          <Slide
            img1="/kanban1.gif"
            img2="/kanban2.gif"
            img3="/kanban3.gif"
            img4="/kanban4.gif"
          />
        </section>
        <section>
          <section className="font-semibold">
            <article>
              협업툴에서 자주보이는 이동가능한 KANBAN보드를 Drag and Drop으로
              보드를 재구성 할 수 있는 보드입니다. 보드명을 적어서 새로운 보드를
              추가하고 마우스 드래그를 통해 보드의 순서를 바꿀수 있습니다.
              쓰레기통으로 보드를 드래그하여 삭제시킬 수 있습니다.
            </article>
            <br />
            <article>
              React-beautiful-dnd 라이브러리를 이용하여 이동가능한 To-Do
              리스트를 만들어보았습니다. 해당 라이브러리는 마우스 클릭이나
              드래그 같은 이벤트마다 쉽게 핸들링이 가능하여 보드를 드래그시
              쓰레기통 문구가 강조되는 효과를 주었습니다. <br />
              보드안에 ToDo를 다른 보드로 옮기는 기능을 구현하면서, ToDo 이동을
              위한 조건을 추가하고 이동이 완료된 새로운 객체를 리턴하는 코드를
              작성하는 과정에서 중첩된 보드안에서 순수 함수를 리턴하기 위해
              immutable한 함수들을 이용하는 과정이 많이 어려웠던 기억이
              있습니다.
            </article>
            <br />
          </section>
          <div className="border-t-[1px] border-solid border-gray-400"></div>
          <br />
          <section>
            <Summary
              fn="주요기능"
              content="보드를 Drag and Drop으로 이동하여 순서를 바꿀 수 있고, 보드안에 Todo를 서로 다른 보드간 이동 가능"
            />
            <Summary
              fn="GitHub"
              url="https://github.com/kirk0201/react-kanban"
            />
            <Summary
              fn="URL"
              url="https://jocular-crostata-bb41db.netlify.app/"
            />
            <Summary
              fn="SKILL"
              content="React, Typescript, Recoil, React-beautiful-dnd, React-hook-form, Styled-Components"
            />
            <Summary fn="Deployment" content="Netlify" />
          </section>
        </section>
      </article>
    </div>
  );
}
