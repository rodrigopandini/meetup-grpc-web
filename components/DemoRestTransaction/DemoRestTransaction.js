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

const REST_URL = 'http://a79390c632f2111e9877306e700570db-1086646869.sa-east-1.elb.amazonaws.com:8000/transaction'

const transaction = {
	mti: "0100",
	caller: "BANDEIRA",
	correlation_id: "meetup",
	field2_primary_account_number: "9999999999999999",
	field3_processing_code: "009988",
	field4_amount_transaction: "13.98",
	field5_amount_settlement: "13.98",
	field6_amount_cardholder_billing: "13.98",
	field7_tranmission_date_and_time: "SAMPLE",
	field8_amount_cardholder_billing_fee: "SAMPLE",
	field9_conversion_rate_settlement: "SAMPLE",
	field10_conversion_rate_cardholder_billing: "SAMPLE",
	field11_stan: "SAMPLE",
	field12_time_local_transaction: "SAMPLE",
	field13_time_local_transaction: "SAMPLE",
	field14_date_expiration: "SAMPLE",
	field15_date_settlement: "SAMPLE",
	field16_date_conversion: "SAMPLE",
	field17_date_capture: "SAMPLE",
  field18_merchant_type: "SAMPLE",
  field19_omitempty: "SAMPLE",
	field20_pan: "SAMPLE",
	field21_forwarding_institution_country_code: "SAMPLE",
	field22_pos_entry_mode: "SAMPLE",
	field23_card_sequence_number: "SAMPLE",
	field24_network_international_id: "SAMPLE",
	field25_pos_condition_code: "SAMPLE",
	field26_pos_pin_capture_code: "SAMPLE",
	field27_authorization_id_response_length: "SAMPLE",
	field28_amount_transaction_fee: "SAMPLE",
	field29_amount_settlement_fee: "SAMPLE",
	field30_amount_transaction_processing_fee: "SAMPLE",
	field31_amount_settlement_processing_fee: "SAMPLE",
	field32_acquiring_institution_id_code: "SAMPLE",
	field33_forwarding_institution_id_code: "SAMPLE",
	field34_pan: "SAMPLE",
	field35_track_2_data: "SAMPLE",
	field36_track_3_data: "SAMPLE",
	field37_retrieval_reference_number: "SAMPLE",
	field38_authorization_id_response: "SAMPLE",
	field39_response_code: "SAMPLE",
	field40_service_restriction_code: "SAMPLE",
	field41_card_acceptor_terminal_id: "SAMPLE",
	field42_card_acceptor_id_code: "SAMPLE",
	field43_card_acceptor_name_location_for_all_transactions: "SAMPLE",
	field44_additional_response_data: "SAMPLE",
	field45_track_1_data: "SAMPLE",
	field46_expanded_additional_amounts: "SAMPLE",
	field47_additional_data_national_use: "SAMPLE",
	field48_additional_data_private_user: "SAMPLE",
	field49_currency_code_transaction: "SAMPLE",
	field50_currency_code_settlement: "SAMPLE",
	field51_currency_code_cardholder_billing: "SAMPLE",
	field52_personal_id_number_pin_data: "SAMPLE",
	field53_security_related_control_information: "SAMPLE",
	field54_additional_amounts: "SAMPLE",
	field55_integrated_circuit_card: "SAMPLE",
	field56_payment_account_data: "SAMPLE",
	field57_reserved_for_national_use: "SAMPLE",
	field58_reserved_for_national_use: "SAMPLE",
	field59_reserved_for_national_use: "SAMPLE",
	field60_advice_reason_code: "SAMPLE",
	field61_pos_data: "SAMPLE",
	field62_intermediate_network_facility_data: "SAMPLE",
	field63_network_data: "SAMPLE",
	field64_message_authentication_code: "SAMPLE",
	field65_bit_map_extended: "SAMPLE",
	field66_settlement_code: "SAMPLE",
	field67_extended_payment_code: "SAMPLE",
	field68_receiving_institution_country_code: "SAMPLE",
	field69_settlement_institution_country_code: "SAMPLE",
	field70_network_managment_information_code: "SAMPLE",
	field71_message_number: "SAMPLE",
	field72_message_number_last: "SAMPLE",
	field73_date_action: "SAMPLE",
	field74_credits_number: "SAMPLE",
	field75_credits_reversal_number: "SAMPLE",
	field76_debits_number: "SAMPLE",
	field77_debits_reversal_number: "SAMPLE",
	field78_transfers_number: "SAMPLE",
	field79_transfers_reversal_number: "SAMPLE",
	field80_inquiries_number: "SAMPLE",
	field81_authorizations_number: "SAMPLE",
	field82_credits_processing_fee_amount: "SAMPLE",
	field83_credits_transaction_fee_amount: "SAMPLE",
	field84_debits_processing_fee_amount: "SAMPLE",
	field85_debits_transaction_fee_amount: "SAMPLE",
	field86_credits_amount: "SAMPLE",
	field87_credits_reversal_amount: "SAMPLE",
	field88_debits_amount: "SAMPLE",
	field89_reversal_amount: "SAMPLE",
	field90_original_data_elements: "SAMPLE",
	field91_issuer_file_update_code: "SAMPLE",
	field92_file_security_code: "SAMPLE",
	field93_response_indicator: "SAMPLE",
	field94_service_indicator: "SAMPLE",
	field95_replacement_amounts: "SAMPLE",
	field96_message_security_code: "SAMPLE",
	field97_amount_net_settlement: "SAMPLE",
	field98_payee: "SAMPLE",
	field99_settlement_instituition_id_code: "SAMPLE",
	field100_receiving_institution_id_code: "SAMPLE",
	field101_file_name: "SAMPLE",
	field102_account_id1: "SAMPLE",
	field103_account_id2: "SAMPLE",
	field104_transaction_description: "SAMPLE",
	field105_reserved_for_mastercard_use: "SAMPLE",
	field106_reserved_for_mastercard_use: "SAMPLE",
	field107_reserved_for_mastercard_use: "SAMPLE",
	field108_money_send_reference_data: "SAMPLE",
	field109_reserved_for_iso_use: "SAMPLE",
	field110_reserved_for_iso_use: "SAMPLE",
	field111_reserved_for_iso_use: "SAMPLE",
	field112_additional_data_national_use: "SAMPLE",
	field113_reserved_for_national_use: "SAMPLE",
	field114_reserved_for_national_use: "SAMPLE",
	field115_reserved_for_national_use: "SAMPLE",
	field116_reserved_for_national_use: "SAMPLE",
	field117_reserved_for_national_use: "SAMPLE",
	field118_reserved_for_national_use: "SAMPLE",
	field119_reserved_for_national_use: "SAMPLE",
	field120_record_data: "SAMPLE",
	field121_authorizing_agent_id_code: "SAMPLE",
	field122_additional_record_data: "SAMPLE",
	field123_receipt_free_text: "SAMPLE",
	field124_member_defined_data: "SAMPLE",
	field125_new_pin_data: "SAMPLE",
	field126_private_data: "SAMPLE",
	field127_private_data: "SAMPLE",
	field128_message_authentication_code: "SAMPLE"
}

const LayoutStyled = styled.div`
  width: '100vw';
  height: '100vw';
  padding: '10vw';
`

export default class DemoRestTransaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeMessage: '',
      data: []
    }
  }

  handleClick = (event) => {
    console.time("timerRestTransaction")
    const before = window.performance.now();
    
    fetch(REST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then((rawResponse) => {
      console.timeEnd("timerRestTransaction")
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