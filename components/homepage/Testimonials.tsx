import Image from "next/image";

const testimonial = {
  quote:
    "I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see offers waiting. It feels like cheating. Had 3 offers on the table simultaneously.",
  name: "Tom Wilson",
  role: "Junior Developer",
};

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-20">
      <div className="text-center text-xs font-medium uppercase tracking-wide text-info">
        Success Stories
      </div>

      <div className="mx-auto mt-6 max-w-2xl text-center text-xl font-medium leading-snug text-text-darkest">
        &ldquo;{testimonial.quote}&rdquo;
      </div>

      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <Image
          src={"/images/user-icon.png"}
          alt={testimonial.name}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="text-left text-sm">
          <div className="font-semibold text-text-darkest">{testimonial.name}</div>
          <div className="text-text-secondary">{testimonial.role}</div>
        </div>
      </div>
    </section>
  );
}
