import styled from 'styled-components'

export const Title = styled.h2`
color: #AD1111;
font-size:5em;
text-align: center;
margin-top: 20px;
margin-bottom:20px;
z-index: 2;
display:flex;
flex-direction: row;
justify-content: center;

b{
    font-family: 'Righteous', cursive;
}
`
export const SecondMainDiv = styled.div`
display: flex;
flex-direction: column;
font-family: 'Bree Serif', serif;
/* pointer-events: none; */
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
height:100vh;
margin-left:10rem;

@media (max-width: 800px) {
    margin-left:0px;
    font-size:12px;
  }


.container{
    position:relative;
    width:90%;
    height:100%;
    margin:0px auto 0;
    margin-bottom:50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    
  &::-webkit-scrollbar {
    height: 10px;
    width:8px;
    border-radius:100px;
  }
  &::-webkit-scrollbar-track {
    border-radius:100px;
    background: black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #AD1111;
    border-radius: 100px;
  }
}

.container .box{
    position:relative;
    width:calc(400px - 30px);
    height:calc(260px - 30px);
    background-color: #000;
    float:left;
    margin:15px;
    box-sizing: border-box;
    overflow:hidden;
    box-shadow: 0 5px 10px rgba(0,0,0,.8)
}

.container .box:before{
    content: '';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    transform: scaleX(0);
    opacity: 0;
    z-index:1;
}

.container .box:hover:before{
    transform: scaleX(1);
    opacity:1;
    cursor:pointer;
}

.container .box:after{
    content: '';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-left:1px solid #fff;
    border-right:1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    transform: scaleY(0);
    opacity: 0;
    z-index:1;
}

.container .box:hover:after{
    transform: scaleY(1);
    opacity:1;
}

.container .box .imgBox{
    position:relative;
    
    
}

.container .box .imgBox img{
    background-size: contain;
    width:150%;
    transition:0.5s;
    
}

.container .box:hover .imgBox img{
    opacity:.2;
    transform: scale(1.2);
}

.container .box .content{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index:2;
    padding:20px;
    box-sizing: border-box;
    text-align: center; 
}

.container .box .content h2{
    margin:0 0 10px;
    padding:0;
    color:#fff;
    transition: 0.5s;
    transform:translateY(-50px);
    opacity:0;
    visibility: hidden;
    letter-spacing: 1px;
}

.container .box .content p{
    margin:0;
    padding:0;
    color:#fff;
    opacity:0;
    visibility: hidden;
    font-family: "Open Sans",sans-serif;
}

.container .box .content .info{
    margin:0;
    padding:0;
    transition: 0.5s;
    transform:translateY(50px);
    opacity:0;
    visibility: hidden;
    font-family: "Open Sans",sans-serif;
}

.container .box .content .info p{
   margin-bottom:20px;
}

.container .box .content .info a button{
    padding:0;
    height:40px;
    width:125px;
    margin:0px 10px 0px 10px;
    font-size:16px;
    border-radius:20px;
    text-decoration: none;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.container .box .content .info a{
    text-decoration: none;
}

.container .box .content .info a button div{
    margin-left:5px;
    margin-top:5px;
}

.container .box .content .info a button:hover{
    cursor:pointer;
    color:white;
    background-color: rgba(40,40,40,.6);
    border-color:white;
    transition: color 0.5s, background-color 0.5s, border-color 0.5s;
}

.container .box:hover .content h2,
.container .box:hover .content p,
.container .box:hover .content .info{
    opacity:1;
    visibility: visible;
    transform: translateY(0px);
    transition-delay:0.2s;
}
`

export const MainDiv = styled.div`
margin:0;
padding:0;
background-color:#1d1d1d;
height:100vh;

display: flex;
flex-direction: column;
font-family: 'Bree Serif', serif;
/* pointer-events: none; */
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
`

export const DivLogo = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
text-decoration: none;
`

export const ImgHeader = styled.img`
position:fixed;
width:100%;
z-index:1;

`

export const Decoration3 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-top:10px;
  margin-right:10px;
  :hover {
    cursor: default;
  }
`;

export const Decoration4 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left:10px;
  font-size: 18px;
  :hover {
    cursor: default;
  }
  display:flex;
  align-items: flex-end;
`;



