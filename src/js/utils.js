const copyData = (data) => {
  return JSON.parse(JSON.stringify(data))
}

export { copyData }