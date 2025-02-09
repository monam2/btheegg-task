interface AddButtonProps {
  onClick?: () => void;
}

export default function AddButton({
  onClick,
}: AddButtonProps) {
  return (
    <div
      className="w-[40px] h-[28px] bg-add-button-bg text-add-button-text rounded-2xl flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src="/plus.svg"
        alt="plus"
        width={12}
        height={12}
        className="m-auto mt-2"
      />
    </div>
  );
}
