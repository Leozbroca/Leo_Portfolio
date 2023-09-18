import styled from 'styled-components'

export const MainDiv = styled.div`
margin:0;
padding:0;
background-color:#1d1d1d;
height:100vh;


`
export const MainDivSub = styled.div`
margin-left:10rem;
@media (max-width: 800px) {
    text-align: center;
    margin:0;
    padding:0;
    width:100vw;
    display:flex;
    justify-content: center;
  }
`

// export const Imgletter = styled.img`
// display:inline;
// width:150px;
// height:150px;
// `

export const Main1 = styled.div`
margin:0;
padding:0;
background-color:#1d1d1d;
height:100vh;
width:60%;
display: flex;
flex-direction: column;
justify-content:center;
/* pointer-events: none; */
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
`


export const FirstDiv = styled.div`
color:white;
font-size: 6.3rem;
margin-left:2rem;
margin-bottom:2rem;

:hover{
    cursor: default;
}
p{
    display: inline;
    font-family: 'Righteous', cursive;
    
}


@media (max-width: 2400px) {
    font-size:6.3rem;
  }
  @media (max-width: 1800px) {
    top:10rem;
    font-size:5.3rem;
  }
  @media (max-width: 1400px) {
    top:10rem;
    font-size:4.3rem;
  }
  @media (max-width: 1000px) {
    top:10rem;
    font-size:3.3rem;
  }

  @media (max-width: 800px) {

    margin:0;
   
    
  }
`

export const SecondDiv = styled.div`
font-size: 1.5rem;
letter-spacing: 3px;
margin-left:3rem;
margin-bottom:5rem;
color: #8d8d8d;
font-family: 'Bree Serif', serif;
:hover{
    cursor: default;
}
z-index:2;
`

export const LetterLogo = styled.img`
width:90px;
height:100px;
`
export const PhotoLeo = styled.img`
width:438px;
height:778px;
filter: grayscale();
`

export const Paragraph = styled.div`
margin:0;
padding:0;
`