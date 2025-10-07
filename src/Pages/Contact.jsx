import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ loading: false, ok: false, err: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: false, err: "" });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // TODO: replace with real API route (e.g., /api/contact) or Formspree/Resend
      await new Promise((r) => setTimeout(r, 900));
      console.log("Contact payload", payload);
      setStatus({ loading: false, ok: true, err: "" });
      e.currentTarget.reset();
      // Optional: trigger DaisyUI toast
      const t = document.getElementById("contact-toast");
      if (t) t.classList.remove("hidden");
      setTimeout(() => t && t.classList.add("hidden"), 2500);
    } catch (err) {
      setStatus({ loading: false, ok: false, err: "Something went wrong. Please try again." });
    }
  };

  return (
    <section className="bg-base-100">
      {/* Toast */}
      <div id="contact-toast" className="toast toast-end hidden z-50">
        <div className="alert alert-success">
          <span>Message sent. We’ll reply within 1–2 business days.</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Details */}
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-3xl">Contact Us</h2>
                <p className="leading-relaxed">
                  Reach out for order questions, product sizing, styling help, or partnership inquiries. The team typically responds within 24–48 hours on business days.
                </p>

                <div className="divider my-2" />

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Store & Support</h3>
                    <p>Email: support@homedecor.example</p>
                    <p>Phone/WhatsApp: +880-1XX-XXX-XXXX</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Showroom</h3>
                    <p>Home Décor, 123 Modern Avenue, Dhaka</p>
                    <p>Bangladesh</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p>Sat–Thu: 10:00–19:00</p>
                    <p>Friday: Closed</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Social</h3>
                    <div className="flex gap-2">
                      <a className="btn btn-sm btn-ghost" href="#" aria-label="Instagram">Instagram</a>
                      <a className="btn btn-sm btn-ghost" href="#" aria-label="Facebook">Facebook</a>
                      <a className="btn btn-sm btn-ghost" href="#" aria-label="Pinterest">Pinterest</a>
                    </div>
                  </div>
                </div>

                <div className="divider my-2" />
                <p className="text-sm opacity-80">
                  For returns or exchanges, include your order number and photos if relevant so the team can assist faster.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="form-control">
                      <div className="label"><span className="label-text">Full name</span></div>
                      <input name="name" type="text" className="input input-bordered" placeholder="Alex Doe" required />
                    </label>

                    <label className="form-control">
                      <div className="label"><span className="label-text">Email</span></div>
                      <input name="email" type="email" className="input input-bordered" placeholder="alex@email.com" required />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="form-control">
                      <div className="label"><span className="label-text">Phone (optional)</span></div>
                      <input name="phone" type="tel" className="input input-bordered" placeholder="+8801XXXXXXXXX" />
                    </label>

                    <label className="form-control">
                      <div className="label"><span className="label-text">Topic</span></div>
                      <select name="topic" className="select select-bordered">
                        <option>Order status</option>
                        <option>Product sizing</option>
                        <option>Returns & exchanges</option>
                        <option>Styling advice</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label className="form-control">
                    <div className="label"><span className="label-text">Order number (optional)</span></div>
                    <input name="orderId" type="text" className="input input-bordered" placeholder="#HD-12345" />
                  </label>

                  <label className="form-control">
                    <div className="label"><span className="label-text">Message</span></div>
                    <textarea name="message" className="textarea textarea-bordered min-h-32" placeholder="How can we help?" required />
                  </label>

                  <div className="flex items-center gap-3">
                    <button type="submit" className="btn btn-primary" disabled={status.loading}>
                      {status.loading ? "Sending..." : "Send message"}
                    </button>
                    {status.err && <span className="text-error text-sm">{status.err}</span>}
                  </div>
                </form>

                {/* Quick help / tips */}
                <div className="divider" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="alert">
                    <span className="font-medium">Sizing help:</span>
                    <span className="ml-2">Attach room width/depth and doorway measurements for accurate recommendations.</span>
                  </div>
                  <div className="alert">
                    <span className="font-medium">Lighting advice:</span>
                    <span className="ml-2">Share ceiling height and room use; the team suggests lumen levels and fixture counts.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card bg-base-200 shadow-md mt-6">
              <div className="card-body">
                <h3 className="text-xl font-semibold">FAQ</h3>
                <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow bg-base-100 join-item">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium">When will support reply?</div>
                    <div className="collapse-content">
                      <p>Within 24–48 business hours. Peak seasons may take slightly longer.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-100 join-item">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium">How do I update an order?</div>
                    <div className="collapse-content">
                      <p>Send the order number and requested changes as soon as possible; the team confirms eligibility by status.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-100 join-item">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium">Do you offer styling support?</div>
                    <div className="collapse-content">
                      <p>Yes—share photos and room dimensions for tailored product and layout suggestions.</p>
                    </div>
                  </div>
                </div>
                <div className="card-actions mt-4">
                  <a href="/guide" className="btn btn-outline">Room Styling Guide</a>
                  <a href="/returns" className="btn btn-ghost">Returns & Exchanges</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-8">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Find Us</h3>
              <div className="rounded-box overflow-hidden">
                {/* Replace with actual map embed */}
                <iframe
                  title="Store location"
                  className="w-full h-64 rounded-box"
                  loading="lazy"
                  style={{ border: 0 }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=90.377%2C23.76%2C90.43%2C23.80&layer=mapnik"
                />
              </div>
              <p className="text-sm opacity-80 mt-2">Tip: Call ahead to confirm item availability at the showroom.</p>
            </div>
          </div>
        </div>

        {/* Meta */}
        <p className="text-center text-xs opacity-70 mt-6">
        </p>
      </div>
    </section>
  );
};

export default Contact;
