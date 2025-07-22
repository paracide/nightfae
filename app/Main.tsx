'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div>
      <div ref={ref} className="relative grid h-screen w-full place-items-center overflow-hidden">
        <motion.h1
          style={{ y: textY }}
          className="relative z-10 text-7xl font-bold text-white md:text-9xl"
        >
          Ardenweald
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(static/images/home/bottom.webp)`,
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-20 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(static/images/home/top.webp)`,
          }}
        />
      </div>

      <div className="w-full bg-[#06141D]">
        <div className="mx-auto max-w-lg space-y-4 py-24 text-neutral-300">
          <p>How long could we be a sad song<br />
            'Til we were too far gone to bring back to life?</p>

          <p>I gave you all my best me's, my endless empathy<br />
            And all I did was bleed as I tried to be the bravest soldier<br />
            Fighting in only your army<br />
            Frontlines, don't you ignore me<br />
            I'm the best thing at this party<br />
            (You're losin' me)</p>

          <p>And I wouldn't marry me either<br />
            A pathological people pleaser<br />
            Who only wanted you to see her<br />
            And I'm fadin', thinkin'<br />
            "Do something, babe, say something" (say something)<br />
            "Lose something, babe, risk something" (you're losin' me)<br />
            "Choose something, babe, I got nothing (got nothing)<br />
            To believe<br />
            Unless you're choosin' me"</p>

          <p>You're losin' me<br />
            Stop (stop, stop), you're losin' me<br />
            Stop (stop, stop), you're losin' me<br />
            I can't find a pulse<br />
            My heart won't start anymore</p>

        </div>
      </div>
    </div>
  )
}
