import { useState } from "react";
import AddButton from "../addButton/AddButton";
import Modal from "../modal/Modal";

export default function EmptyCard({
  onAddCard,
}: {
  onAddCard: (
    content: string,
    tagText: string,
    tagColor: string,
  ) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-[200px] h-[130px] flex flex-col justify-center items-center gap-2 bg-add-button-bg rounded-lg p-4 cursor-pointer shadow-md"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="text-sm font-pretendard-regular text-gray-100">
          지금 바로 추가해보세요.
        </p>
        <AddButton />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onAddCard}
      />
    </>
  );
}
