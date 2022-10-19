import {
  Colors,
  DesigningForAll,
  DevelopingForAll,
  EnoughIsEnough,
  Focus,
  Font,
  GoodVsBad,
  Graphics,
  Input,
  SiteSection,
  TabOrder,
  Toc,
  TrappedByKeyboard,
  WritingForAll,
} from '../components'

export function Examples(): JSX.Element {
  const sectionNames = [
    ['Å skrive for alle', 'writing-for-all'],
    ['Å designe for alle', 'designing-for-all'],
    ['Å utvikle for alle', 'developing-for-all'],
    ['Farger', 'colors'],
    ['Skrift', 'font'],
    ['Skjema', 'input'],
    ['Rekkefølge på elementer', 'taborder'],
    ['Trapped by keyboard', 'trapped-by-keyboard'],
    ['Fokus', 'focus'],
    ['Grafikk og bilder', 'graphics'],
    ['The good, the bad and the W3C compliant', 'good-vs-bad'],
    ['Nok er nok?', 'enough-is-enough'],
  ]

  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger eksempler" id="toc" />
      <h1 id="maincontent">Eksempler</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection title="Å skrive for alle" anchorName="writing-for-all">
        <WritingForAll />
      </SiteSection>

      <SiteSection title="Å designe for alle" anchorName="designing-for-all">
        <DesigningForAll />
      </SiteSection>

      <SiteSection title="Å utvikle for alle" anchorName="developing-for-all">
        <DevelopingForAll />
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

      <SiteSection title="Trapped by keyboard" anchorName="trapped-by-keyboard">
        <TrappedByKeyboard />
      </SiteSection>

      <SiteSection title="Fokus" anchorName="focus">
        <Focus />
      </SiteSection>

      <SiteSection title="Grafikk og bilder" anchorName="graphics">
        <Graphics />
      </SiteSection>

      <SiteSection
        title="The good, the bad and the W3C compliant"
        anchorName="good-vs-bad"
      >
        <GoodVsBad />
      </SiteSection>

      <SiteSection title="Nok er nok?" anchorName="enough-is-enough">
        <EnoughIsEnough />
      </SiteSection>
    </>
  )
}
