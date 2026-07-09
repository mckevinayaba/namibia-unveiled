import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { DarkFrontierProduct } from "@/types/experiences";

export function DarkFrontierProductCard({ product }: { product: DarkFrontierProduct }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
          {product.duration}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{product.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-white/70">{product.blurb}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/50">Ideal for</p>
        <p className="mt-1 text-[13px] text-white/70">{product.idealGuest}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm font-medium text-[color:var(--gold-soft)]">{product.price}</span>
          <Link
            to="/book"
            search={{ interest: product.title }}
            className="inline-flex items-center gap-1.5 text-sm text-white"
          >
            Enquire <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
