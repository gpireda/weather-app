function parseTimestampToDateString({
  locale = 'pt-BR',
  timestamp,
}: {
  locale?: string
  timestamp: number
}) {
  const date = new Date(timestamp * 1000)

  return date.toLocaleDateString(locale)
}

export default parseTimestampToDateString
