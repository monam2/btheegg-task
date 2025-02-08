import Profile from "../common/Profile/Profile";

export default function Header() {
  return (
    <div className="w-full h-[88px] bg-white flex justify-center items-center">
      <div className="w-full px-6 sm:px-24 flex justify-between items-center gap-2 transition-all duration-100">
        <Logo />
        <Profile />
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <img
      src="/logo.svg"
      alt="logo"
      className="w-[140px] cursor-pointer"
    />
  );
};
