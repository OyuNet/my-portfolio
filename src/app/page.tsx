import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlueGoButton from "@/components/buttons"

export default function Home() {
  return (
    <main className="min-h-full">
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <div className="flex flex-col w-full items-center justify-center pt-12">
        <p className="text-3xl font-bold m-4">Selaaam! Karşılarınızda,</p>
        <p className="text-6xl lg:text-8xl xl:text-10xl font-extrabold m-4 text-green-600 drop-shadow-2xl">Arda Yiğit Tok ✨</p>
        <p className="text-2xl font-semibold m-4 bg-gradient-to-br from-green-600 to-yellow-200 bg-clip-text text-transparent drop-shadow-xl">Part-Time IYTE CENGaveri</p>
        <p className="text-3xl font-bold mx-4 my-8 text-yellow-400 drop-shadow-2xl">Meziyetlerim 🙌</p>
        <p className="text-xl font-semibold m-4 gap-2 text-gray-400 drop-shadow-2xl">Type/JavaScript - Java - Rust - Kotlin - NodeJS - React - Nextjs - Python - Ruby</p>
        <div className="flex gap-6">
          <BlueGoButton
            desiredText="Projelerim"
            slug="/projelerim"
          />
          <BlueGoButton
            desiredText="CV'im"
            slug="/ArdaYigitTokCV-2.pdf"
          />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
