export interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col items-center gap-[25px]">
      <p className="font-bol text-4xl text-gray-1 leading-[56px]">{title}</p>
      <div className="h-[2px] w-[56px] bg-gray-1 flex-shrink-0 rounded-md" />
    </div>
  );
}
