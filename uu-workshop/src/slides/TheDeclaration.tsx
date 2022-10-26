export function TheDeclaration(): JSX.Element {
  return (
    <>
      <h3>Hva er tilgjengelighetserklæringen?</h3>
      <a
        href="https://www.uutilsynet.no/tilgjengelighetserklaering/tilgjengelighetserklaering/1127"
        target="_blank"
        rel="noreferrer"
      >
        Tilgjengelighetserklæring (UUtilsynet)
      </a>
      <br />
      <br />
      <ul className="disc-list">
        <li>
          Alle virksomheter i offentlig sektor plikter å ha på plass en
          tilgjengelighetserklæring på sine nettsteder innen 1. februar 2023.
        </li>
        <li>
          Minstekravene er{' '}
          <a
            href="https://www.uutilsynet.no/tilgjengelighetserklaering/wcag-sjekkliste-utfylling-av-tilgjengelighetserklaering/1333"
            target="_blank"
            rel="noreferrer"
            aria-label="Link til sjekkliste for minstekravene for tilgjengelighetserklæring"
            title="Link til sjekkliste for minstekravene for tilgjengelighetserklæring"
          >
            de 35 WCAG-kravene som gjelder fra før, i tillegg til de 12 nye
          </a>{' '}
          som gjelder fra februar 2023.
        </li>
        <li>
          Digitaliseringsdirektoratet har utviklet en felles løsning (lansert 3.
          oktober 2022) for offentlig sektor, som er obligatorisk å bruke for
          offentlige virksomheter.
        </li>
        <li>
          Virksomhetene må fylle ut et digitalt skjema (på{' '}
          <a href="https://uustatus.no/" target="_blank" rel="noreferrer">
            uustatus.no
          </a>
          ), som de etterpå må publisere på nettstedet sitt.
        </li>
        <li>Ikke samme krav til apper ennå.</li>
        <li>
          &quot;Kravet gjeld for verksemder i offentleg sektor og andre
          verksemder som utfører oppgåver på vegner av det offentlege, og som er
          heilt eller delvis finansiert av det offentlege. I tillegg omfattar
          kravet private verksemder som treff vedtak etter forvaltingslova og
          private verksemder etter avtale med og på vegner av det
          offentlege.&quot;
        </li>
      </ul>

      <h3>Hvem er tilgjengelighetserklæringen for?</h3>
      <div className="flex-container">
        <div className="column white-bg">
          <h4>Brukeren</h4>
          <>
            Tilgjengelighetserklæringen er først og fremst til for brukeren. Den
            viser brukeren i hvilken grad et nettsted eller en app er universelt
            utformet. Brukeren får informasjon om brudd på kravene, hvilke
            utfordringer det fører til, og forklaring på hvorfor virksomheten
            ikke følger regelverket. Brukeren melder fra om feil og mangler
            direkte til virksomheten i erklæringen, og sender eventuelt klage
            til Diskrimineringsnemnda. Brukeren kan derfor påvirke universell
            utforming av nettsteder og apper.
            <br />
            <br />
          </>
        </div>
        <div className="column white-bg">
          <h4>Virksomheten</h4>
          <>
            Tilgjengelighetserklæringen vil sørge for at virksomheten setter seg
            inn i kravene og har et bevisst forhold til om man følger
            regelverket eller ikke. Å få opp status hjelper virksomheten å
            prioritere universell utforming. Via tilbakemeldingsfunksjonen får
            virksomheten tilbakemeldingar fra reelle brukere om hvilke problemer
            og utfordringer de møter. Virksomheten skal svare brukeren og bruke
            tilbakemeldingene de får til å forbedre universell utforming og øke
            etterlevelsen av kravene.
            <br />
            <br />
          </>
        </div>
        <div className="column white-bg">
          <h4>Tilsynet</h4>
          <>
            Tilsynet bruker tilgjengelighetserklæringen som en informasjonskilde
            i kontroll, rettleding, samt statistikk og analyse, for eksempel
            knyttet til status for etterlevelse og utvalg av virksomheter til
            tilsyn.
            <br />
            <br />
          </>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}
