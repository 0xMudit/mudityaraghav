export default function Profile() {
  return (
    <section className="mb-10 flex items-start gap-8">
      <div className="hidden shrink-0 md:block">
        <img
          src="/assets/profile.jpeg"
          alt="Muditya Raghav"
          className="w-36 rounded-2xl"
        />
      </div>
      <div className="min-w-0 flex-1">
        <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
          <li>Machine Learning Engineer — applied CV research and full-stack AI products.</li>
          <li>From training and fine-tuning to deployment, monitoring, and scaling.</li>
          <li>LLMs, RAG pipelines, ViT-based re-identification, and the gap between a trained model and a shipped product.</li>
          <li>Adversarial security and data validation background — I think like an attacker and build like an engineer.</li>
        </ul>
      </div>
    </section>
  );
}