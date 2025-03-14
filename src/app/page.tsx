import Link from "next/link";
import { shortenUrl } from "./serverAction/UrlShortenAction";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">URL Shortener</h1>

        <form action={shortenUrl} className="space-y-4">
          <input
            type="text"
            name="originalUrl"
            placeholder="Enter URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
            required
          />
          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition shadow-md"
          >
            Shorten
          </button>
        </form>

        <div className="mt-6">
          <Link href="/urls">
            <span className="text-gray-600 hover:text-gray-800 font-semibold">
              View all shortened URLs →
            </span>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
