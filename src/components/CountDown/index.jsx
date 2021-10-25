import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import dayjs from "dayjs";

// days = Math.floor(distance / (1000 * 60 * 60 * 24));
// hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// seconds = Math.floor((distance % (1000 * 60)) / 1000);

const CountDown = ({ stopTime, onFinish }) => {

    const [remainTime, setRemainTime] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs().unix();
            
            const diff = stopTime - now;


            if (diff >= 0) {
                setRemainTime(diff);
            } else {
                console.log('onFinish')
                onFinish()
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const calcSeconds = () => {
        if (remainTime > 1) return `${remainTime} Segundos`
        if (remainTime === 1) return `${remainTime} Segundo`
        return ""
    }

    return (
        <div>
            {calcSeconds()}
        </div>
    )
}

CountDown.propTypes = {
    stopTime: PropTypes.number.isRequired,
    onFinish: PropTypes.func,
}

CountDown.defaultProps = {
    onFinish: () => null
}

export default CountDown