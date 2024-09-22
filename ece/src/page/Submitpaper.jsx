import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Submitpaper() {
  const main = useRef();

  return (
    <div ref={main}>
      <section className="section flex-center column" >
      <h2>This the about section of </h2>
      <p>Scroll down to see the magic happen!!</p>
      </section>
      <section className="section"></section>
    </div>
  );
}
