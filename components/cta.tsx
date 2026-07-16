import Link from "next/link";
import Image from "next/image";

const cta = () => {
	return (
		<section className="cta-section">
		<div className="cta-badge">Start learning your way</div>
		 <h2 className="font-bold text-3xl">
        Build Real Skills with AI Companions
      </h2>
      <p className="text-lg text-white">
        Pick a name, subject and topic, and launch your personalized learning session with your AI companion. It's that simple to start your learning journey.
      </p>

			<Image src="/images/cta.svg" alt="cta" width={362} height={360} />
			<button className="btn-primary">
			<Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
			<Link href="/companions/new">
			<p>Build a New Companion </p>
			</Link>
      </button>
		</section>
		 
	)
}

export default cta
