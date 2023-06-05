import "./style.css";

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="wheather-descrription">{data.weather[0].description}</p>
                </div>
                <img alt="wheather" className="wheather-icon" src={`icons/${data.weather[0].icon}.svg`} />
            </div>
            <div className="bottom">
                <p className="temperature">18℃</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22℃</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15 %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;