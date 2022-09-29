import { SiteSection } from '../components'
import {
  Personas,
  Statistics,
  Techniques,
  TheLaw,
  TheStandard,
  Tools,
} from '../slides'

export function Slides(): JSX.Element {
  return (
    <>
      <h1>Lysbilder</h1>
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
