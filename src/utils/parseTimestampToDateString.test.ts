import parseTimestampToDateString from './parseTimestampToDateString'

it('returns the expected formatted date', () => {
  const timestamp = 1256953732
  const target = '30/10/2009'

  expect(parseTimestampToDateString({ timestamp })).toEqual(target)
})
