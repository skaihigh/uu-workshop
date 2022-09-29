import { SiteSection, Toc } from '../components'

export function WhoWeAre(): JSX.Element {
  const sectionNames = [
    ['Wenche', 'wenche'],
    ['Henriette', 'henriette'],
    ['Christian', 'christian'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger oss" id="whoweare" />
      <h1>Om oss</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>
      <SiteSection title="Wenche" anchorName="#wenche">
        <p>Wenche tata!</p>
      </SiteSection>
      <SiteSection title="Henriette" anchorName="#henriette">
        <p>Henriette voila!</p>
      </SiteSection>
      <SiteSection title="Christian" anchorName="#christian">
        <p>Christian badambish!</p>
      </SiteSection>
    </>
  )
}
