import React from 'react'


export default function Loading() {
    return (
        <div style={{marginTop: '7%', marginBottom: '12%'}}>
            <div className="title center" style={{color: '#575757'}}>Загрузка</div>
            <div className="center">
                <div className="circleG"></div>
                <div className="circleG"></div>
                <div className="circleG"></div>
            </div>
        </div>
    )
}