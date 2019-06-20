import React from "react"
import Layout from "../components/layout"
import Countdown from "../components/countdown"
import Galeria from "../components/galeria"
import escudo from "../img/escudo.png"


/*
    var end = new Date('8/8/2019 6:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var texto = "";
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0){
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'VIVAN LOS NOVIOS!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        texto = days + ' dias, ';
        texto += hours + ' horas, ';
        texto += minutes + ' minutos y ';
        texto += seconds + ' segundos';
        document.getElementById('countdown').innerHTML = texto; 
    }
    timer = setInterval(showRemaining, 1000);
    */

export default () => {

    return (
    <Layout>
        <div style={{ margin: '2rem auto', maxWidth: 650, padding: '0 1rem' }}>
            <p style={{
                textAlign: 'center',
                fontSize: '1.9rem',
                color: '#FF8866',
                marginBottom: '0.5rem',
                textShadow: '2px 2px 3px #392033',
                /*backgroundColor: '#FF8866',*/
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '10px',
                borderStyle: 'dotted',
                borderWidth: '2px',
                borderColor: '#FFE577'
            }}>All you need is love... And the beach</p>
            <Galeria />            
            <Countdown />
            <div>
                <figure style={{
                    textAlign: 'center'
                }}>
                    <img src={escudo} alt="Escudo Cádiz CF" ></img>
                </figure>
            </div>

        </div>
    </Layout>
    )
}
