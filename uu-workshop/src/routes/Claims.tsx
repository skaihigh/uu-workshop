import {
  Claim1,
  Claim2,
  Claim3,
  Claim4,
  Claim5,
  Claim6,
  Claim7,
  Conclusion,
} from '../claims'

import { SiteSection, Toc } from '../components'

import '../../scss/Common.scss'
import '../../scss/Claims.scss'

export function Claims(): JSX.Element {
  const sectionNames = [
    ['UU krever for mye ressurser å implementere', 'claim-1-anchor'],
    ['UU stiller for store krav til den enkelte utvikler', 'claim-2-anchor'],
    [
      'Brukergruppen vår har ikke nedsatt funksjonsevne, så vi trenger ikke tenke på UU',
      'claim-3-anchor',
    ],
    [
      'Vi lager et system som kun skal brukes internt, så vi trenger ikke tenke på UU',
      'claim-4-anchor',
    ],
    [
      'Man trenger ikke å implementere alle anbefalingene fra WAI / overholde alle reglene fra WCAG',
      'claim-5-anchor',
    ],
    ['UU er ikke utviklernes ansvar', 'claim-6-anchor'],
    [
      'Det spiller ingen rolle om man bruker egendefinerte komponenter i stedet for HTML-tags',
      'claim-7-anchor',
    ],
    ['Konklusjon?', 'conclusion-anchor'],
  ]

  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger påstander" id="toc" />
      <h1 id="maincontent">Påstander</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection
        title="UU krever for mye ressurser å implementere"
        anchorName="claim-1-anchor"
      >
        <Claim1 />
      </SiteSection>

      <SiteSection
        title="UU stiller for store krav til den enkelte utvikler"
        anchorName="claim-2-anchor"
      >
        <Claim2 />
      </SiteSection>

      <SiteSection
        title="Brukergruppen vår har ikke nedsatt funksjonsevne, så vi trenger ikke tenke på UU"
        anchorName="claim-3-anchor"
      >
        <Claim3 />
      </SiteSection>

      <SiteSection
        title="Vi lager et system som kun skal brukes internt, så vi trenger ikke tenke på UU"
        anchorName="claim-4-anchor"
      >
        <Claim4 />
      </SiteSection>

      <SiteSection
        title="Man trenger ikke å implementere alle anbefalingene fra WAI / overholde alle reglene fra WCAG"
        anchorName="claim-5-anchor"
      >
        <Claim5 />
      </SiteSection>

      <SiteSection
        title="UU er ikke utviklernes ansvar"
        anchorName="claim-6-anchor"
      >
        <Claim6 />
      </SiteSection>

      <SiteSection
        title="Det spiller ingen rolle om man bruker egendefinerte komponenter i stedet for HTML-tags"
        anchorName="claim-7-anchor"
      >
        <Claim7 />
      </SiteSection>

      <SiteSection title="Konklusjon?" anchorName="conclusion-anchor">
        <Conclusion />
      </SiteSection>
    </>
  )
}
