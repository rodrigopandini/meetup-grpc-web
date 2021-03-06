const TransactionModel = {
  mti: '1',
  caller: '201',
  correlation_id: '200',
  field2_primary_account_number: '2',
  field3_processing_code: '3',
  field4_amount_transaction: '4',
  field5_amount_settlement: '5',
  field6_amount_cardholder_billing: '6',
  field7_tranmission_date_and_time: '7',
  field8_amount_cardholder_billing_fee: '8',
  field9_conversion_rate_settlement: '9',
  field10_conversion_rate_cardholder_billing: '10',
  field11_stan: '11',
  field12_time_local_transaction: '12',
  field13_date_local_transaction: '13',
  field14_date_expiration: '14',
  field15_date_settlement: '15',
  field16_date_conversion: '16',
  field17_date_capture: '17',
  field18_merchant_type: '18',
  field20_pan: '20',
  field21_forwarding_institution_country_code: '21',
  field22_pos_entry_mode: '22',
  field23_card_sequence_number: '23',
  field24_network_international_id: '24',
  field25_pos_condition_code: '25',
  field26_pos_pin_capture_code: '26',
  field27_authorization_id_response_length: '27',
  field28_amount_transaction_fee: '28',
  field29_amount_settlement_fee: '29',
  field30_amount_transaction_processing_fee: '30',
  field31_amount_settlement_processing_fee: '31',
  field32_acquiring_institution_id_code: '32',
  field33_forwarding_institution_id_code: '33',
  field34_pan: '34',
  field35_track_2_data: '35',
  field36_track_3_data: '36',
  field37_retrieval_reference_number: '37',
  field38_authorization_id_response: '38',
  field39_response_code: '39',
  field40_service_restriction_code: '40',
  field41_card_acceptor_terminal_id: '41',
  field42_card_acceptor_id_code: '42',
  field43_card_acceptor_name_location_for_all_transactions: '43',
  field44_additional_response_data: '44',
  field45_track_1_data: '45',
  field46_expanded_additional_amounts: '46',
  field47_additional_data_national_use: '47',
  field48_additional_data_private_user: '48',
  field49_currency_code_transaction: '49',
  field50_currency_code_settlement: '50',
  field51_currency_code_cardholder_billing: '51',
  field52_personal_id_number_pin_data: '52',
  field53_security_related_control_information: '53',
  field54_additional_amounts: '54',
  field55_integrated_circuit_card: '55',
  field56_payment_account_data: '56',
  field57_reserved_for_national_use: '57',
  field58_reserved_for_national_use: '58',
  field59_reserved_for_national_use: '59',
  field60_advice_reason_code: '60',
  field61_pos_data: '61',
  field62_intermediate_network_facility_data: '62',
  field63_network_data: '63',
  field64_message_authentication_code: '64',
  field65_bit_map_extended: '65',
  field66_settlement_code: '66',
  field67_extended_payment_code: '67',
  field68_receiving_institution_country_code: '68',
  field69_settlement_institution_country_code: '69',
  field70_network_managment_information_code: '70',
  field71_message_number: '71',
  field72_message_number_last: '72',
  field73_date_action: '73',
  field74_credits_number: '74',
  field75_credits_reversal_number: '75',
  field76_debits_number: '76',
  field77_debits_reversal_number: '77',
  field78_transfers_number: '78',
  field79_transfers_reversal_number: '79',
  field80_inquiries_number: '80',
  field81_authorizations_number: '81',
  field82_credits_processing_fee_amount: '82',
  field83_credits_transaction_fee_amount: '83',
  field84_debits_processing_fee_amount: '84',
  field85_debits_transaction_fee_amount: '85',
  field86_credits_amount: '86',
  field87_credits_reversal_amount: '87',
  field88_debits_amount: '88',
  field89_reversal_amount: '89',
  field90_original_data_elements: '90',
  field91_issuer_file_update_code: '91',
  field92_file_security_code: '92',
  field93_response_indicator: '93',
  field94_service_indicator: '94',
  field95_replacement_amounts: '95',
  field96_message_security_code: '96',
  field97_amount_net_settlement: '97',
  field98_payee: '98',
  field99_settlement_instituition_id_code: '99',
  field100_receiving_institution_id_code: '100',
  field101_file_name: '101',
  field102_account_id1: '102',
  field103_account_id2: '103',
  field104_transaction_description: '104',
  field105_reserved_for_mastercard_use: '105',
  field106_reserved_for_mastercard_use: '106',
  field107_reserved_for_mastercard_use: '107',
  field108_money_send_reference_data: '108',
  field109_reserved_for_iso_use: '109',
  field110_reserved_for_iso_use: '110',
  field111_reserved_for_iso_use: '111',
  field112_additional_data_national_use: '112',
  field113_reserved_for_national_use: '113',
  field114_reserved_for_national_use: '114',
  field115_reserved_for_national_use: '115',
  field116_reserved_for_national_use: '116',
  field117_reserved_for_national_use: '117',
  field118_reserved_for_national_use: '118',
  field119_reserved_for_national_use: '119',
  field120_record_data: '120',
  field121_authorizing_agent_id_code: '121',
  field122_additional_record_data: '122',
  field123_receipt_free_text: '123',
  field124_member_defined_data: '124',
  field125_new_pin_data: '125',
  field126_private_data: '126',
  field127_private_data: '127',
  field128_message_authentication_code: '128',
}

export default generateTransactionModel = () => {
  return TransactionModel
}