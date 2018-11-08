import React from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 10,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends React.Component {
  static async getInitialProps () {
      console.log('layout')
      // return {
      //   shows: data
      // }   
  }

  render(){
    console.log('lay render')
      return (
        <div style={layoutStyle}>
          <Header />
          {this.props.children}
        </div>
      )
  }
}

export default Layout