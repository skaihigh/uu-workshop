import { useState } from 'react'

export function DesigningForAll(): JSX.Element {
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className="examples">
      <a
        href="https://www.w3.org/WAI/tips/designing/"
        rel="noreferrer"
        target="_blank"
      >
        Designing for Web Accessibility
      </a>

      <div>
        <div className="section">
          <h3>
            Pass på at det er tilstrekkelig kontrast mellom forgrunn og bakgrunn
          </h3>
          <ul>
            <li>
              <div className="colors__panels">
                <div className="colors__panels__panel colors__panels__panel--low-contrast">
                  Det var en gang
                  <br />
                  Lisa gikk til skolen
                  <br />
                  Gubben Noa beit i tåa
                  <br />
                  Tenk å lese masse tekst med denne fargekontrasten
                  <br />
                  Io (eller Jupiter I) er den innerste av de fire galileiske
                  månene og den femte av månene som kretser rundt planeten
                  Jupiter
                  <br />
                  Sliten i øynene etter hvert?
                  <br />
                  Programmering består av å designe, skrive, teste, feilsøke og
                  vedlikeholde kildekoden til et program som skal tolkes av en
                  datamaskin
                  <br />
                  Tenk hvis du var svaksynt
                </div>

                <div className="colors__panels__panel colors__panels__panel--dark-mode">
                  Mange (nerder) liker 'dark mode', og hvis sort-på-hvit gir nok
                  kontrast, gjør vel hvit-på-sort også det?
                  <br />
                  <br />
                  <a href="#">
                    Her er et link med standard blåfarge, kan du se det?
                  </a>
                  <br />
                  <br />
                  Denne fargekontrasten vil ikke feile i accessibility-tester.
                  <br />
                  <br />
                  Visste du at folk med dysleksi generelt syns det er
                  vanskeligere å lese lys tekst mot mørk bakgrunn?
                </div>

                <div className="colors__panels__panel colors__panels__panel--light-mode">
                  Denne teksten er (kanskje) lettere å lese, men har for lav
                  kontrast mot bakgrunnen og vil feile i accessibility-test.
                  <br />
                  <br />
                  <a href="#">
                    Her er et link med standard blåfarge, kan du se det?
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Ikke bruk farge alene for å formidle informasjon</h3>
          <ul>
            <li>
              <div className="colors">
                <div className="flex-container">
                  <pre className="white-bg column">
                    <label htmlFor="username-good-color">Brukernavn</label>
                    <input id="username-good-color" type="text" />

                    <label htmlFor="password-good-color">Passord</label>
                    <input
                      id="password-good-color"
                      type="password"
                      className="input-error"
                    />
                    <p className="error-message">
                      Dette er en feilmelding i en typisk rød farge
                    </p>
                  </pre>
                  <pre className="white-bg column">
                    <label htmlFor="username-bad-color">Brukernavn</label>
                    <input id="username-bad-color" type="text" />

                    <label htmlFor="password-bad-color">Passord</label>
                    <input
                      id="password-bad-color"
                      type="password"
                      className="input-error input-error--color-blind"
                    />
                    <p className="error-message error-message--color-blind">
                      For en med rød/grønn-fargeblindhet, vil den røde
                      kantlinjen og teksten se ca. sånn ut.
                      <br />
                      Kan du se at det er feil i feltet?
                      {/* https://www.color-blindness.com/coblis-color-blindness-simulator/ */}
                    </p>
                  </pre>
                </div>
                <div className="blue">
                  Spiller det noen rolle hvilken farge teksten har? (Dette er
                  ikke en lenke)
                </div>

                <div className="colors__dark-and-smaller">
                  Eller hvor stor den er? Dette er en vanlig skriftstørrelse.
                  Hverken størrelse eller fargekontrast vil feile i a11y-test -
                  men er det brukervennlig?
                </div>

                <div className="colors__too-many">
                  <div>Flere</div>
                  <div>farger</div>
                  <div>gjør</div>
                  <div>web</div>
                  <div>mer</div>
                  <div>festlig</div>
                  <div>?</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Pass på at interaktive elementer er lette å identifisere</h3>
          <ul>
            <li>
              <pre className="white-bg">
                <a href="#">En lenke bør se ut som en lenke</a>{' '}
                <a href="#" className="not-link-like">
                  og ikke som vanlig tekst
                </a>
                <div className="underline blue">
                  Ikke så smart å style vanlig tekst så det ser ut som et link
                </div>
              </pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk tydelig og konsistent navigasjon</h3>
          <ul>
            <li>
              Tilby mer enn én type navigasjon, som menyer, søk, site map,
              breadcrumbs og tydelige overskrifter. Pass på at menyer er
              konsistente fra side til side.
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>
            Pass på at input-felter i skjema har tydelige labels tilknyttet
          </h3>
          <div>
            Alle input-felter må ha en tilknyttet label som beskriver hva slags
            innhold som skal inn i feltet. Label og input-felt bør plasseres i
            umiddelbar nærhet av hverandre.
          </div>
          <br />
          <br />
          <ul className="input">
            <li>
              Dette er en input som mangler label
              <input type="text" id="label-input1" name="label-input1" />
            </li>
            <li>
              Hva skal stå i denne, tro?
              <input type="text" id="label-input2" name="label-input2" />
            </li>
            <li>
              For en skjermleser er det ingen sammenheng mellom denne teksten og
              input-feltet
              <input type="text" id="label-input3" name="label-input3" />
            </li>
            <li style={{ marginBottom: '20rem' }}>
              Input-feltet kunne like så godt ha stått
            </li>
            <li style={{ marginBottom: '4rem' }}>
              her <input type="text" id="label-input4" name="label-input4" />
            </li>
            <li>
              (bilde med tekst &quot;Send inn skjema&quot; og onClick-event som
              lizm sender inn/åpner popup med forklaring om at skjermleser ikke
              vet at dette bildet sender inn skjema, fordi det er et bilde og
              ikke en submit-knapp)
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Gi brukeren feedback på handlinger</h3>
          <div>
            Gi brukeren feedback når hen trykker på en knapp, et skjema blir
            sendt inn, hvis noe går galt, eller hvis noe er endret på siden.
            Meldingene til bruker må være lette å tyde. Hvis meldingen beskriver
            en handling som brukeren <i>må</i> foreta seg, er det ekstra viktig
            å presentere meldingen på en tydelig måte.
          </div>
          <br />
          <ul>
            <li>
              <button onClick={() => setShowFeedback(!showFeedback)}>
                Lagre
              </button>
              {showFeedback && (
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'lightgreen',
                    color: '#000',
                    padding: '1rem',
                    width: '12rem',
                    borderRadius: '2px',
                    fontStyle: 'italic',
                  }}
                >
                  Yes! Data er lagret
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk overskrifter og avstand til å gruppere relatert innhold</h3>
          <ul className="disc-list">
            <li>
              Luft er bra! Ikke vær redd for å ha avstand mellom elementer, det
              gir ro og oversikt.
            </li>
            <li>Plasser elementer som hører sammen i nærheten av hverandre.</li>
          </ul>
        </div>
        <div className="section">
          <h3>
            Design for forskjellige viewport-størrelser (responsivt design)
          </h3>
          <ul className="disc-list">
            <li>
              Designet må fungere på forskjellige enheter, som f.eks. en
              mobiltelefon, et nettbrett og en laptop.
            </li>
            <li>
              Tenk over hvilke elementer som MÅ være der, og start med å
              plassere disse så de er lesbare og tydelige på en liten skjerm.
            </li>
            <li>
              Tenk over de forskjellige konvensjonene som finnes for ulike
              enheter, som f.eks. meny som (hamburger)ikon på mobil.
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Inkluder alternativer til bilder og media</h3>
          <div>
            Bilder og grafikk kan ikke tydes av en skjermleser. Ha derfor alltid
            alternativer som forklarer ikke-tekstlig innhold, som f.eks.
            <ul className="disc-list">
              <li>Lenker til transkripsjon av audio</li>
              <li>Lenker til lydbeskrivelser av videoer</li>
              <li>Tekst sammen med ikoner og grafiske knapper</li>
              <li>Bildetekster og beskrivelser for tabeller og grafer</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <h3>Ha tydelige kontroller for innhold som starter automatisk</h3>
          <div>
            Animasjoner og lyd som starter automatisk (er en uting, men hvis man
            absolutt MÅ ha dem med, så er det viktig at de) må ha tydelige
            kontroller for å kunne stoppe og starte. Dette gjelder bl.a. for
            bildeslideshow, bakgrunnslyder og video.
          </div>
        </div>
      </div>
    </div>
  )
}
