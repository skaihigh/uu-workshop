import { Link } from 'react-router-dom'
import { SiteSection, Toc } from '../components'
import {
  Personas,
  Statistics,
  Techniques,
  TheLaw,
  TheDeclaration,
  Tools,
} from '../slides'

export function Slides(): JSX.Element {
  const sectionNames = [
    ['Personas', 'personas'],
    ['Statistikk', 'statistics'],
    ['Tilgjengelighetserklæring', 'thedeclaration'],
    ['Regelverk og krav', 'thelaw'],
    ['Teknikker', 'techniques'],
    ['Verktøy', 'tools'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger lysbilder" id="toc" />
      <h1 id="maincontent">Lysbilder</h1>

      <SiteSection title="Forklaring" anchorName="explain">
        <blockquote lang="en-GB">
          The World Wide Web Consortium (W3C) is an international community that
          develops open standards to ensure the long-term growth of the Web.
        </blockquote>
        <p lang="fr">Sauf pour ce qui est écrit en mauvais français.</p>
        <Link to="https://www.w3.org">W3C</Link>
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection title="Personas" anchorName="personas">
        <Personas />
      </SiteSection>

      <SiteSection title="Statistikk" anchorName="statistics">
        <Statistics />
      </SiteSection>

      <SiteSection
        title="Tilgjengelighetserklæring"
        anchorName="thedeclaration"
      >
        <TheDeclaration />
      </SiteSection>

      <SiteSection title="Regelverk og krav" anchorName="thelaw">
        <TheLaw />
      </SiteSection>

      <SiteSection title="Teknikker" anchorName="techniques">
        <Techniques />
      </SiteSection>

      <SiteSection title="Verktøy" anchorName="tools">
        <Tools />
      </SiteSection>
    </>
  )
}
