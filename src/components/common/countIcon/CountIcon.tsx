export default function CountIcon({
  count,
}: {
  count: number;
}) {
  return (
    <div className="w-[28px] h-[28px] bg-add-button-bg rounded-full flex justify-center items-center">
      <p className="text-sm font-pretendard-semi-bold text-gray-200">
        {count}
      </p>
    </div>
  );
}
