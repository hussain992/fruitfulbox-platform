'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[150px] md:h-[400px] lg:h-[600px] xl:h-[350px] 2xl:h-[800px]">
      <div className="">
        <Image
          src="/images/banner.png"
          alt="Pearl Pattern"
          fill
          className=""
          priority
        />
      </div>
    </section>
  )
}
