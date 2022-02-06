import { useState } from 'react';
import GitHub from './img/GitHub.png';
import LinkedIn from './img/LinkedIn.png';
import { Container, Introduction, Title, Phrase, MadeByMe, Error, TitleError, PhraseError, Content, Location, CityName, Region, Country, Flag, Submit, Condition, SumItUp, IconTemp, Temperature, ImageClimate, Climate, Info, InfoSpan, SearchBox, Search, LinksPlatforms, LinkAnchor, LinkedInLogo, GitHubLogo } from './Components';

const Page = () => {
    const [searchInput, setInput] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [temperature, setTemperature] = useState("");
    const [humidity, setUmity] = useState("");
    const [feelsLike, setSensation] = useState("");
    const [wind, setWind] = useState("");
    const [climate, setClimate] = useState("");
    const [conditionImageLink, setConditionImage] = useState("")
    const [flagImageLink, setFlagImage] = useState("")

    const [btn_visibility, setBtnVisible] = useState("hidden");
    const [errorState, setErrorState] = useState(false);
    const [display, setDisplay] = useState("none");

    const GetClimate = async () => {
        if (errorState === true) { setErrorState(false);}
        const req_city_data = await fetch('https://climateappserver.herokuapp.com/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    city: searchInput
                })
        })
        const req_city_data_json = await req_city_data.json();
        const city_data = req_city_data_json.data;
        if(city_data === false) {
            setErrorState(true);
        }
        else {
            const req_country_data = await fetch('https://climateappserver.herokuapp.com/countries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    country: city_data.location.country
                })
            })
            const req_country_data_json = await req_country_data.json();
            const country_data = req_country_data_json.data;
            setFlagImage(country_data.flags.png);
            setCity(city_data.location.name);
            setRegion(city_data.location.region);
            setCountry(city_data.location.country);
            setTemperature(city_data.current.temp_c);
            setUmity(city_data.current.humidity);
            setSensation(city_data.current.feelslike_c);
            setWind(city_data.current.wind_kph);
            setClimate(city_data.current.condition.text);
            setConditionImage(city_data.current.condition.icon)

            setDisplay("flex");
        }
    }

    return(
        <Container>
            <LinksPlatforms>
                <LinkAnchor href='https://github.com/jonathan010603/my-climate-app'><GitHubLogo src={GitHub}/></LinkAnchor>
                <LinkAnchor href='https://www.linkedin.com/in/dsjonat/'><LinkedInLogo src={LinkedIn}/></LinkAnchor>
            </LinksPlatforms>
            <Introduction style={display === "none" && errorState === false?{display: "flex"}:{display: "none"}}>
                <Title>MyClimateApp</Title>
                <Phrase>Search for a city</Phrase>
                <MadeByMe href='https://www.linkedin.com/in/dsjonat/'>Made by Jonathan da Silva</MadeByMe>
            </Introduction>
            <Error style={errorState === true?{display: "flex"}:{display: "none"}}>
                <TitleError>Error</TitleError>
                <PhraseError>Couldn't find this city.</PhraseError>
            </Error>
            <Content style={errorState === false?{display: display}:{display: "none"}}>
                <Location>
                    <CityName>{city}</CityName>
                    <Region>{region}</Region>
                    <Country>{country}</Country>
                    <Flag src={flagImageLink}></Flag>
                </Location>
                <Condition>
                    <SumItUp>
                        <IconTemp>
                            <Temperature>{temperature} ºC</Temperature>
                            <ImageClimate src={conditionImageLink}/>
                        </IconTemp>
                        <Climate>{climate}</Climate>
                    </SumItUp>
                    <Info>
                        <InfoSpan>Feels Like: {feelsLike} ºC</InfoSpan>
                        <InfoSpan>Wind: {wind} km/h</InfoSpan>
                        <InfoSpan>Humidity: {humidity}%</InfoSpan>
                    </Info>
                </Condition>
            </Content>
            <SearchBox>
                <Search spellcheck="false" onChange={ e => {
                    const specialChars = /^[a-zA-Z ]+$/;
                    setInput(e.target.value);
                    if(!specialChars.test(e.target.value)) {
                        setBtnVisible("hidden");
                    } else{ setBtnVisible("visible") }
                }} value={searchInput} />
                <Submit style={{visibility: btn_visibility}} onClick={ GetClimate }>Search</Submit>
            </SearchBox>
        </Container>
    )
}

export default Page;
