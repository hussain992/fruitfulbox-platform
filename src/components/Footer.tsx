// import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-yellow-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-800 space-y-4">

        <div className="text-center text-[13px] leading-relaxed">
          <p>
            🚚 Delivering every <strong>Sunday & Wednesday</strong> between <strong>10 AM – 12 PM</strong>. <br />
            📍 <strong>Pune only</strong>. 
            {/* <Link href="/delivery" className="underline ml-1 hover:text-red-600">See details</Link> */}
          </p>
        </div>

        <div className="text-center pt-4 border-t text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Fruitful Box. All rights reserved.</p>
        </div>

      </div>
    </footer>
    );
  }