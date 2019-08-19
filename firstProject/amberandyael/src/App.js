import React, { Component } from 'react'
import Spinner from './components/gif/Spinner'
import CatTwo from './components/CatTwo'
import ShowingStyle from './components/ShowingStyle/ShowingStyle'
// rcc


export default class App extends Component {
  state = {
    api : [],
    loading: true
    // number: 0,
    // myQuote: ''
  }


  //BEFORE THE  PAGE LOADS
  componentDidMount = () => {
    console.log(`yael`)
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
        .then(data => {
          //ss
          this.setState({api: [...data]})
          this.setState({loading: false})

        })
  }


  render() {
    console.log(`data:`, this.state.api)
    return (
      this.state.loading ? <Spinner/> :
      <div>

        <nav style={navStyle}>
          THIS IS THE NAV
          </nav>```


        <h1>CATS</h1>
        {this.state.api.map(c => {
          console.log(c);
          return (
            <div key="theImage">
              <h1>This is my id: {c.id}</h1>
              <img src={c.url} alt="img" />
            </div>
          )
        })}


        <CatTwo/>
        <ShowingStyle/>
      </div>

    )
  }
}

const navStyle = {
  width: '100%',
  height: '10%',
  background: 'red',
  color: 'white'
  // backgroundImage:
}



// "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"



// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//           <h1>  APP</h1>
//     </div>
//   );
// }

// export default App;
