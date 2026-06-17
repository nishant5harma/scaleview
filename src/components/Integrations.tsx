import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INTEGRATIONS = [
  { name: "AWS", logo: "/images/logos/aws.svg" },
  { name: "Azure", logo: "/images/logos/azure.svg" },
  { name: "Google Cloud", logo: "/images/logos/googlecloud.svg" },
  { name: "Snowflake", logo: "/images/logos/snowflake.svg" },
  { name: "Databricks", logo: "/images/logos/databricks.svg" },
  { name: "Datadog", logo: "/images/logos/datadog.svg" },
  { name: "Terraform", logo: "/images/logos/terraform.svg" },
  { name: "GitHub", logo: "/images/logos/github.svg" },
  { name: "Okta", logo: "/images/logos/okta.svg" },
  { name: "Slack", logo: "/images/logos/slack.svg" },
  { name: "Cloudflare", logo: "/images/logos/cloudflare.svg" },
  { name: "HashiCorp", logo: "/images/logos/hashicorp.svg" },
];

export default function Integrations() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-navy py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Integrations"
          title="Plugs into the stack"
          highlight="you already run"
          description="Native interoperability with the platforms enterprises actually use — no vendor lock-in, no rewrites."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INTEGRATIONS.map(({ name, logo }, i) => (
            <Reveal key={name} delay={(i % 4) * 0.06}>
              <div className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                </span>
                <span className="font-display text-base font-semibold tracking-tight text-white/90">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
