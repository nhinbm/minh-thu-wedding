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
      <img
        src={imgSrc}
        alt=""
        className="img img-responsive object-fit-cover"
        width={350}
        height={450}
      />
      <div className="story-shape-img-1">
        <img src={shapes[shapeIdx][0]} alt="" width={206} height={243} />
      </div>
      <div className="story-shape-img-2">
        <img src={shapes[shapeIdx][1]} alt="" width={270} height={216} />
      </div>
    </div>
  );
}
