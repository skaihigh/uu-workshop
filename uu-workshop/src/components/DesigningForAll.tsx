import './DesigningForAll.scss'

export function DesigningForAll(): JSX.Element {
  return (
    <div className="designing-for-all">
      <a
        href="https://www.w3.org/WAI/tips/designing/"
        rel="noreferrer"
        target="_blank"
      >
        Designing for Web Accessibility
      </a>

      <div>
        <div>Provide sufficient contrast between foreground and background</div>
        <div>Don’t use color alone to convey information</div>
        <div>Ensure that interactive elements are easy to identify</div>
        <div>Provide clear and consistent navigation options</div>
        <div>Ensure that form elements include clearly associated labels</div>
        <div>Provide easily identifiable feedback</div>
        <div>Use headings and spacing to group related content</div>
        <div>Create designs for different viewport sizes</div>
        <div>Include image and media alternatives in your design</div>
        <div>Provide controls for content that starts automatically</div>
      </div>
    </div>
  )
}
