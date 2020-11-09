type itemType = {
  [key: string]: any // eslint-disable-line
}

function distinctBy<T>(items: Array<T>, key: string) {
  return [...new Map(items.map((item: itemType) => [item[key], item])).values()]
}

export default distinctBy
