import { SiteSection, Toc } from '../components'
import { ScreenReader } from '../tasks/ScreenReader'
import { UserNotification } from '../tasks/UserNotification'
import { ZoomOut } from '../tasks/ZoomOut'
import { KeyboardNavigation } from '../tasks/KeyboardNavigation'

export function Tasks(): JSX.Element {
  const sectionNames = [
    ['Bruk skjermleser', 'task1'],
    ['Zoom ut', 'task2'],
    ['Naviger ved å kun bruke keyboardet', 'task3'],
    ['Varsel til bruker', 'task4'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger oppgaver" id="toc" />
      <h1 id="maincontent">Oppgaver</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection title="Lær å bruke skjermleser" anchorName="task1">
        <ScreenReader />
      </SiteSection>

      <SiteSection title="Zoom ut" anchorName="task2">
        <ZoomOut />
      </SiteSection>

      <SiteSection
        title="Naviger ved å kun bruke keyboardet"
        anchorName="task3"
      >
        <KeyboardNavigation />
      </SiteSection>

      <SiteSection title="Varsel til bruker" anchorName="task4">
        <UserNotification />
      </SiteSection>
    </>
  )
}
