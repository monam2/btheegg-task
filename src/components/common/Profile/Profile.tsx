export default function Profile({ name = "홍길동" }: { name?: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/profile.svg"
        alt="profile"
        className="w-[36px] h-[36px] rounded-full mr-1"
      />
      <p className="text-sm font-pretendard-semi-bold text-gray-500 pr-5">
        {name}님
      </p>
      <img src="/arrow.svg" alt="arrow" />
    </div>
  );
}
