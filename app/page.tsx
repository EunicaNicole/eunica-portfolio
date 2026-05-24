export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-[#050505] p-6 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-white">
          Eunica Nicole G. Lasam
        </h1>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          Full-Stack Developer
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I build beautiful, highly operational web applications with a dedicated focus on UI/UX Design and Human-Computer Interaction (HCI) Principles.
        </p>
        <div className="pt-8">
          <a
            href="https://github.com/EunicaNicole" 
            target="_blank"
            className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white shadow-lg hover:bg-blue-500 transition-all"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
