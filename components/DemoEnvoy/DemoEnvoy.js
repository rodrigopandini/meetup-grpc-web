import React, { Component, Fragment } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { themePismo } from '@pismo/bolt-core'
import { Button } from '@pismo/bolt-button'

import { HelloRequest, HelloReply } from './helloworld_pb.js'
import { GreeterClient } from './helloworld_grpc_web_pb.js'

import { TransactionClient } from './transaction_grpc_web_pb.js'

import generateTransactionModel from './generateTransactionModel.js'

const clientGreeter = new GreeterClient('http://localhost:8081')
const clientTransaction = new TransactionClient('http://localhost:8082')

const requestHello = new HelloRequest()
const requestTransaction = generateTransactionModel()

const LayoutStyled = styled.div`
  width: '100vw';
  height: '100vw';
  padding: '10vw';
`

export default class DemoEnvoy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      helloTime: '',
      helloMessage: '',
      transactionTime: '',
      transactionMessage: '',
    }
  }


  handleSayHello = (event) => {
    console.time("timer")
    const before = window.performance.now();

    requestHello.setName(`World (${before})`)

    clientGreeter.sayHello(requestHello, {}, (err, response) => {
      console.timeEnd("timer")
      const after = window.performance.now() - before

      this.setState( { 
        helloTime: after,
        helloMessage: response.getMessage(),
      })
    })
  }

  handlePostTransaction = (event) => {
    console.time("timer")
    const before = window.performance.now();
    
    clientTransaction.postTransaction(requestTransaction, {}, (err, response) => {
      console.timeEnd("timer")
      const after = window.performance.now() - before

      this.setState( { 
        transactionTime: after,
        transactionMessage: response.getMessage(),
      })
    })
  }

  render() {
    return (
      <LayoutStyled>
        {this.props.children}
        <ThemeProvider theme={themePismo}>
          <Fragment>
            <Button onClick={this.handleSayHello}>Test sayHello</Button>
            <p>{this.state.helloTime} : {this.state.helloMessage}</p>
            <br/>
            <Button onClick={this.handlePostTransaction}>Test postTransaction</Button>
            <p>{this.state.transactionTime} : {this.state.transactionMessage}</p>
          </Fragment>
        </ThemeProvider>
      </LayoutStyled>
    )
  }
}