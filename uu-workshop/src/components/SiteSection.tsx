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
        <h2 id={anchorName}>{title}</h2>
        {children}
      </section>
    </>
  )
}
