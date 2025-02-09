import BoardSection from "@/components/BoardSection";
import { useState } from "react";
import SectionModal from "@/components/SectionModal";

const mockData = [
  {
    title: "시작 전",
    cards: [],
  },
  {
    title: "진행 중",
    cards: [
      {
        content:
          "회원의 블랙리스트로 지정할 수 있는 기능을 작업합니다.",
        tag: "관련작업",
        tagColor: "1",
      },
    ],
  },
  {
    title: "완료",
    cards: [
      {
        content:
          "장바구니에 상품을 추가하고 수정, 삭제하는 기능이 포함된 컴포넌트를 제작합니다.",
        tag: "사용자화면",
        tagColor: "2",
      },
      {
        content: "디자인시스템 2.1 버전로그를 작성합니다.",
        tag: "문서화",
        tagColor: "4",
      },
    ],
  },
];

export default function BoardContent() {
  const [sections, setSections] = useState(mockData);

  const addCardToSection = (
    sectionTitle: string,
    content: string,
    tagText: string,
    tagColor: string,
  ) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.title === sectionTitle
          ? {
              ...section,
              cards: [
                { content, tag: tagText, tagColor },
                ...section.cards,
              ],
            }
          : section,
      ),
    );
  };

  const addSection = (sectionTitle: string) => {
    setSections((prevSections) => [
      ...prevSections,
      { title: sectionTitle, cards: [] },
    ]);
  };

  const moveCard = (
    fromSection: string,
    toSection: string,
    fromIndex: number,
    toIndex: number,
  ) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      const fromSectionIndex = newSections.findIndex(
        (section) => section.title === fromSection,
      );
      const toSectionIndex = newSections.findIndex(
        (section) => section.title === toSection,
      );

      if (fromSectionIndex === -1 || toSectionIndex === -1)
        return newSections;

      const [movedCard] = newSections[
        fromSectionIndex
      ].cards.splice(fromIndex, 1);
      newSections[toSectionIndex].cards.splice(
        toIndex,
        0,
        movedCard,
      );

      return newSections;
    });
  };

  return (
    <div className="h-full flex gap-6 flex-wrap">
      {sections.map((section) => (
        <BoardSection
          key={section.title}
          title={section.title}
          count={section.cards.length}
          cards={section.cards}
          onAddCard={addCardToSection}
          onMoveCard={moveCard}
        />
      ))}
      <AddListButton onAddSection={addSection} />
    </div>
  );
}

function AddListButton({
  onAddSection,
}: {
  onAddSection: (sectionTitle: string) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="h-[28px] bg-add-button-bg text-gray-100 rounded-lg flex items-center justify-center px-3 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="text-sm font-pretendard-regular">
          + Add another list
        </p>
      </div>
      <SectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onAddSection}
      />
    </>
  );
}
