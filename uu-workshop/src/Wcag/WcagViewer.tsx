import React, { useState } from 'react'
import styles from './WcagViewer.module.scss'

interface ResultIssue {
  code: string
  context: string
  message: string
  selector: string
  type: string
  typeCode: number
}

interface Results {
  documentTitle: string
  pageUrl: string
  issues: ResultIssue[]
}

function WcagIssues(props: { issue: ResultIssue }): JSX.Element {
  const { issue } = props

  return (
    <ul className={styles.issue}>
      <li>
        <span>Code:</span>
        <span> {issue.code}</span>
      </li>
      <li>
        <span>Message:</span>
        <span>{issue.message}</span>
      </li>
      <li>
        <span>Context:</span>
        <span>{issue.context}</span>
      </li>
      <li>
        <span>Selector:</span>
        <span> {issue.selector}</span>
      </li>
      <li>
        <span>Type:</span>
        <span>{issue.type}</span>
      </li>
      <li>
        <span>TypeCode:</span>
        <span>{issue.typeCode}</span>
      </li>
    </ul>
  )
}

function WcagViewer(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [pa11yResult, setPa11yResult] = useState({} as Results)
  const SHOW_HTML = false

  if (import.meta.hot != null) {
    import.meta.hot.on('pa11y:updated', (data: Results) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (data?.issues != null && data.issues.length > 0) {
        data?.issues?.forEach((issue) => {
          document.querySelectorAll(issue.selector).forEach((element) => {
            element.classList.add(styles.issue_warning)
            console.warn(
              `WCAG fail on guidline: ${issue.code}, Error: ${issue.message}`,
              element
            )
          })
        })
        setPa11yResult(data)
      }
    })
  }

  return (
    <>
      {SHOW_HTML && (
        <section className="wcag-issues">
          <h2>Wcag issues</h2>
          {pa11yResult.issues?.map((issue, index) => {
            return (
              <div key={index}>
                <WcagIssues issue={issue} />
              </div>
            )
          })}
        </section>
      )}
    </>
  )
}

export default WcagViewer
