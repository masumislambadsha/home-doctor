import React from "react";

const About = () => {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto px-4 py-16">
        {/* Intro */}
        <div className="card bg-base-200 shadow-md">
          <div className="card-body gap-6">
            <h2 className="card-title text-3xl md:text-4xl">
              About Home Décor
            </h2>
            <p className="leading-relaxed">
              Home Décor is a modern destination for warm, livable interiors. The catalog spans sofas and armchairs, coffee tables, pendant and floor lamps, wall art and frames, mirrors, modular shelves, and rugs—curated to help spaces feel collected, not cluttered.
            </p>
            <p className="leading-relaxed">
              The design lens favors timeless silhouettes, tactile textures, and calm, natural palettes. Each piece is easy to pair, sized for real rooms, and built for daily life—so creating a home is straightforward and enjoyable.
            </p>

            {/* Story */}
            <div className="rounded-box bg-base-100 p-6">
              <h3 className="text-xl font-semibold mb-2">Our Story</h3>
              <p className="leading-relaxed">
                Home Décor began with a simple idea: great rooms come from a few considered choices, not endless scrolling. By narrowing to versatile forms and finishes, the collections reduce decision fatigue and make styling feel intuitive.
              </p>
              <p className="leading-relaxed mt-2">
                From rounded coffee tables that soften a seating area to pendant lights that layer glow and character, the assortment is edited to work together across styles—minimal, organic, or classic.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Design You Can Live With</h4>
                  <p className="text-sm">
                    Thoughtful proportions, durable upholstery, and finishes that wear gracefully with time and use.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Cohesive by Default</h4>
                  <p className="text-sm">
                    Shared tones, materials, and textures across categories so mixing pieces is effortless and balanced.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Clarity and Care</h4>
                  <p className="text-sm">
                    Clear specs, care notes, and styling tips for confident decisions and long-term enjoyment.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="menu bg-base-100 rounded-box p-4">
                <li className="menu-title"><span>What We Offer</span></li>
                <li><span>Seating: velvet sofas, classic armchairs, and modular silhouettes</span></li>
                <li><span>Tables: solid-wood coffee tables with rounded corners</span></li>
                <li><span>Lighting: minimalist floor lamps and sculptural pendants</span></li>
                <li><span>Wall: abstract art, nature prints, frames, and decorative mirrors</span></li>
                <li><span>Textiles: wool and cotton rugs for warmth, texture, and durability</span></li>
                <li><span>Storage: modern bookcases and compact shelving</span></li>
              </ul>

              <ul className="menu bg-base-100 rounded-box p-4">
                <li className="menu-title"><span>How We Help</span></li>
                <li><span>Room-friendly sizing and dimension-first product pages</span></li>
                <li><span>Guided palettes: light oak, walnut, black, and soft neutrals</span></li>
                <li><span>Layered lighting advice for ambient, task, and accent needs</span></li>
                <li><span>Care guides for fabrics, woods, and finishes</span></li>
                <li><span>Lookbooks with ready-to-copy room pairings</span></li>
              </ul>
            </div>

            {/* Sustainability & Materials */}
            <div className="rounded-box bg-base-100 p-6">
              <h3 className="text-xl font-semibold mb-2">Materials & Responsibility</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Durable textiles and solid-wood accents for longevity and repairability</li>
                <li>Timeless forms designed to outlast seasonal trends</li>
                <li>Care instructions that extend product lifecycles and reduce waste</li>
              </ul>
            </div>

            {/* Design Approach */}
            <div className="rounded-box bg-base-100 p-6">
              <h3 className="text-xl font-semibold mb-2">Design Approach</h3>
              <p className="leading-relaxed">
                Start with a neutral base—sofa, rug, and a simple table—then add contrast in wood tone and metal finish. Use layered lighting to shift mood: pendants for presence, floor lamps for warmth, and mirrors to bounce natural light.
              </p>
              <div className="grid gap-3 md:grid-cols-2 mt-3">
                <div className="alert">
                  <span className="font-medium">Small space tip:</span>
                  <span className="ml-2">Choose rounded corners, raise lighting off surfaces, and use vertical shelves to open the footprint.</span>
                </div>
                <div className="alert">
                  <span className="font-medium">Texture tip:</span>
                  <span className="ml-2">Combine velvet, wool, rattan, and smooth wood for depth without visual noise.</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Style Advice</h4>
                  <p className="text-sm">
                    Quick room recipes and lookbooks to pair seating, lighting, and rugs with confidence.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Size & Fit Help</h4>
                  <p className="text-sm">
                    Dimensions, clearances, and layout notes to ensure pieces fit doors, halls, and floor plans.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h4 className="font-semibold">Care Guides</h4>
                  <p className="text-sm">
                    Fabric cleaning, wood conditioning, bulb types, and maintenance schedules—simple and actionable.
                  </p>
                </div>
              </div>
            </div>

            {/* Shopping Guidance */}
            <div className="rounded-box bg-base-100 p-6">
              <h3 className="text-xl font-semibold mb-2">Shopping Guidance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Measure width, depth, and height; leave walking clearances of 28–36 inches</li>
                <li>Plan lighting in three layers: ambient, task, and accent for balance and mood</li>
                <li>Balance shapes: offset linear sofas with round or oval tables</li>
                <li>Anchor with a rug large enough to sit front legs of seating on the pile</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow bg-base-100 join-item">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">Do products come with dimensions and care?</div>
                <div className="collapse-content">
                  <p>Yes—every product page lists full measurements, materials, and clear care notes for easy planning.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 join-item">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">How should lighting be layered?</div>
                <div className="collapse-content">
                  <p>Use a pendant or ceiling light for ambient glow, add a floor or table lamp for task zones, and finish with an accent fixture or dimmer for mood.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 join-item">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">What style does the shop focus on?</div>
                <div className="collapse-content">
                  <p>Timeless, soft-modern pieces that mix with organic, Scandinavian, or classic elements without feeling trendy.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="card-actions mt-2">
              <a href="/products" className="btn btn-primary">Explore the Shop</a>
              <a href="/wishlist" className="btn btn-ghost">View Collections</a>
              <a href="" className="btn btn-outline">Room Styling Guide</a>
            </div>

            {/* Meta */}
            <div className="text-xs opacity-70 mt-4">
              Content language: English • Designed with Tailwind CSS and DaisyUI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
