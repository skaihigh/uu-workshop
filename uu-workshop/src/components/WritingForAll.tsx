export function WritingForAll(): JSX.Element {
  return (
    <div className="examples">
      <a
        href="https://www.w3.org/WAI/tips/writing/"
        rel="noreferrer"
        target="_blank"
      >
        Writing for Web Accessibility
      </a>

      <div>
        <div className="section">
          <h3>Bruk informative, unike overskrifter</h3>
          <ul>
            <li>
              Bruk en kort overskrift som beskriver sideinnholdet.
              <pre>Miles Norge</pre>
            </li>
            <li>
              Plasser den unike og mest relevante informasjonen først.
              <pre>Alle ansatte - Miles Norge</pre>
            </li>
            <li>
              Angi hvor langt brukeren har kommet, hvis siden er et av flere
              steg i en prosess.
              <pre>Registrer deg (steg 2 av 3) - Miles Norge</pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk overskrifter til å formidle mening og struktur</h3>
          <ul>
            <li>
              Bruk korte overskrifter til å beskrive og gruppere avsnitt som
              hører sammen.
              <pre>TODO</pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk beskrivende tekst på lenker</h3>
          <ul>
            <li>
              Skriv lenketekster som beskriver hva lenken gjør. Unngå tvetydig
              tekst, som &quot;Klikk her&quot; eller &quot;Les mer&quot;.
              <div className="flex-container">
                <pre className="white-bg">
                  <a>Klikk her</a> for mer informasjon om Miles
                </pre>
                <pre className="white-bg">
                  <a>Klikk her for mer informasjon om Miles</a>
                </pre>
              </div>
            </li>
            <li>
              Hvis lenken laster ned et dokument, er det en god idé å beskrive
              filtype og ev. filstørrelse.
              <pre className="white-bg">
                <a>Last ned dokument (PDF, 20MB)</a>
              </pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk beskrivende tekstalternativer for bilder</h3>
          <ul>
            <li>
              Skriv alternativ tekst som gir nok informasjon om hvert bilde, og
              hvilken funksjon bildet har.
              <br />
              For bilder som kun er til dekorasjon, er ikke dette nødvendig.
              <div className="flex-container">
                <pre className="column white-bg">
                  <img
                    src="/images/ikea.png"
                    alt="Skrutrekker og skiftenøkkel"
                  />

                  <p>Alternativ tekst for bildet:</p>
                  <p>&quot;Skrutrekker og skiftenøkkel&quot;</p>
                </pre>
                <pre className="column white-bg">
                  <img
                    src="/images/ikea.png"
                    alt="Du trenger en skrutrekker og en skiftenøkkel for å
                    sette sammen dette møbelet"
                  />

                  <p>Alternativ tekst for bildet:</p>
                  <p>
                    &quot;Du trenger en skrutrekker og en skiftenøkkel for å
                    sette sammen dette møbelet&quot;
                  </p>
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Create transcripts and captions for multimedia</h3>
          <ul>
            <li>
              TODO
              <pre>TODO</pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Gi klar veiledning</h3>
          <ul>
            <li>
              Pass på at instruksjoner, veiledninger og feilmeldinger er
              tydelige og lette å forstå. Unngå unødvendig teknisk språk.
              <div className="flex-container">
                <pre className="column white-bg">
                  <label htmlFor="password-bad-error-msg">Passord</label>
                  <input
                    id="password-bad-error-msg"
                    type="password"
                    className="input-error"
                  />
                  <p className="error-message">
                    Noe gikk feil (error code: 500)
                  </p>
                </pre>
                <pre className="column white-bg">
                  <label htmlFor="password-good-error-msg">Passord</label>
                  <input
                    id="password-good-error-msg"
                    type="password"
                    className="input-error"
                  />
                  <p className="error-message">
                    Passordet må være minst 8 tegn langt, og inneholde minst 1
                    stor bokstav
                  </p>
                </pre>
              </div>
            </li>
            <li>
              Beskriv krav til input-felter, som f.eks. datofelter.
              <pre className="column white-bg">
                <label htmlFor="date-format">Dato</label>
                <input id="date-format" type="date" />
                <p className="info-message">
                  Skriv inn en dato på formatet dd/mm/åååå
                </p>
              </pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Hold innhold klart og konsist</h3>
          <ul className="disc-list">
            <li>Skriv korte, tydelige setninger og avsnitt.</li>
            <li>Unngå unødvendige komplekse ord og fraser.</li>
            <li>
              Forkortelser må forklares og ikke være forkortet ved første gangs
              bruk. F.eks. Web Content Accessibility Guidelines (WCAG).
            </li>
            <li>
              Lag en ordliste for begreper som brukeren kanskje ikke forstår.
            </li>
            <li>Bruk lister for oversikt.</li>
            <li>
              Bruk bilder, illustrasjoner, video, lyd og/eller symboler, hvis
              disse bidrar til å tydeliggjøre meningen.
            </li>
          </ul>
          <ul>
            <li>
              <div className="flex-container">
                <pre className="column">
                  Samtidig med at visjonen tok form, definerte vi verdiene
                  «faglig autoritet og varme». Vi var fast bestemt på at våre
                  konsulenter skal holde et faglig høyt nivå eller ha et stort
                  potensial. Med «varme» mener vi først og fremst gode
                  mellommenneskelige egenskaper. Som konsulent må du raskt kunne
                  tilpasse deg nye miljøer og nye mennesker. Internt betyr
                  «varme» at du bryr deg om kollegene dine og bidrar til et godt
                  sosialt miljø. Disse verdiene skal alltid være retningsgivende
                  for Miles’ kortsiktige og langsiktige valg, beslutninger og
                  prioriteringer. Verdiene styrer vår adferd og skaper vår
                  kultur. Sammen med visjonen utgjør de selskapets DNA.
                </pre>
                <pre className="column">
                  Samtidig med at visjonen tok form, definerte vi verdiene
                  «faglig autoritet og varme». Vi var fast bestemt på at våre
                  konsulenter skal holde et faglig høyt nivå eller ha et stort
                  potensial.
                  <ul>
                    <li>
                      Med «varme» mener vi først og fremst gode
                      mellommenneskelige egenskaper.
                    </li>
                    <li>
                      Som konsulent må du raskt kunne tilpasse deg nye miljøer
                      og nye mennesker.
                    </li>
                    <li>
                      Internt betyr «varme» at du bryr deg om kollegene dine og
                      bidrar til et godt sosialt miljø.
                    </li>
                  </ul>
                  Disse verdiene skal alltid være retningsgivende for Miles’
                  kortsiktige og langsiktige valg, beslutninger og
                  prioriteringer. Verdiene styrer vår adferd og skaper vår
                  kultur. Sammen med visjonen utgjør de selskapets DNA.
                </pre>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
