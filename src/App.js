import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dimondPhotos:[
                {title:"ROUND",subTitle:"Maximizes light return from the top of the stone", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/round-Diamond.png?v=3"},
                {title:"CUSHION",subTitle:"Antique cut with 58 facets and rounded corners", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/cushion-Diamond.png?v=3"},
                {title:"MARQUISE",subTitle:"Long, narrow surface makes it appear larger than life", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/marquise-Diamond.png?v=3"},
                {title:"HEART",subTitle:"Features a distinctive cleft at the top and superior brilliance", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/heart-Diamond.png?v=3"},
                {title:"PEAR",subTitle:"Tradition meets brilliance in unique ‘water drop’ shape", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/pear-Diamond.png?v=3"},
                {title:"RADIANT",subTitle:"Brilliance combined with non-traditional cropped corners", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/radiant-Diamond.png?v=3"},
                {title:"OVAL",subTitle:"Elongated shape accentuates the length of the finger", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/oval-Diamond.png?v=3"},
                {title:"ASSCHER",subTitle:"Vintage-style square shape with cropped corners", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/asscher-Diamond.png?v=3"},
                {title:"EMERALD",subTitle:"Long lines create an elegant and sophisticated look", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/emerald-Diamond.png?v=3"},
                {title:"PRINCESS",subTitle:"Maximum brilliance in an exquisite square form", link:"https://ion.r2net.com/images/amazingHomepage/diamonds/princess-Diamond.png?v=3"},
                ],
            centerdImage:0

        }
    }
    componentDidMount(){
        const centeredImage =  this.state.centerdImage
       document.querySelector('.dimonds-slidshow').style.left = (50+(((-100-(150*centeredImage))/window.innerWidth)*100))+"%";
    }
    componentDidUpdate(){
        console.log(window.innerWidth)
        const centeredImage =  this.state.centerdImage
        document.querySelector('.dimonds-slidshow').style.left = (50+(((-100-(150*centeredImage))/window.innerWidth)*100))+"%";
    }
  render() {
        const selectedPhoto = this.state.dimondPhotos[this.state.centerdImage]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="">EXPERIENCE THE</h2>
            <h1 className="">DIMOND REVOLUTION</h1>
            <p>Spin actual dimonds in 360 HD and zoom in up to 40x. One of the world's biggest collection of loose diamonds.at your fingertips.</p>
        </header>
<div className="dimonds-slidshow">
{this.printDimonds()}

</div>
          <div className="centered-img">
              <h2>{selectedPhoto.title}</h2>
              <h3>{selectedPhoto.subTitle}</h3>
          </div>
          <img src="https://ion.r2net.com/images/amazingHomepage/Arrow.svg" className="arrow-left" onClick={this.arrowLeft} />
          <img src="https://ion.r2net.com/images/amazingHomepage/Arrow.svg" className="arrow-right" onClick={this.arrowRight}/>
      </div>
    );
  }

    printDimonds=()=> {
        return this.state.dimondPhotos.map((photo,index)=>{
            if(index===this.state.centerdImage){
                return (<img src={photo.link} className="big-dimond-photo" key={index} />
)
            }else {
                return (<img src={photo.link} className="dimond-photo" key={index} /> )
            }
        })
    }


    arrowLeft=()=>{
        if(this.state.centerdImage>0){
            this.setState((prevState)=>{
                let selectedImage= prevState.centerdImage
                selectedImage--;
                return{centerdImage:selectedImage}
            })
        }
    }
    arrowRight =()=>{
        if(this.state.centerdImage<(this.state.dimondPhotos.length-1)){
        this.setState((prevState)=>{
        let selectedImage= prevState.centerdImage
        selectedImage++;
        return{centerdImage:selectedImage}
    })}
}
}

export default App;
