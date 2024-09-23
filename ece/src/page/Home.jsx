import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TransitionContext from "../context/TransitionContext";

export default function Home() {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value; // for converting a pixel-based scroll value to the closest panel scroll position

      // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // find the closest snapping spot based on the direction of scroll
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main}>
      {/* SECTION 1 */}
      <section className="panel light bg-[url('./section1-4.png')] bg-cover ">
        <div className="w-full h-full flex flex-col mt-16 ">
          {/* SHAPE DIVIDER */}
          <div className="custom-shape-divider-top-1727061075 absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[131px]"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill fill-[#172554]"
              ></path>
            </svg>
          </div>
          <div className="h-10 font-custom   ">
            <h1 className="text-black   text-4xl  ">About The Conference</h1>
            <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
          </div>
          <div className="flex felx-row  flex-grow items-center justify-center">
            <div className="h-80 w-2/3 items-center justify-center text-center border-r-4 border-dotted border-black">
              <h1 className="font-bold">DATA</h1>
            </div>
            <div className="items-center gap-2  mt-4 ml-2 flex flex-col">
              {/* CARD 1 */}
              <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="..."
                    alt="Profile Photo"
                  />
                </div>
                <div>
                  <div class="text-xl  text-black font-bold">
                    Dr. Harsh Vikram Singh
                  </div>
                  <p class="text-gray-500 text-center">
                    <h1 className="font-bold">Coordinator</h1>
                    <hr className="border-t-2 border-black  " />
                    <h2 className="">
                      Professor & Head of Electronics Engineering Department
                    </h2>
                    <br />
                    <h1 className="text-left font-bold">Mobile: 9415763939</h1>
                    <h1 className="text-left font-bold">
                      Email: icevet24@gmail.com
                    </h1>
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="..."
                    alt="Profile Photo"
                  />
                </div>
                <div>
                  <div class="text-xl  text-black font-bold">
                    Dr. Som Pal Gangwar
                  </div>
                  <p class="text-gray-500 text-center">
                    <h1 className="font-bold">Co-Coordinator</h1>
                    <hr className="border-t-2 border-black  " />
                    <h2 className="">
                      Associate Professor, Electronics Engineering Department
                    </h2>
                    <br />
                    <h1 className="text-left font-bold">Mobile: 8765890822</h1>
                    <h1 className="text-left font-bold">
                      Email: sompalgangwar@knit.ac.in
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="panel light">
        <div className="w-full h-full flex flex-col mt-16 ">
          {/* SHAPE DIVIDER */}
          <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill fill-[#172554]"
              ></path>
            </svg>
          </div>
          <div className="h-10 border-b-4 border-solid border-red-500">
            <h1 className="text-black  font-bold text-4xl font-mono ">
              Paper Submission
            </h1>
          </div>
          <div className="flex felx-row  flex-grow ">
            <div className="h-full  w-2/3 items-center justify-center text-center border-r-4 border-dotted border-black">
              <h1 className="font-bold">DATA</h1>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="panel light">
        <div className="w-full h-full flex flex-col mt-16 ">
          {/* SHAPE DIVIDER */}
          <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill fill-[#172554]"
              ></path>
            </svg>
          </div>
          <div className="h-10 border-b-4 border-solid border-red-500">
            <h1 className="text-black  font-bold text-4xl font-mono ">
              Speakers
            </h1>
          </div>
          <div className="flex felx-row  flex-grow border-8 border-yellow-300 "></div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="panel light">
        <div className="w-full h-full flex flex-col mt-16 ">
          {/* SHAPE DIVIDER */}
          <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill fill-[#172554]"
              ></path>
            </svg>
          </div>
          <div className="h-10 border-b-4 border-solid border-red-500">
            <h1 className="text-black  font-bold text-4xl font-mono ">
              ABOUT THE CONFERENCE
            </h1>
          </div>
          <div className="flex felx-row  flex-grow ">
            <div className="h-full  w-2/3 items-center justify-center text-center border-r-4 border-dotted border-black">
              <h1 className="font-bold">DATA</h1>
            </div>
            <div>
              <h1>hiiiii</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
