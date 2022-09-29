import './SiteSection.scss'

export interface SiteSectionProps {
  title: string
  children: React.ReactNode
  anchorName: string
}

export function SiteSection({
  title,
  anchorName,
  children,
}: SiteSectionProps): JSX.Element {
  return (
    <>
      <section>
        <a id={anchorName} href={`#${anchorName}`} title={title}>
          <h2>{title}</h2>
        </a>
        {children}
      </section>
    </>
  )
}
