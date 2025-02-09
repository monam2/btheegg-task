import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    content: string,
    tagText: string,
    tagColor: string,
  ) => void;
}

const tagColors = [
  { name: "주황", value: "1" },
  { name: "노랑", value: "2" },
  { name: "초록", value: "3" },
  { name: "파랑", value: "4" },
  { name: "보라", value: "5" },
  { name: "회색", value: "6" },
  { name: "빨강", value: "7" },
];

export default function Modal({
  isOpen,
  onClose,
  onSave,
}: ModalProps) {
  const [content, setContent] = useState("");
  const [tagColor, setTagColor] = useState("1");
  const [tagText, setTagText] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h2 className="text-lg font-bold mb-4">
          새로운 카드 추가
        </h2>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="태그 내용을 입력하세요"
          value={tagText}
          onChange={(e) => setTagText(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="카드 내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded mb-4"
          value={tagColor}
          onChange={(e) => setTagColor(e.target.value)}
        >
          {tagColors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-100 rounded"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              onSave(content, tagText, tagColor);
              onClose();
            }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
