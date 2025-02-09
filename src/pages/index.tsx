import BoardContent from "@/components/BoardContent";
import Header from "@/components/Header/Header";

const PROJECT_TITLE = "Project No.1";

export default function Main() {
  return (
    <div className="w-full min-h-screen bg-background gap-16 flex flex-col items-center">
      <Header />
      <div className="w-full h-full flex flex-col gap-8 px-4 justify-center items-center">
        <BoardHeader />
        <BoardContent />
      </div>
    </div>
  );
}

export function BoardHeader() {
  return (
    <div className="w-full max-w-[900px] h-full flex flex-col lg:px-12 md:px-12 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-500">
        {PROJECT_TITLE}
      </h1>
    </div>
  );
}
