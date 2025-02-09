import { useState } from "react";

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (sectionTitle: string) => void;
}

export default function SectionModal({
  isOpen,
  onClose,
  onSave,
}: SectionModalProps) {
  const [sectionTitle, setSectionTitle] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          새로운 섹션 추가
        </h2>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="섹션 이름을 입력하세요"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />
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
              onSave(sectionTitle);
              onClose();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
