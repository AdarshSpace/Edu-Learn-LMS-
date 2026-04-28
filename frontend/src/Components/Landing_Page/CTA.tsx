export default function CTA() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-emerald-900 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Join 50,000+ learners today
            </h2>
            <p className="text-emerald-200 mt-2">
              No credit card required. Cancel anytime.
            </p>
          </div>
  
          <button className="px-6 py-3 bg-white rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>
    );
  }