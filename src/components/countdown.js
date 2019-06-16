import React from "react"

var end = new Date('9/6/2019 7:00 PM');
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

class CountDown extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            /*_end: new Date('8/8/2019 6:00 PM'),
            _second: 1000,
            _minute: this.state._second * 60,
            _hour: this.state._minute * 60,
            _day: this.state._hour * 24,*/
            _texto: "",
            _timer: null,
        };
    }

    showRemaining = () => {
        var now = new Date();
        var distance = end - now;
        var texto = "";
        if (distance < 0){
            clearInterval(this.state._timer);
            //document.getElementById('countdown').innerHTML = 'VIVAN LOS NOVIOS!';
            this.setState({_texto: 'VIVAN LOS NOVIOS'});
            return;
        }
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);

        texto = days + ' d, ';
        texto += hours + ' h, ';
        texto += minutes + ' m, ';
        texto += seconds + ' s';
        //document.getElementById('countdown').innerHTML = texto;
        this.setState({
            _texto: texto
        });
    }

    componentDidMount(){
        this.setState({_timer: setInterval(this.showRemaining, 1000)});
    }

    componentWillUnmount(){
        clearInterval(this.state._timer);
    }

    render() {
        return (this.state._texto)
    }

}

export default () => {

    /*var end = new Date('8/8/2019 6:00 PM');

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var texto = "algo";
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
    timer = setInterval(showRemaining, 1000);*/

    return (
        <div id="countdown"
            style={{
                textAlign: 'center',
                fontSize: '1.9rem',
                color: 'white',
                marginBottom: '0.5rem',
                textShadow: '2px 2px 3px #392033',
                backgroundColor: '#FF8866',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderTopWidth: '10px',
                borderBottomWidth: '10px',
                borderColor: '#FF8866',
            }}
        >
            <CountDown />
        </div>
    )
}