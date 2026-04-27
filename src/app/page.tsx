export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          New York City
        </p>
        <h1 className="text-white text-7xl font-bold tracking-tight mb-2">
          Harvey
        </h1>
        <h1 className="text-amber-500 text-7xl font-bold tracking-tight mb-8">
          Specter
        </h1>
        <div className="w-16 h-px bg-amber-500 mx-auto mb-8" />
        <p className="text-zinc-500 uppercase tracking-widest text-xs">
          The best closer in New York City
        </p>
      </div>
    </div>
  );
}
