interface PageIntroProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageIntro({eyebrow, title, description}: PageIntroProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container-width">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-navy md:text-6xl">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>}
      </div>
    </section>
  )
}
