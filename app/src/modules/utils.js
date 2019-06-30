export const getPurchasePriceFormated = price => {
  return parseFloat(price.split(' €')[0].replace(',', '.'))
}
