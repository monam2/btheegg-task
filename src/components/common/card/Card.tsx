interface CardProps {
  content: string;
  tag?: string;
  tagColor?: string;
}

export default function Card({ content, tag, tagColor }: CardProps) {
  return (
    <div className="w-[200px] bg-white rounded-lg p-4">
      {tag && (
        <div
          className="inline-block px-3 pl-4 py-1 rounded-lg text-white font-pretendard-semi-bold text-sm mb-2"
          style={{
            backgroundColor: `var(--color-tag-bg-${tagColor})`,
          }}
        >
          <p style={{ color: `var(--color-tag-text-${tagColor})` }}>{tag}</p>
        </div>
      )}
      <p className="text-sm text-black">{content}</p>
    </div>
  );
}
