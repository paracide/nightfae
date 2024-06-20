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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae earum nobis quasi
            repellat. Amet facere nulla dolorum accusantium sit dolores odio excepturi facilis
            laboriosam officiis dolorem, nobis reprehenderit molestiae.
          </p>
        </div>
      </div>
    </div>
  )
}
