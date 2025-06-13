import type { MetaFunction } from "@remix-run/node";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Gifino" },
    { name: "description", content: "Welcome!" },
  ];
};


export default function Index() {

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(SplitText);

    const splitText1 = SplitText.create(textRef1.current, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const splitText2 = SplitText.create(textRef2.current, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const splitText3 = SplitText.create([textRef3.current, textRef4.current], {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const ctx = gsap.context(() => {

      gsap.from(circleRef.current, {
        duration: 1,
        rotate: 60
      })

      gsap.from(arrowRef.current, {
        y:60,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
      })

      gsap.from(splitText1.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.2,
        ease: "expo.out",
      });

      gsap.from(splitText2.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.5,
        ease: "expo.out",
      });

      gsap.from(splitText3.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.6,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto">
      {/* NAVBAR */}
      <div className="py-4 px-12 flex items-start justify-between">
          <img src="/images/logo.png" className="w-[100px]" />
          <div className="flex gap-6">
            <h3 className="text-3xl font-semibold">Work</h3>
            <h3 className="text-3xl font-semibold">About</h3>
          </div>
      </div>


      {/* MAIN TITLE */}
      <div className="px-36 text-8xl font-instrument font-thin mt-16">

        <div className="flex mb-2 ml-4 items-center">
          <img ref={circleRef} src="/images/stars.png" className="w-[80px] h-full mr-4"/>
          <span ref={textRef1}>I'm Gifino Thoriq</span>
        </div>
        <div ref={textRef2} className="flex ml-32 mb-2">Frontend Engineer</div>
        <div ref={textRef3} className="flex mb-2">Based on</div>
        <div className="flex ml-16 items-center">
          <img ref={arrowRef} src="/images/arrow.png" className="mr-4 w-[72px] h-full -scale-y-[1]"/>
          <span ref={textRef4}>Jakarta Indonesia</span>
        </div>
      </div>

      {/* SLIGHT PORTFOLIO */}
    </div>
  );
}
