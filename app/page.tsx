export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-12 pb-24 space-y-6">
      
      {/* HEADER */}
      <header className="pb-4">
        <div className="mb-4 inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold tracking-wider text-zinc-600 shadow-sm uppercase">
          Week 3 + MCP
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Home
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-500">
          Manage Person records directly in-app while exposing the same CRUD operations through MCP tools for Claude Desktop.
        </p>
      </header>

      {/* SEARCH SECTION */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900">Search User</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by name, email, or city..."
            className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </section>

      {/* TWO COLUMNS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* ADD PERSON FORM */}
        <section className="col-span-1 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 mb-5">Add Person</h2>
          <form className="space-y-4">
            {["Name", "Email", "Age", "City"].map((field) => (
              <div key={field}>
                <input
                  type="text"
                  placeholder={field}
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500"
                />
              </div>
            ))}
            <div className="flex space-x-3 pt-2">
              <button type="button" className="flex-1 rounded-lg bg-[#ff7a59] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#f26a48] transition-colors shadow-sm">
                Create
              </button>
              <button type="button" className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* PEOPLE LIST */}
        <section className="col-span-2 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
            <h2 className="text-lg font-bold text-zinc-900">People</h2>
            <button className="rounded-lg bg-[#1b8b84] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#15726c] transition-colors">
              Refresh
            </button>
          </div>
          
          <div className="flex-grow space-y-4">
            <p className="text-sm font-medium text-zinc-700">Status: People loaded.</p>
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center mt-2">
              <p className="text-sm text-zinc-500">No people yet. Add your first record.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
