import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="locations" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        <h2 className="font-general text-sm uppercase md:text-[14px]">
          Welcome to Middle-earth
        </h2>
        <AnimatedTitle
          title="The gre<b>a</b>test f<b>a</b><b>n</b>tasy <br /> <b>a</b>dventur<b>e</b> <b>e</b>ver t<b>o</b>ld"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>One Ring to rule them all, One Ring to find them</p>
          <p>One Ring to bring them all and in the darkness bind them</p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/lotr.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
