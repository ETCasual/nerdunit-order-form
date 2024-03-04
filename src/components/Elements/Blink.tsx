export const Blink = () => {
  return (
    <>
      <div className="absolute -top-1.5 left-[107%] h-[7px] w-[7px] rounded-full bg-red-500"></div>
      <div className="absolute -top-1.5 left-[107%] h-[7px] w-[7px] animate-ping rounded-full bg-red-500" />
    </>
  );
};
