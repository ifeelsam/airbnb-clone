import Image from "next/image";
import { listing } from "@/lib/data";
import { Icon } from "./icons";

export function HostSection() {
  const { host, rating, reviewCount } = listing;
  return (
    <section className="border-b border-abb-border-light py-12">
      <h2 className="mb-8 text-[22px] font-semibold text-abb-fg">
        Meet your Host
      </h2>

      <div className="grid gap-8 md:grid-cols-[380px_1fr]">
        {/* Host card */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <span className="relative flex h-28 w-28 items-center justify-center">
                <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#1e4d3f]">
                  <Image
                    src="/photos/Mirashya-Homes.png"
                    alt={`${host.name} logo`}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="absolute bottom-0.5 right-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-abb-rausch text-white ring-4 ring-white">
                  <Icon.Trophy size={16} />
                </span>
              </span>
              <p className="mt-3 text-2xl font-semibold text-abb-fg">
                {host.name}
              </p>
              <p className="text-sm font-medium text-abb-fg">Superhost</p>
            </div>
            <div className="flex flex-col gap-4 pr-2">
              <div>
                <p className="text-xl font-semibold text-abb-fg">{reviewCount}</p>
                <p className="text-[11px] text-abb-fg">Reviews</p>
              </div>
              <span className="h-px w-full bg-abb-border-light" />
              <div>
                <p className="flex items-center gap-1 text-xl font-semibold text-abb-fg">
                  {rating} <Icon.Star size={12} />
                </p>
                <p className="text-[11px] text-abb-fg">Rating</p>
              </div>
              <span className="h-px w-full bg-abb-border-light" />
              <div>
                <p className="text-xl font-semibold text-abb-fg">2</p>
                <p className="text-[11px] text-abb-fg">Years hosting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Host details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-lg font-semibold text-abb-fg">
              Co-hosts
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {["Aarav", "Riya", "Sana", "Kabir", "Neha", "Dev"].map(
                (name, i) => (
                  <div key={name} className="flex items-center gap-2">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{
                        backgroundColor: [
                          "#c1846d",
                          "#6d8fc1",
                          "#8d6dc1",
                          "#6dc19e",
                          "#c16d9e",
                          "#c1a96d",
                        ][i],
                      }}
                    >
                      {name.charAt(0)}
                    </span>
                    <span className="text-sm text-abb-fg">{name}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <p className="text-[15px] text-abb-fg">Response rate: 100%</p>
            <p className="mt-1 text-[15px] text-abb-fg">
              Responds within an hour
            </p>
          </div>

          <button className="w-fit rounded-lg bg-abb-fg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Message host
          </button>

          <p className="max-w-xl text-xs leading-5 text-abb-muted">
            To help protect your payment, always use Airbnb to send money and
            communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
