// import { Link } from 'react-router-dom'
import { SiteSection, Toc } from '../components'
import { Personas, Statistics, TheLaw, TheDeclaration } from '../slides'

export function Slides(): JSX.Element {
  const sectionNames = [
    ['Personas', 'personas'],
    ['Statistikk', 'statistics'],
    ['Tilgjengelighetserklæring', 'thedeclaration'],
    ['Regelverk og krav', 'thelaw'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger fakta" id="toc" />
      <h1 id="maincontent">Fakta</h1>

      <SiteSection title="Hva er universell utforming?" anchorName="explain">
        {/* <blockquote lang="en-GB">
          The World Wide Web Consortium (W3C) is an international community that
          develops open standards to ensure the long-term growth of the Web.
        </blockquote>
        <p lang="fr">Sauf pour ce qui est écrit en mauvais français.</p>
        <Link to="https://www.w3.org">W3C</Link>
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p> */}
        <p>Noen bud?</p>
        <details>
          <summary>?</summary>
          <strong>Store norske leksikon:</strong>
          <br />
          &quot;Universell utforming er det å planlegge produkter, omgivelser,
          programmer og tjenester slik at de kan brukes av så mange mennesker
          som mulig på en likeverdig måte. Hensikten er å oppnå like muligheter
          til samfunnsdeltakelse og motvirke diskriminering på grunnlag av
          nedsatt funksjonsevne.&quot;
        </details>
        <br />
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
    </>
  )
}
