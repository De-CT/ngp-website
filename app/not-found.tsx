import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#A1465B] text-white">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#E8D3D8] to-[#5F1627] drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)] transform rotate-x-6">
        404 - Not Found
      </h2>
      <p className="mt-4 text-lg text-gray-300">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#E8D3D8] to-[#5F1627] text-white font-semibold shadow-lg hover:scale-105 transition transform duration-300"
      >
        Return Home
      </Link>
    </div>
  )
}
