import {
  SiteSection,
  Colors,
  Font,
  Input,
  TabOrder,
  Focus,
} from '../components'
import { Toc } from '../components/Toc'
export function Examples(): JSX.Element {
  const sectionNames = [
    ['Farger', 'colors'],
    ['Skrift', 'font'],
    ['Skjema', 'input'],
    ['Rekkefølge på elementer', 'taborder'],
    ['Fokus', 'focus'],
  ]

  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger eksempler" id="toc" />
      <h1 id="maincontent">Eksempler</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>
      <SiteSection title="Farger" anchorName="colors">
        <Colors />
      </SiteSection>

      <SiteSection title="Skrift" anchorName="font">
        <Font />
      </SiteSection>

      <SiteSection title="Skjema" anchorName="input">
        <Input />
      </SiteSection>

      <SiteSection title="Rekkefølge på elementer" anchorName="taborder">
        <TabOrder />
      </SiteSection>

      <SiteSection title="Fokus" anchorName="focus">
        <Focus />
      </SiteSection>
    </>
  )
}
