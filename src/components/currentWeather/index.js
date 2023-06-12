import styles from "./styles.module.scss"

const CurrentWeather = ({data}) => {
    return (
        <div className={styles.weatherInfo}>
            <div className={styles.mainInfo}>
                <div>
                    <p className={styles.mainInfo__city}>{data.city}</p>
                    <p className={styles.mainInfo__wheatherDescrription}>{data.weather[0].description}</p>
                </div>
                <img alt="wheather" className={styles.mainInfo__wheatherIcon} src={`icons/${data.weather[0].icon}.svg`} />
            </div>
            <div className={styles.detailInfo}>
                <p className={styles.detailInfo__temperature}>{Math.round(data.main.temp)}℃</p>
                <div className={styles.detailInfo__details}>
                    <div className={styles.detailInfo__parameterRow}>
                        <span className={styles.detailInfo__parameterLabel}>Details</span>
                    </div>
                    <div className={styles.detailInfo__parameterRow}>
                        <span className={styles.detailInfo__parameterLabel}>Feels like</span>
                        <span className={styles.detailInfo__parameterValue}>{Math.round(data.main.feels_like)}℃</span>
                    </div>
                    <div className={styles.detailInfo__parameterRow}>
                        <span className={styles.detailInfo__parameterLabel}>Wind</span>
                        <span className={styles.detailInfo__parameterValue}>{data.wind.speed}km/h</span>
                    </div>
                    <div className={styles.detailInfo__parameterRow}>
                        <span className={styles.detailInfo__parameterLabel}>Humidity</span>
                        <span className={styles.detailInfo__parameterValue}>{data.main.humidity}%</span>
                    </div>
                    <div className={styles.detailInfo__parameterRow}>
                        <span className={styles.detailInfo__parameterLabel}>Pressure</span>
                        <span className={styles.detailInfo__parameterValue}>{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;