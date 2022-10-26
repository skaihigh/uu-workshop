export function Claim1(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Ja, det krever mer ressurser å sikre seg at ting blir gjort
            ordentlig
          </li>
          <li>Ja, det krever at man setter seg inn i regler og anbefalinger</li>
          <li> Blabla</li>
        </ul>
      </details>
      <h3>
        Argumenter <i>mot</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Når ting blir gjort ordentlig fra starten, kreves det mindre
            ressurser i lengden (vedlikehold og videreutvikling)
          </li>
          <li>Blabla</li>
        </ul>
      </details>
    </div>
  )
}
