import { TransactionModel } from './transaction_pb.js'

export default function generateTransactionModel() {
  const model = new TransactionModel()
  model.setMti('1')
  model.setCaller('2')
  model.setCorrelationId('3')
  model.setField2PrimaryAccountNumber('4')
  model.setField3ProcessingCode('5')
  model.setField4AmountTransaction('6')
  model.setField5AmountSettlement('7')

  return model
}