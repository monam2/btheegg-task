import AddButton from "../addButton/AddButton";

export default function EmptyCard() {
  return (
    <div className="w-[200px] h-[130px] flex flex-col justify-center items-center gap-2 bg-none-card rounded-lg p-4 cursor-pointer">
      <p className="text-sm font-pretendard-regular text-gray-100">
        지금 바로 추가해보세요.
      </p>
      <AddButton />
    </div>
  );
}
