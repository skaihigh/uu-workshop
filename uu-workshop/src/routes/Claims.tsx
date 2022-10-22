import { Claim1, Claim2, Claim3 } from '../claims'

import { SiteSection, Toc } from '../components'

export function Claims(): JSX.Element {
  const sectionNames = [
    ['Påstand 1 blabla', 'claim-1-anchor'],
    ['Påstand 2 blabla', 'claim-2-anchor'],
    ['Påstand 3 blabla', 'claim-3-anchor'],
  ]

  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger påstander" id="toc" />
      <h1 id="maincontent">Påstander</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection title="Påstand 1 blabla" anchorName="claim-1-anchor">
        <Claim1 />
      </SiteSection>

      <SiteSection title="Påstand 2 blabla" anchorName="claim-2-anchor">
        <Claim2 />
      </SiteSection>

      <SiteSection title="Påstand 3 blabla" anchorName="claim-3-anchor">
        <Claim3 />
      </SiteSection>
    </>
  )
}
