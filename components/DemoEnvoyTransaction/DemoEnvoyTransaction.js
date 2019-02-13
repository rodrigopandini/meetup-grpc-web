import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themePismo } from '@pismo/bolt-core'
import { Button } from '@pismo/bolt-button'
import { 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
} from 'recharts';

import { TransactionModel } from './transaction_pb.js'
import { TransactionClient } from './transaction_grpc_web_pb.js'

const GRPC_WEB_URL = 'http://a113684522fad11e981420a405d7e6bf-319289607.sa-east-1.elb.amazonaws.com:8082/'

const clientTransaction = new TransactionClient(GRPC_WEB_URL)
const requestTransaction = new TransactionModel()
requestTransaction.setMti('test')
requestTransaction.setCaller('test')
requestTransaction.setCorrelationId('test')
requestTransaction.setField2PrimaryAccountNumber('test')
requestTransaction.setField3ProcessingCode('test')
requestTransaction.setField4AmountTransaction('test')
requestTransaction.setField5AmountSettlement('test')
requestTransaction.setField6AmountCardholderBilling('test')
requestTransaction.setField7TranmissionDateAndTime('test')
requestTransaction.setField8AmountCardholderBillingFee('test')
requestTransaction.setField9ConversionRateSettlement('test')
requestTransaction.setField10ConversionRateCardholderBilling('test')
requestTransaction.setField11Stan('test')
requestTransaction.setField12TimeLocalTransaction('test')
requestTransaction.setField13DateLocalTransaction('test')
requestTransaction.setField14DateExpiration('test')
requestTransaction.setField15DateSettlement('test')
requestTransaction.setField16DateConversion('test')
requestTransaction.setField17DateCapture('test')
requestTransaction.setField18MerchantType('test')
requestTransaction.setField20Pan('test')
requestTransaction.setField21ForwardingInstitutionCountryCode('test')
requestTransaction.setField22PosEntryMode('test')
requestTransaction.setField23CardSequenceNumber('test')
requestTransaction.setField24NetworkInternationalId('test')
requestTransaction.setField25PosConditionCode('test')
requestTransaction.setField26PosPinCaptureCode('test')
requestTransaction.setField27AuthorizationIdResponseLength('test')
requestTransaction.setField28AmountTransactionFee('test')
requestTransaction.setField29AmountSettlementFee('test')
requestTransaction.setField30AmountTransactionProcessingFee('test')
requestTransaction.setField31AmountSettlementProcessingFee('test')
requestTransaction.setField32AcquiringInstitutionIdCode('test')
requestTransaction.setField33ForwardingInstitutionIdCode('test')
requestTransaction.setField34Pan('test')
requestTransaction.setField35Track2Data('test')
requestTransaction.setField36Track3Data('test')
requestTransaction.setField37RetrievalReferenceNumber('test')
requestTransaction.setField38AuthorizationIdResponse('test')
requestTransaction.setField39ResponseCode('test')
requestTransaction.setField40ServiceRestrictionCode('test')
requestTransaction.setField41CardAcceptorTerminalId('test')
requestTransaction.setField42CardAcceptorIdCode('test')
requestTransaction.setField43CardAcceptorNameLocationForAllTransactions('test')
requestTransaction.setField44AdditionalResponseData('test')
requestTransaction.setField45Track1Data('test')
requestTransaction.setField46ExpandedAdditionalAmounts('test')
requestTransaction.setField47AdditionalDataNationalUse('test')
requestTransaction.setField48AdditionalDataPrivateUser('test')
requestTransaction.setField49CurrencyCodeTransaction('test')
requestTransaction.setField50CurrencyCodeSettlement('test')
requestTransaction.setField51CurrencyCodeCardholderBilling('test')
requestTransaction.setField52PersonalIdNumberPinData('test')
requestTransaction.setField53SecurityRelatedControlInformation('test')
requestTransaction.setField54AdditionalAmounts('test')
requestTransaction.setField55IntegratedCircuitCard('test')
requestTransaction.setField56PaymentAccountData('test')
requestTransaction.setField57ReservedForNationalUse('test')
requestTransaction.setField58ReservedForNationalUse('test')
requestTransaction.setField59ReservedForNationalUse('test')
requestTransaction.setField60AdviceReasonCode('test')
requestTransaction.setField61PosData('test')
requestTransaction.setField62IntermediateNetworkFacilityData('test')
requestTransaction.setField63NetworkData('test')
requestTransaction.setField64MessageAuthenticationCode('test')
requestTransaction.setField65BitMapExtended('test')
requestTransaction.setField66SettlementCode('test')
requestTransaction.setField67ExtendedPaymentCode('test')
requestTransaction.setField68ReceivingInstitutionCountryCode('test')
requestTransaction.setField69SettlementInstitutionCountryCode('test')
requestTransaction.setField70NetworkManagmentInformationCode('test')
requestTransaction.setField71MessageNumber('test')
requestTransaction.setField72MessageNumberLast('test')
requestTransaction.setField73DateAction('test')
requestTransaction.setField74CreditsNumber('test')
requestTransaction.setField75CreditsReversalNumber('test')
requestTransaction.setField76DebitsNumber('test')
requestTransaction.setField77DebitsReversalNumber('test')
requestTransaction.setField78TransfersNumber('test')
requestTransaction.setField79TransfersReversalNumber('test')
requestTransaction.setField80InquiriesNumber('test')
requestTransaction.setField81AuthorizationsNumber('test')
requestTransaction.setField82CreditsProcessingFeeAmount('test')
requestTransaction.setField83CreditsTransactionFeeAmount('test')
requestTransaction.setField84DebitsProcessingFeeAmount('test')
requestTransaction.setField85DebitsTransactionFeeAmount('test')
requestTransaction.setField86CreditsAmount('test')
requestTransaction.setField87CreditsReversalAmount('test')
requestTransaction.setField88DebitsAmount('test')
requestTransaction.setField89ReversalAmount('test')
requestTransaction.setField90OriginalDataElements('test')
requestTransaction.setField91IssuerFileUpdateCode('test')
requestTransaction.setField92FileSecurityCode('test')
requestTransaction.setField93ResponseIndicator('test')
requestTransaction.setField94ServiceIndicator('test')
requestTransaction.setField95ReplacementAmounts('test')
requestTransaction.setField96MessageSecurityCode('test')
requestTransaction.setField97AmountNetSettlement('test')
requestTransaction.setField98Payee('test')
requestTransaction.setField99SettlementInstituitionIdCode('test')
requestTransaction.setField100ReceivingInstitutionIdCode('test')
requestTransaction.setField101FileName('test')
requestTransaction.setField102AccountId1('test')
requestTransaction.setField103AccountId2('test')
requestTransaction.setField104TransactionDescription('test')
requestTransaction.setField105ReservedForMastercardUse('test')
requestTransaction.setField106ReservedForMastercardUse('test')
requestTransaction.setField107ReservedForMastercardUse('test')
requestTransaction.setField108MoneySendReferenceData('test')
requestTransaction.setField109ReservedForIsoUse('test')
requestTransaction.setField110ReservedForIsoUse('test')
requestTransaction.setField111ReservedForIsoUse('test')
requestTransaction.setField112AdditionalDataNationalUse('test')
requestTransaction.setField113ReservedForNationalUse('test')
requestTransaction.setField114ReservedForNationalUse('test')
requestTransaction.setField115ReservedForNationalUse('test')
requestTransaction.setField116ReservedForNationalUse('test')
requestTransaction.setField117ReservedForNationalUse('test')
requestTransaction.setField118ReservedForNationalUse('test')
requestTransaction.setField119ReservedForNationalUse('test')
requestTransaction.setField120RecordData('test')
requestTransaction.setField121AuthorizingAgentIdCode('test')
requestTransaction.setField122AdditionalRecordData('test')
requestTransaction.setField123ReceiptFreeText('test')
requestTransaction.setField124MemberDefinedData('test')
requestTransaction.setField125NewPinData('test')
requestTransaction.setField126PrivateData('test')
requestTransaction.setField127PrivateData('test')
requestTransaction.setField128MessageAuthenticationCode('test')




const LayoutStyled = styled.div`
  width: '100vw';
  height: '100vw';
  padding: '10vw';
`

export default class DemoEnvoyTransaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeMessage: '',
      data: []
    }
  }

  handleClick = (event) => {
    console.time("timerGRPCTransaction")
    const before = window.performance.now();

    clientTransaction.postTransaction(requestTransaction, {}, (err, response) => {
      console.timeEnd("timerGRPCTransaction")
      const after = window.performance.now() - before

      this.setState( { 
        timeMessage: `${after}ms`,
        data: this.state.data.concat({ name: `Test${this.state.data.length+1}`, time: after })
      })
    })
  }
  
  createLineChart = (data) => (
    <div style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#f5f5f5', fontSize: '1.2vh', marginTop: '1vh', marginBottom: '1vh' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 5, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="linear" dataKey="time" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )  

  render() {
    const lineChart = this.createLineChart(this.state.data)

    return (
      <LayoutStyled>
        {this.props.children}
        <ThemeProvider theme={themePismo}>
          <Fragment>
            <Button style={{ float: 'left'}} onClick={this.handleClick}>POST TRANSACTION</Button>
            {lineChart}
            <br/>
            <span style={{ marginTop: '1vh' }}>{this.state.timeMessage}</span>
          </Fragment>
        </ThemeProvider>
      </LayoutStyled>
    )
  }
}