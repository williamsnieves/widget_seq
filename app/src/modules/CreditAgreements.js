import settings from '../settings'
class CreditAgreements {
  constructor () {
    this.baseUrl = 'http://localhost:8080/'
    this.servicePath = settings.services.creditAgreements
  }

  async fetchCreditAgreements (totalWithTax) {
    let response = await fetch(
      `${this.baseUrl}${this.servicePath}?totalWithTax=${totalWithTax}`
    )
    let data = await response.json()

    return data
  }
}

export default CreditAgreements
