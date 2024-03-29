import React from 'react'
import FinanceWidget from './FinanceWidget'
import CreditAgreements from './modules/CreditAgreements'
import { getPurchasePriceFormated } from './modules/utils'
import PaymentInfo from './common/PaymenInfo'

class App extends React.Component {
  state = {
    dataCreditAfreement: null,
    showModal: false,
    instalmentFee: ''
  }
  constructor (props) {
    super(props)
    this.creditAgreemensts = new CreditAgreements()
  }

  onToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  updatePrice (price) {
    if (price !== undefined) {
      const formatedPrice = getPurchasePriceFormated(price)
      this.creditAgreemensts
        .fetchCreditAgreements(formatedPrice)
        .then(dataCreditAfreement =>
          this.setState({
            dataCreditAfreement
          })
        )
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  onHandleAgreements = select => {
    const { instalmentFee } = JSON.parse(select.target.value)
    this.setState({
      instalmentFee
    })
  }

  render () {
    const { dataCreditAfreement, showModal, instalmentFee } = this.state
    return (
      <React.Fragment>
        <FinanceWidget
          dataCreditAfreement={dataCreditAfreement}
          onToggleModal={this.onToggleModal}
          onHandleAgreements={this.onHandleAgreements}
        />
        {showModal && (
          <PaymentInfo
            closeModal={this.closeModal}
            instalmentFee={instalmentFee}
          />
        )}
      </React.Fragment>
    )
  }
}

export default App
