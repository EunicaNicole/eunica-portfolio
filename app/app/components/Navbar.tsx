export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-zinc-900">
          Person.search
        </div>

        <div className="hidden space-x-6 md:flex">
          {["Home", "About", "GitHub", "MCP Setup", "MCP Demo"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
            Dark
          </button>
          <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
            Sign In
          </button>
          <button className="rounded-lg bg-[#ff7a59] px-4 py-2 text-sm font-medium text-white hover:bg-[#f26a48] shadow-sm transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
