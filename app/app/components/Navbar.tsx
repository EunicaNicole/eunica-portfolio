export default function Navbar() {
  return (
    <nav className="border-b border-[#FFB3C6]/50 bg-white/60 px-6 py-4 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="font-serif text-xl font-bold tracking-tight text-zinc-900">
          Person.search
        </div>

        <div className="hidden space-x-6 md:flex">
          {["Home", "About", "GitHub", "MCP Setup", "MCP Demo"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-zinc-600 hover:text-[#FB6F92] transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="rounded-full border border-[#FF8FAB]/50 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-[#FFE5EC] transition-colors">
            Dark
          </button>
          <button className="rounded-full border border-[#FF8FAB]/50 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-[#FFE5EC] transition-colors">
            Sign In
          </button>
          <button className="rounded-full bg-[#FB6F92] px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-[#e85b7d] transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
