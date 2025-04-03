import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/APR FINAL.png"
        alt="APR 2050"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

