import { Toc } from '../components'

export function Tasks(): JSX.Element {
  const sectionNames = [['Oppgave 1', 'task1']]
  return (
    <>
      <h1>Oppgaver</h1>
      <Toc
        sectionNames={sectionNames}
        title="Naviger eksempler"
        id="examples"
      />
    </>
  )
}
