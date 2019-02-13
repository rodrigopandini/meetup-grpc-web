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
  ResponsiveContainer
} from 'recharts';

import { HelloRequest, HelloReply } from './helloworld_pb.js'
import { GreeterClient } from './helloworld_grpc_web_pb.js'

const clientGreeter = new GreeterClient('http://localhost:8081')

const requestHello = new HelloRequest()
requestHello.setName(`World`)

const LayoutStyled = styled.div`
  width: '100vw';
  height: '100vw';
  padding: '10vw';
`

export default class DemoEnvoyHelloWorld extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeMessage: '',
      data: []
    }
  }

  handleClick = (event) => {
    console.time("timerHelloWorldGRPCLocal")
    const before = window.performance.now();


    clientGreeter.sayHello(requestHello, {}, (err, response) => {
      console.timeEnd("timerHelloWorldGRPCLocal")
      const after = window.performance.now() - before  
      
      this.setState( { 
        timeMessage: `${after}ms | ${response.getMessage()}`,
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
          <Line type="linear" dataKey="avg" stroke="#82ca9d" activeDot={{r: 8}} strokeDasharray="5 5" />
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
            <Button style={{ float: 'left'}} onClick={this.handleClick}>SAY HELLO</Button>
            {lineChart}
            <br/>
            <span style={{ marginTop: '1vh' }}>{this.state.timeMessage}</span>
          </Fragment>
        </ThemeProvider>
      </LayoutStyled>
    )
  }
}