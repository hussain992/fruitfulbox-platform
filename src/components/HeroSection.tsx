import { Button } from "@/components/ui/button";


export default function HeroSection() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-b from-red-100 to-yellow-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fruitful Box 🥭</h1>
      <p className="text-lg mb-6">Fresh, handpicked fruits delivered to your doorstep.</p>
      <a
        href="https://wa.me/917558535953?text=Hi%20Fruitful%20Box!%20I%20want%20to%20subscribe%20for%20weekly%20fruit%20updates."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-yellow-400 hover:bg-red-700 text-white text-lg px-6 py-3">
          Subscribe Now
        </Button>
      </a>
      <p className="text-sm text-muted-foreground mt-2">
        You’ll receive updates once a week. No spam, we promise! 💚
      </p>
    </section>
  );
}