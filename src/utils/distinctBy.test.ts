import distinctBy from './distinctBy'

const list = [
  {
    id: 3451190,
    name: 'Rio de Janeiro',
  },
  {
    id: 3473641,
    name: 'Rio de Janeiro',
  },
]

it('returns a duplicated free list based on given key', () => {
  expect(distinctBy(list, 'name')).toHaveLength(1)
})

it('result is the expected target', () => {
  const target = [{ id: 3473641, name: 'Rio de Janeiro' }]

  expect(distinctBy(list, 'name')).toEqual(target)
})
