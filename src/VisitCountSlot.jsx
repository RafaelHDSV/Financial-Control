import { VisitCountFooter } from '@vieira/analytics/react'

export function VisitCountSlot() {
  return (
    <div style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
      <VisitCountFooter projectKey="controle-financeiro" />
    </div>
  )
}
