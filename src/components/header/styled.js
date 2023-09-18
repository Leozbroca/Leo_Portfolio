import styled from "styled-components";

export const MainHeader = styled.div`
 width:10rem;
 background-color: #181818;
 height:100%;
 position:fixed;
 left:0;
 top:0;
 right:auto;
 bottom:0;
 margin:0;
 padding:0;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 z-index:2;
 font-family: 'Bree Serif', serif;

 -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;

 @media (max-width: 800px) {
    display:none;
  }
`;

export const HeadTop = styled.div`
background-color: #000000;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
padding: 1rem 0;
`

export const HeadMenu = styled.div`
display:flex;
flex-direction: column;
width:100%;
justify-content: center;
align-items: center;
border-top: 1px solid #282828;
`

export const HeadBottom = styled.div`
display:flex;
flex-direction: row;
justify-content:space-around;
margin-bottom:50px;
`

export const MenuItem = styled.div`
text-align: center;
width: 100%;
display: block;
font-size: 1rem;
color: ${(props) => props.color};
line-height: 3rem;
border-bottom: 1px solid #282828;
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
   transition: color 0.5s;

:hover{
  cursor: pointer;
  color: #AD1111;
  transition: color 0.5s, background-color 0.3s;
}
`

export const DivLogo = styled.a`
margin:10px;
color:#909096;
transition: color 0.5s;

:hover{
  transition: color 0.5s;
  color:#AD1111;
  cursor: pointer;
}
`

export const TopLogo = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const LogoMyImg = styled.img`
width:125px;
height:125px;
margin:10px;
border-radius: 180px;
opacity:.8;
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
   pointer-events: none;
`
export const LogoMyName = styled.div`
font-size: 1.5rem;
color:white;
:hover{
  cursor:pointer;
}
`

export const TopWrite = styled.p`
font-size: 1rem;;
color: #909096;
-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
`
