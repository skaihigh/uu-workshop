export function Claim6(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <ul className="disc-list">
        <li>Stemmer, UU er ikke KUN utviklernes ansvar</li>
        <li>Blabla</li>
      </ul>
      <h3>
        {' '}
        Argumenter <i>mot</i>:
      </h3>
      <ul className="disc-list">
        <li>Jo, UU er OGSÅ utviklernes ansvar</li>
        <li>
          Ansvar for UU bør ligge på alle ledd, fra produkteierne i ‘toppen’ til
          utviklerne i ‘bunnen’
        </li>
        <li>Blablabla</li>
      </ul>
    </div>
  )
}
