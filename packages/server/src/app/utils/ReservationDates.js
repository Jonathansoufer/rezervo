export default (firstDate, lastDate) => {
  const checkin = new Date(firstDate)
  const checkout = new Date(lastDate)

  return Math.floor(
    (Date.UTC(checkout.getFullYear(), checkout.getMonth(), checkout.getDate()) -
      Date.UTC(checkin.getFullYear(), checkin.getMonth(), checkin.getDate())) /
      (1000 * 60 * 60 * 24)
  )
}
