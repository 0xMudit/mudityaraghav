export default function Availability() {
  return (
    <section className="mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ff] px-3 py-1 text-xs font-medium text-[#0071e3]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0071e3] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0071e3]" />
        </span>
        Open to ML/AI Engineer roles
      </div>
    </section>
  );
}