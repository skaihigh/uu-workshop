import { SiteSection, Toc } from '../components'
import { ScreenReader } from '../tasks/ScreenReader'
// import { UserNotification } from '../tasks/UserNotification'
import { ZoomOut } from '../tasks/ZoomOut'
import { KeyboardNavigation } from '../tasks/KeyboardNavigation'
import { Validate } from '../tasks/Validate'
import { TakeAway } from '../tasks/TakeAway'

export function Tasks(): JSX.Element {
  const sectionNames = [
    ['Valider en side', 'task1'],
    ['Bruk skjermleser', 'task2'],
    ['Naviger ved å kun bruke keyboardet', 'task3'],
    ['Zoom ut', 'task4'],
    // ['Varsel til bruker', 'task4'],
    ['Take-away?', 'task5'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger oppgaver" id="toc" />
      <h1 id="maincontent">Oppgaver</h1>

      <SiteSection
        title="Sett ned funksjonsevnen for en stund"
        anchorName="explain"
      >
        <p>... og gå i noen andres sko</p>
      </SiteSection>

      <SiteSection title="Valider en side" anchorName="task1">
        <Validate />
      </SiteSection>

      <SiteSection title="Lær å bruke skjermleser" anchorName="task2">
        <ScreenReader />
      </SiteSection>

      <SiteSection
        title="Naviger ved å kun bruke keyboardet"
        anchorName="task3"
      >
        <KeyboardNavigation />
      </SiteSection>

      <SiteSection title="Zoom ut" anchorName="task4">
        <ZoomOut />
      </SiteSection>

      {/* TODO: Christian - hva er poenget med denne oppgaven? */}
      {/* <SiteSection title="Varsel til bruker" anchorName="task4">
        <UserNotification />
      </SiteSection> */}

      <SiteSection title="Take-away?" anchorName="task5">
        <TakeAway />
      </SiteSection>
    </>
  )
}
