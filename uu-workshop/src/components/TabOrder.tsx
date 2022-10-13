import './TabOrder.scss'

export function TabOrder(): JSX.Element {
  return (
    // Her kommer det noe hvor tab-order er wack
    // NB: Feiler ikke a11y-test, men dårlig UX likevel > FORKLAR
    <div className="tab-order">
      <div className="tab-order__grid">
        <a href="#">1</a>
        <a href="#">3</a>
        <a href="#">2</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">4</a>
      </div>
    </div>
  )
}
