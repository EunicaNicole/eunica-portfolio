export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-10 font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between pb-10">
        <div className="font-serif text-xl font-extrabold tracking-tight">
          Person.search
        </div>

        <div className="hidden space-x-3 md:flex">
          {["Home", "About", "GitHub", "MCP Setup", "MCP Demo"].map((item) => (
            <a key={item} href="#" className="rounded-full border border-gray-300/60 bg-white/40 px-4 py-1.5 text-xs font-medium text-gray-600 backdrop-blur-sm hover:bg-white/80 transition-all">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="rounded-full border border-gray-300/60 bg-white/40 px-4 py-1.5 text-xs font-medium backdrop-blur-sm hover:bg-white/80 transition-all">
            Dark
          </button>
          <button className="rounded-full border border-gray-300/60 bg-white/40 px-4 py-1.5 text-xs font-medium backdrop-blur-sm hover:bg-white/80 transition-all">
            Sign In
          </button>
          <button className="rounded-full bg-[#ff7a59] px-5 py-1.5 text-xs font-medium text-white shadow-md hover:bg-[#f26a48] transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="mx-auto max-w-5xl pt-4 pb-8">
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          WEEK 3 + MCP
        </p>
        <h1 className="mt-2 font-serif text-5xl font-bold text-gray-900">
          Home
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
          Manage Person records directly in-app while exposing the same CRUD operations through MCP tools for Claude Desktop.
        </p>
      </header>

      {/* MAIN CONTENT GRID */}
      <main className="mx-auto max-w-5xl space-y-6">
        
        {/* SEARCH BAR */}
        <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
          <h2 className="font-serif text-xl font-bold text-gray-900">Search User</h2>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search by name, email, or city..."
              className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
            />
          </div>
        </section>

        {/* BOTTOM TWO COLUMNS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* ADD PERSON FORM (LEFT COLUMN) */}
          <section className="col-span-1 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-5">Add Person</h2>
            
            <form className="space-y-4">
              {["Name", "Email", "Age", "City"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
              ))}
              
              <div className="flex space-x-3 pt-2">
                <button type="button" className="rounded-full bg-[#ff7a59] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#f26a48] transition-all">
                  Create
                </button>
                <button type="button" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
                  Clear
                </button>
              </div>
            </form>
          </section>

          {/* PEOPLE LIST (RIGHT COLUMN) */}
          <section className="col-span-2 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-bold text-gray-900">People</h2>
              <button className="rounded-full bg-[#1b8b84] px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-[#15726c] transition-all">
                Refresh
              </button>
            </div>
            
            <div className="flex-grow space-y-4">
              <p className="text-sm text-gray-600">Status: People loaded.</p>
              <p className="text-sm text-gray-500">No people yet. Add your first record.</p>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
