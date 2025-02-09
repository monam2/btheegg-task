export default function Profile({
  name = "강창우",
}: {
  name?: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
      <img
        src="/profile.svg"
        alt="profile"
        className="w-[36px] h-[36px] rounded-full mr-1 sm:mr-2 md:mr-3"
      />
      <p className="text-sm font-pretendard-semi-bold text-gray-500 pr-5 sm:pr-6 md:pr-8">
        {name}님
      </p>
      <img
        src="/arrow.svg"
        alt="arrow"
        className="hidden sm:block"
      />
    </div>
  );
}
