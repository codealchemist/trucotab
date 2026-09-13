import React from 'react'
import Log from '../components/Log'
import { useTranslation } from '../i18n/useTranslation'

export default function LogRoute() {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('navLog')}</h1>
      <Log />
    </>
  )
}
