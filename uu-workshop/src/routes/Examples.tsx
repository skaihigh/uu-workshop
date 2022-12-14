import {
  DesigningForAll,
  DevelopingForAll,
  GoodVsBad,
  SiteSection,
  Toc,
  TrappedByKeyboard,
  WritingForAll,
} from '../components'

import '../../scss/Common.scss'
import '../../scss/Examples.scss'

export function Examples(): JSX.Element {
  const sectionNames = [
    ['Å skrive for alle', 'writing-for-all'],
    ['Å designe for alle', 'designing-for-all'],
    ['Å utvikle for alle', 'developing-for-all'],
    ['Trapped by keyboard', 'trapped-by-keyboard'],
    ['The good, the bad and the W3C compliant', 'good-vs-bad'],
  ]

  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger eksempler" id="toc" />
      <h1 id="maincontent">Eksempler</h1>
      <SiteSection title="Eksempler på bra (og dårlig) UU" anchorName="explain">
        <p>Lett å gå seg bort :)</p>
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

      <SiteSection title="Trapped by keyboard" anchorName="trapped-by-keyboard">
        <TrappedByKeyboard />
      </SiteSection>

      <SiteSection
        title="The good, the bad and the W3C compliant"
        anchorName="good-vs-bad"
      >
        <GoodVsBad />
      </SiteSection>
    </>
  )
}
