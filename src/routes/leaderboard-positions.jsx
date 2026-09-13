import React from 'react'
import LeaderboardPositions from '../components/LeaderboardPositions'
import { useTranslation } from '../i18n/useTranslation'

export default function LeaderboardPositionsRoute() {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('navLeaderboard')}</h1>
      <LeaderboardPositions />
    </>
  )
}
