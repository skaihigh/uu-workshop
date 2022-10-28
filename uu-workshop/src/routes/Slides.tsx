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
          <a
            href="https://snl.no/universell_utforming"
            target="_blank"
            rel="noreferrer"
          >
            Store norske leksikon:
          </a>
          <br />
          &quot;Universell utforming er det å planlegge produkter, omgivelser,
          programmer og tjenester slik at de kan brukes av så mange mennesker
          som mulig på en likeverdig måte. Hensikten er å oppnå like muligheter
          til samfunnsdeltakelse og motvirke diskriminering på grunnlag av
          nedsatt funksjonsevne.&quot;
          <br />
          <br />
          <i>Selvfølge? Så hvorfor gjør vi det ikke bare?</i>
        </details>
        <br />
        <h3>Ordbok</h3>
        <p>
          <strong>WCAG</strong>:{' '}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noreferrer"
            title="Web Content Accessibility Guidelines"
          >
            Web Content Accessibility Guidelines
          </a>
          <br />
          <i>
            WCAG documents explain how to make web content more accessible to
            people with disabilities.
          </i>
        </p>
        <p>
          <strong>W3C</strong>:
          <a
            href="https://www.w3.org/"
            target="_blank"
            rel="noreferrer"
            title="World Wide Web Consortium"
          >
            World Wide Web Consortium
          </a>
          <br />
          <i>
            The World Wide Web Consortium is the main international standards
            organization for the World Wide Web.
          </i>
        </p>
        <p>
          <strong>WAI</strong>:
          <a
            href="https://www.w3.org/WAI/"
            target="_blank"
            rel="noreferrer"
            title="Web Accessibility Initiative"
          >
            Web Accessibility Initiative
          </a>
          <br />
          <i>
            The W3C Web Accessibility Initiative (WAI) develops standards and
            support materials to help you understand and implement
            accessibility.
          </i>
        </p>
        <p>
          <strong>UU-tilsynet</strong>:
          <a
            href="https://www.uutilsynet.no/"
            target="_blank"
            rel="noreferrer"
            title="Tilsynet for universell utforming av ikt"
          >
            Tilsynet for universell utforming av ikt
          </a>
          <br />
          <i>
            Tilsynet for universell utforming av ikt jobbar for eit samfunn utan
            digitale barrierar og rettleier om universell utforming av ikt.
          </i>
        </p>
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
