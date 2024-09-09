'use client'
import React from 'react'
import { useRowLabel } from '@payloadcms/ui'

interface RowData extends Record<string, any> {
  title?: string
}

export const MyComponent = ({ text }: { text: string }) => {
  const { data, rowNumber } = useRowLabel<RowData>()

  return <label>{data?.title ?? `Header ${String(rowNumber).padStart(2, '0')}`}</label>
}
