import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/data/content";

export function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="The Journal"
        description="Articles, recipes, and wellness tips to support your health journey."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-900/8 bg-white transition-all duration-300 hover:border-gold-500/40 hover:shadow-soft">
                  <div className="flex h-36 items-center justify-center bg-forest-900/[0.06]">
                    <span className="eyebrow text-forest-700">{post.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-medium tracking-wide text-ink-500">{post.date}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-forest-950">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 transition-colors group-hover:text-gold-600">
                      Read Article
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl rounded-2xl bg-forest-950 p-10 text-center md:p-14">
            <Mail className="mx-auto h-7 w-7 text-gold-400" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-cream md:text-3xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-3 text-cream/70">
              Get the latest articles, recipes, and wellness tips delivered to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-7 text-sm font-medium text-gold-400">
                Thank you for subscribing — welcome to the community!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mx-auto mt-7 flex max-w-sm gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3 text-sm text-cream placeholder-cream/40 outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-forest-950 transition-colors hover:bg-gold-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
