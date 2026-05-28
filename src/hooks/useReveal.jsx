import { useEffect, useRef } from "react";

/**
 * Attach to a container ref — all children with .reveal / .reveal-left / .reveal-right
 * get the .visible class added when they scroll into view.
 *
 * Usage:
 *   const ref = useReveal();
 *   <section ref={ref}>
 *     <h2 className="reveal">Title</h2>
 *     <p  className="reveal delay-2">Body</p>
 *   </section>
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
