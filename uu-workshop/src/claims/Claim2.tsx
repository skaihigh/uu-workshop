export function Claim2(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>Det finnes verktøy, men disse kan ikke klare alt</li>
          <li>...</li>
        </ul>
      </details>
      <h3>
        Argumenter <i>mot</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Burde denne ‘spesialkompetansen’ egentlig være ‘grunnleggende’
            kompetanse? Kan man påstå man ikke ‘kan’ programmere før man
            inkluderer UU-hensyn i kodestilen sin?
          </li>
          <li>...</li>
        </ul>
      </details>
    </div>
  )
}
