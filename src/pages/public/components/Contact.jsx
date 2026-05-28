import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import useReveal from "../../../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  const infoItems = [
    { label: "Email", value: "hello@pinatrixsystems.com", Icon: Mail },
    { label: "Phone", value: "+91 12345 67890", Icon: Phone },
    { label: "Location", value: "India", Icon: MapPin },
  ];

  const socials = [
    {
      Icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.262 5.632 5.902-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
        </svg>
      ),
      href: "#",
      label: "Twitter",
    },
    {
      Icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
      label: "LinkedIn",
    },
    {
      Icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
      href: "#",
      label: "Instagram",
    },
    {
      Icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "#",
      label: "YouTube",
    },
  ];

  return (
    <section id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="contact-header reveal">
          <p className="section-eyebrow">CONTACT US</p>
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">Let's collaborate and build the future together.</p>
        </div>

        <div className="contact-grid">
          {/* LEFT — Info */}
          <div className="contact-info-col reveal delay-1">
            <p className="contact-col-label">CONTACT INFORMATION</p>

            <div className="contact-info-items">
              {infoItems.map(({ label, value, Icon }) => (
                <div className="contact-info-item" key={label}>
                  <div className="contact-info-icon">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact-info-lbl">{label}</div>
                    <div className="contact-info-val">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="contact-follow-lbl">Follow Us</p>
            <div className="contact-socials">
              {socials.map(({ Icon, href, label }) => (
                <a href={href} className="social-btn" key={label} aria-label={label}>
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="contact-form-col reveal delay-2">
            <p className="contact-col-label">SEND US A MESSAGE</p>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Your Name" className="contact-input" {...register("name", { required: "Name is required" })} />
              {errors.name && <span style={{ color: "#f87171", fontSize: 11 }}>{errors.name.message}</span>}

              <input
                type="email"
                placeholder="Email Address"
                className="contact-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
              />
              {errors.email && <span style={{ color: "#f87171", fontSize: 11 }}>{errors.email.message}</span>}

              <input type="text" placeholder="Subject" className="contact-input" {...register("subject", { required: "Subject is required" })} />
              {errors.subject && <span style={{ color: "#f87171", fontSize: 11 }}>{errors.subject.message}</span>}

              <textarea
                placeholder="Your Message"
                className="contact-input contact-textarea"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <span style={{ color: "#f87171", fontSize: 11 }}>{errors.message.message}</span>}

              <button type="submit" className="contact-send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
