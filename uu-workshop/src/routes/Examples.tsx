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
    ['[Tab]-rekkefølge', 'taborder'],
    ['Fokus', 'focus'],
  ]

  return (
    <>
      <h1>Eksempler</h1>
      <Toc
        sectionNames={sectionNames}
        title="Naviger eksempler"
        id="examples"
      />
      <SiteSection title="Farger" anchorName="colors">
        <Colors />
      </SiteSection>

      <SiteSection title="Skrift" anchorName="font">
        <Font />
      </SiteSection>

      <SiteSection title="Skjema" anchorName="input">
        <Input />
      </SiteSection>

      <SiteSection title="[Tab]-rekkefølge" anchorName="taborder">
        <TabOrder />
      </SiteSection>

      <SiteSection title="Fokus" anchorName="focus">
        <Focus />
      </SiteSection>
    </>
  )
}
