'use client'
import React from 'react'
import { useRowLabel } from '@payloadcms/ui'

interface RowData extends Record<string, any> {
  title?: string
}

export const RowLabel = ({ text }: { text: string }) => {
  const { data, rowNumber } = useRowLabel<RowData>()
  const message = data?.title ?? data?.message

  return <label>{message ?? `Header ${String(rowNumber).padStart(2, '0')}`}</label>
}

export default RowLabel
