/* eslint-disable @next/next/no-img-element */

interface Props {
  imgSrc: string;
  idx: number;
  className?: string;
}

export function StoryImage({ imgSrc, idx, className }: Props) {
  const shapeIdx = idx % 3;
  const shapes: Record<string, string[]> = {
    0: ["/shape-1.png", "/shape-2.png"],
    1: ["/shape-3.png", "/shape-4.png"],
    2: ["/shape-5.png", "/shape-6.png"],
  };

  return (
    <div className={className}>
      <img src={imgSrc} alt="" className="w-[350px] h-[450px] object-cover" />
      <div className="story-shape-img-1 absolute top-0 left-0 w-[206px] h-[243px]">
        <img
          src={shapes[shapeIdx][0]}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="story-shape-img-2 absolute top-0 left-0 w-[270px] h-[216px]">
        <img
          src={shapes[shapeIdx][1]}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
