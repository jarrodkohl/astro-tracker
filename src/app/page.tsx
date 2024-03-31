import React from "react";
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <header className="w-full py-5 flex justify-between items-center">
        <div>
          {/* <Image src="/logo.png" alt="Astro Tracker Logo" width={120} height={60} /> */}
        </div>
        <nav>
          {/* <Link href="/"><a className="mx-4">Home</a></Link>
          <Link href="/features"><a className="mx-4">Features</a></Link>
          <Link href="/contact"><a className="mx-4">Contact</a></Link> */}
        </nav>
      </header>
      
      <section className="text-center p-20">
        <h1 className="text-5xl font-bold">Astro Tracker</h1>
        <p className="mt-4 text-lg">Effortlessly track and manage your crypto portfolio.</p>
        <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg">Get Started</button>
      </section>

      <section className="p-20 w-full">
        <h2 className="text-center text-3xl font-semibold mb-10">Key Features</h2>
        <div className="flex justify-center items-center">
          <div className="mx-10">
            <h3 className="text-xl font-semibold">Real-time Crypto Market Data</h3>
            <p>Monitor your crypto portfolio in real-time.</p>
          </div>
          <div className="mx-10">
            <h3 className="text-xl font-semibold">Portfolio Tracking and Analytics</h3>
            <p>Analyze your investments and track your gains.</p>
          </div>
        </div>
      </section>

      <footer className="w-full py-5 flex justify-center items-center border-t mt-10">
        <p>© 2024 Astro Tracker. All rights reserved.</p>
      </footer>
    </main>
  );
}
