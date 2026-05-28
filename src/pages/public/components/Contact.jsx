import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // call API here
    reset();
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <p className="section-eyebrow">CONTACT US</p>
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">Let's collaborate and build the future together.</p>
        </div>

        <div className="contact-grid">
          {/* LEFT */}
          <div className="contact-info-col">
            <p className="contact-col-label">CONTACT INFORMATION</p>

            <div className="contact-info-items">
              {[
                { label: "Email", value: "hello@pinatrixsystems.com" },
                { label: "Phone", value: "+91 12345 67890" },
                { label: "Location", value: "India" },
              ].map((item, i) => (
                <div className="contact-info-item" key={i}>
                  <div className="contact-info-icon">
                    <img src="/logo.svg" alt={`${item.label} icon`} />
                  </div>
                  <div>
                    <div className="contact-info-lbl">{item.label}</div>
                    <div className="contact-info-val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="contact-follow-lbl">Follow Us</p>

            {/* (keeping your SVGs as-is, just fixing JSX) */}
            <div className="contact-socials">
              <a href="#" className="social-btn">
                X
              </a>
              <a href="#" className="social-btn">
                in
              </a>
              <a href="#" className="social-btn">
                ig
              </a>
              <a href="#" className="social-btn">
                yt
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-col">
            <p className="contact-col-label">SEND US A MESSAGE</p>

            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Your Name" className="contact-input" {...register("name", { required: "Name is required" })} />
              {errors.name && <span>{errors.name.message}</span>}

              <input
                type="email"
                placeholder="Email Address"
                className="contact-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <input type="text" placeholder="Subject" className="contact-input" {...register("subject", { required: "Subject is required" })} />
              {errors.subject && <span>{errors.subject.message}</span>}

              <textarea
                placeholder="Your Message"
                className="contact-input contact-textarea"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && <span>{errors.message.message}</span>}

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
