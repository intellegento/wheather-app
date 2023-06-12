import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./styles.module.scss";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img src={`icons/${item.weather[0].icon}.svg`} className={styles.dailyItem__icon} alt="weather" />
                  <label className={styles.dailyItem__day}>{forecastDays[idx]}</label>
                  <label className={styles.dailyItem__description}>{item.weather[0].description}</label>
                  <label className={styles.dailyItem__temp}>{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={styles.dailyDetailsGrid__item}>
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;