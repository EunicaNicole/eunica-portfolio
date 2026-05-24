export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-12 pb-24 space-y-6">
      
      {/* HEADER */}
      <header className="pb-4">
        <div className="mb-4 inline-flex items-center rounded-full border border-[#FFB3C6] bg-white/80 px-3 py-1 text-xs font-bold tracking-wider text-[#FB6F92] shadow-sm uppercase backdrop-blur-sm">
          Week 3 + MCP
        </div>
        <h1 className="font-serif text-5xl font-extrabold tracking-tight text-zinc-900">
          Home
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-700">
          Manage Person records directly in-app while exposing the same CRUD operations through MCP tools for Claude Desktop.
        </p>
      </header>

      {/* SEARCH SECTION */}
      <section className="rounded-3xl border border-[#FFB3C6]/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
        <h2 className="font-serif text-xl font-bold text-zinc-900">Search User</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by name, email, or city..."
            className="w-full rounded-2xl border border-[#FFC2D1] bg-white/90 px-4 py-3 text-sm outline-none transition-all focus:border-[#FB6F92] focus:ring-1 focus:ring-[#FB6F92]"
          />
        </div>
      </section>

      {/* TWO COLUMNS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* ADD PERSON FORM */}
        <section className="col-span-1 rounded-3xl border border-[#FFB3C6]/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
          <h2 className="font-serif text-xl font-bold text-zinc-900 mb-5">Add Person</h2>
          <form className="space-y-4">
            {["Name", "Email", "Age", "City"].map((field) => (
              <div key={field}>
                <input
                  type="text"
                  placeholder={field}
                  className="w-full rounded-2xl border border-[#FFC2D1] bg-white/90 px-4 py-2.5 text-sm outline-none transition-all focus:border-[#FB6F92] focus:ring-1 focus:ring-[#FB6F92]"
                />
              </div>
            ))}
            <div className="flex space-x-3 pt-2">
              <button type="button" className="flex-1 rounded-full bg-[#FB6F92] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#e85b7d] transition-all shadow-md">
                Create
              </button>
              <button type="button" className="rounded-full border border-[#FF8FAB] bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-[#FFE5EC] transition-all">
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* PEOPLE LIST */}
        <section className="col-span-2 rounded-3xl border border-[#FFB3C6]/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between border-b border-[#FFC2D1]/50 pb-4 mb-4">
            <h2 className="font-serif text-xl font-bold text-zinc-900">People Directory</h2>
            <button className="rounded-full bg-[#FF8FAB] px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#FB6F92] transition-colors">
              Refresh
            </button>
          </div>
          
          <div className="flex-grow space-y-4">
            <p className="text-sm font-medium text-zinc-700">Status: People loaded.</p>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#FFC2D1] bg-[#FFE5EC]/30 p-10 text-center mt-2">
              <p className="text-sm text-zinc-600">No people yet. Add your first record.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
