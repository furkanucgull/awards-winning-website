import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState } from "react";
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 20;
    const tiltY = (relativeX - 0.5) * -20;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between px-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-blue-50 ">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52 " id="characters">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Lands of Middle-earth
          </p>
          <p className="max-w-lg font-circular-web text-lg text-blue-50 opacity-50">
            Journey through an epic realm where the fates of Elves, Men, and
            Dwarves intertwine. Discover the ancient kingdoms, brave the
            shadowed paths, and become part of the greatest tale ever told.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                F<b>e</b>ll<b>o</b>ws<b>h</b>ip
              </>
            }
            description="The nine companions set out from Rivendell on their perilous quest"
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  Gand<b>a</b>lf
                </>
              }
              description="The Grey Pilgrim who returned as Gandalf the White"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  Ar<b>a</b>g<b>o</b>rn
                </>
              }
              description="The heir of Isildur and rightful King of Gondor"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  Leg<b>o</b>las
                </>
              }
              description=" Swift as the wind, silent as moonlight.The Elven archer whose keen eyes never miss their mark.'A red sun rises. Blood has been spilled this night.'   "
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Coming Soon
              </h1>
              <TiLocationArrow className="mb-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
export default Features;
