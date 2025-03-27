import AnimatedTitle from "./AnimatedTitle.jsx";
import { useRef } from "react";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners.jsx";

const Story = () => {
  const frameRef = useRef("null");
  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen   text-blue-50 bg-black">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px] ">
          The Tale of Middle-earth
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="One R<b>i</b>ng to rule them <b>a</b>ll"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/story.jpg"
                  alt="ring"
                  className="object-contain mt-2 "
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center px-4">
            <p className="font-tolkien-italic text-golden opacity-90 leading-relaxed">
              "Three Rings for the Elven-kings under the sky,<br/>
              Seven for the Dwarf-lords in their halls of stone,<br/>
              Nine for Mortal Men doomed to die,<br/>
              One for the Dark Lord on his dark throne..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
