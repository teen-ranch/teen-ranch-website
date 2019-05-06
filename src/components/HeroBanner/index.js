import React from 'react'
import './HeroBanner.less'

export default function HeroBanner({ title, subTitle }) {
    return (
        <div className='heroBanner'>

            <h1 className='heroBanner__title'>{ title }</h1>

            <div className='heroBanner__subTitle'>
                { subTitle }
            </div>
        
        </div>
    )
}