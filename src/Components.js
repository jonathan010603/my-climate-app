import styled from 'styled-components';
import bg from './img/bg.jpg';

const Container = styled.div`
    width: 100%;
    background: url(${bg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 1px 1px 5px #000000;
    color: white;
    min-height: 480px;
    min-width: 331px;
    min-height: 100vh;
`

const Introduction = styled.div`
    flex-direction: column;
    margin: auto;
`

const Title = styled.span`
    font-size: 2.8rem;
    margin: auto;
    margin-bottom: 0;

    @media(min-width: 767px) {
        font-size: 5.5rem;
    }
`

const Phrase = styled.span`
    font-size: 2rem;
    margin: auto;
    margin-top: 0;

    @media(min-width: 767px) {
        font-size: 3.5rem;
    }
`

const MadeByMe = styled.a`
    font-size: 1rem;
    margin-top: 3vh;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: white;
`

const Error = styled.div`
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 75%;
    margin-top: auto;

    @media(min-width: 767px) {
        margin-bottom: 2vh;
    }
`

const TitleError = styled.span`
    font-size: 2.8rem;
    margin: auto;
    margin-bottom: 0;

    @media(min-width: 767px) {
        font-size: 5.5rem;
    }
`

const PhraseError = styled.span`
    font-size: 2rem;
    margin: auto;
    margin-top: 0;

    @media(min-width: 767px) {
        font-size: 3.5rem;
    }
`

const Content = styled.div`
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 75%;
    margin-bottom: 2vh;
    margin-top: auto;
`

const Location = styled.div`
`

const CityName = styled.h1`
    margin: 0;
`

const Region = styled.h2`
    margin: 0;
`

const Country = styled.h2`
    margin: 0;
    margin-bottom: 1vh;
`

const Flag = styled.img`
    width: 60vw;
    height: 40vh;
    max-width: 200px;
    max-height: 150px;
`

const Submit = styled.button`
    margin-top: 1vh;
    background: #FFFFFF;
    width: 30vw;
    max-width: 90px;
    min-height: 35px;
    height: 7vh;
    border-color: transparent;
    font-family: 'Righteous';
    font-size: 1.5rem;
    color: black;
    transition: all 0.1s ease-out;
    cursor: pointer;

    &:hover {
        background: #000000;
        color: white;
        border-radius: 15px 0px;
    }

    @media(max-height: 462px) {
        font-size: 1rem;
    }
`

const Condition = styled.div`
    display: flex;
    text-shadow: 1px 1px 5px #000000;
    color: white;
    align-items: bottom;
    margin-top: auto;

    @media(min-width: 425px) {
        flex-direction: column;
        text-align: center;
        align-self: center;
    }

    @media(min-width: 767px) {
        flex-direction: column;
        text-align: center;
        align-self: center;
    }
`

const SumItUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1vh;

    @media(max-width: 425px) {
        padding-left: 2%;
    }

    @media(min-width: 425px) {
        align-self: center;
    }
`

const IconTemp = styled.div`
    display: flex;

    @media(min-width: 425px) {
        text-align: center;
        align-self: center;
    }
`

const Temperature = styled.h1`
    font-size: 1.9em;
`

const ImageClimate = styled.img`
    width: 20vw;
    max-width: 80px;
    margin: 0;
`

const Climate = styled.h3`
    margin: auto;

    @media(min-width: 425px) {
        align-self: center;
    }

    @media(min-width: 767px) {
        align-self: center;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 45vw;
    padding-right: 2%;
    color: white;
    text-shadow: 1px 1px 5px #000000;
    align-items: bottom;
    margin-left: auto;
    padding-top: 3.5%;

    @media(min-width: 425px) {
        flex-direction: column;
        text-align: center;
        align-self: center;
    }

    @media(min-width: 767px) {
        flex-direction: column;
        text-align: center;
        align-self: center;
    }
`

const InfoSpan = styled.h4`
    margin: 2vh 0vh 0vh 0vh;
`

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: 5vh;
`

const Search = styled.input`
    border-radius: 50px;
    background: transparent;
    border-color: white;
    border-style: solid;
    border-width: 1px;
    width: 70vw;
    max-width: 400px;
    min-height: 40px;
    height: 8vh;
    text-align: center;
    color: white;
    font-size: 2rem;
    font-family: 'Righteous';
    text-shadow: 1px 1px 5px #000000;
    outline-color: transparent;
`

const LinksPlatforms = styled.div`
    display: flex;
    padding-top: 7px;
    right: 0;
    position: absolute;
    padding-right: 5px;

    @media(max-width: 425px) {
        position: static;
        padding-right: 0;
    }
`

const LinkAnchor = styled.a`
    text-decoration: none;
    margin-left: 1vw;
`

const LinkedInLogo = styled.img`
    max-width: 43px;
    max-height: 43px;
`

const GitHubLogo = styled.img`
    max-width: 43px;
    max-height: 43px;
`

export { Container, Introduction, Title, Phrase, MadeByMe, Error, TitleError, PhraseError, Content, Location, CityName, Region, Country, Flag, Submit, Condition, SumItUp, IconTemp, Temperature, ImageClimate, Climate, Info, InfoSpan, SearchBox, Search, LinksPlatforms, LinkAnchor, LinkedInLogo, GitHubLogo };
