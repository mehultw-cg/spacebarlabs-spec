import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground">
      {/* Hero Section - Placeholder for now */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to SpaceBar Labs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Pioneering the frontiers of software development, security, and digital innovation.
          </p>
          {/* Add CTA buttons here later */}
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section - Placeholder for now */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Flexible plans designed to accelerate your project's success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pricing cards will be added here later */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Craft your Ship</h3>
              <p className="text-muted-foreground mb-4">Brainstorming, consulting, UI UX, frontend prototyping.</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md">
                Get Quote
              </button>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Lift Off</h3>
              <p className="text-muted-foreground mb-4">Startups and early ventures: build and launch your application.</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md">
                Get Quote
              </button>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Accelerate</h3>
              <p className="text-muted-foreground mb-4">Projects in motion: help you accelerate your plans.</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md">
                Get Quote
              </button>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Deep Space</h3>
              <p className="text-muted-foreground mb-4">Research-based long-term projects for novel technology.</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Placeholder for now */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 SpaceBar Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
