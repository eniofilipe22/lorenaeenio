import React from 'react'
import './style.css'
import Title from '../common/title'
import Counter from './counter'

import useCountdown from '../../hooks/useCountdown'

const CountDown = ({ title, number }) => {
const [day, hour, minute, second] = useCountdown("April 6, 2024 16:00:00")

    return (
        <div className='container-counter'>
            <Title title="Contagem Regressiva" />
            <div className='countdown-container'>
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
        </div>
    )
}

export default CountDown