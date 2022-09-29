import { SiteSection, Toc } from '../components'
import {
  Personas,
  Statistics,
  Techniques,
  TheLaw,
  TheStandard,
  Tools,
} from '../slides'

export function Slides(): JSX.Element {
  const sectionNames = [
    ['Personas', 'personas'],
    ['Statistikk', 'statistics'],
    ['Teknikker', 'techniques'],
    ['Standarden', 'thestandard'],
    ['Verktøy', 'tools'],
  ]
  return (
    <>
      <h1>Lysbilder</h1>
      <Toc sectionNames={sectionNames} title="Naviger lysbilder" id="slides" />
      <SiteSection title="Personas" anchorName="personas">
        <Personas />
      </SiteSection>
      <SiteSection title="Statistikk" anchorName="statistics">
        <Statistics />
      </SiteSection>
      <SiteSection title="Teknikker" anchorName="techniques">
        <Techniques />
      </SiteSection>
      <SiteSection title="Loven" anchorName="thelaw">
        <TheLaw />
      </SiteSection>
      <SiteSection title="Standarden" anchorName="thestandard">
        <TheStandard />
      </SiteSection>
      <SiteSection title="Verktøy" anchorName="tools">
        <Tools />
      </SiteSection>
    </>
  )
}