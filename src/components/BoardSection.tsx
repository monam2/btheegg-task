import { useState } from "react";
import Card from "@/components/common/card/Card";
import EmptyCard from "@/components/common/emptyCard/EmptyCard";
import AddButton from "@/components/common/addButton/AddButton";
import CountIcon from "@/components/common/countIcon/CountIcon";
import Modal from "@/components/common/modal/Modal";
import { CardProps } from "@/types";

interface BoardSectionProps {
  title: string;
  count?: number;
  cards?: CardProps[];
  onAddCard: (
    title: string,
    content: string,
    tagText: string,
    tagColor: string,
  ) => void;
}

export default function BoardSection({
  title,
  count,
  cards,
  onAddCard,
  onMoveCard,
}: BoardSectionProps & {
  onMoveCard: (
    fromSection: string,
    toSection: string,
    fromIndex: number,
    toIndex: number,
  ) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (
    content: string,
    tagText: string,
    tagColor: string,
  ) => {
    onAddCard(title, content, tagText, tagColor);
    setIsModalOpen(false);
  };

  const handleDragStart = (
    e: React.DragEvent,
    cardIndex: number,
  ) => {
    e.dataTransfer.setData(
      "text/plain",
      cardIndex.toString(),
    );
    e.dataTransfer.setData("section", title);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent,
    index: number,
  ) => {
    const fromIndex = parseInt(
      e.dataTransfer.getData("text/plain"),
      10,
    );
    const fromSection = e.dataTransfer.getData("section");
    onMoveCard(fromSection, title, fromIndex, index);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-500">
            {title}
          </h2>
          {count !== undefined && (
            <CountIcon count={count} />
          )}
        </div>
        <AddButton onClick={() => setIsModalOpen(true)} />
      </div>
      {cards && cards.length > 0 ? (
        cards.map((card, index) => (
          <Card
            key={index}
            content={card.content}
            tag={card.tag}
            tagColor={card.tagColor}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          />
        ))
      ) : (
        <EmptyCard onAddCard={handleAddCard} />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCard}
      />
    </div>
  );
}
