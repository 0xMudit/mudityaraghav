export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-pattern absolute inset-0 [--grid-line:rgb(9_9_11/0.055)] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_10%,transparent_72%)] dark:[--grid-line:rgb(255_255_255/0.06)]" />
      <div className="absolute -top-52 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-accent-400/20 blur-[130px] dark:bg-accent-500/12" />
      <div className="absolute top-[38%] -right-[15%] h-[420px] w-[420px] rounded-full bg-violet-400/12 blur-[130px] dark:bg-violet-500/10" />
    </div>
  );
}
