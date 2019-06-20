import React from "react"
import SugerenciasStyle from "../pages/cuerpo.module.css"

const url="https://script.google.com/macros/s/AKfycbx7Fqv0lXJIrL_ukmXiOTd6XnOBk8TlHKuAZY_LGA/exec";

export default class formcanciones extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            validandoEnvio: false,
            error: false,
        };
    }

    getFormData = (form) => {
        var elements = form.elements;
    
        var fields = Object.keys(elements).filter(function(k) {
              return (elements[k].name !== "honeypot");
        }).map( (k) => {
          if(elements[k].name !== undefined) {
            return elements[k].name;
          // special case for Edge's html collection
          }else if(elements[k].length > 0){
            return elements[k].item(0).name;
          }
          return "";
        }).filter( (item, pos, self) => {
          return self.indexOf(item) === pos && item;
        });
    
        var formData = {};
        fields.forEach((name) => {
          var element = elements[name];
          
          // singular form elements just have one value
          formData[name] = element.value;
    
          // when our element has multiple items, get their values
          if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
              var item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });
    
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
    
        console.log(formData);
        return formData;
      }

    handleEnter = (event) => {
        var tecla = event.keyCode || event.which;
        if(tecla === 13){
          event.preventDefault();
          return false;
        }
      }

    handleFormSubmit = (event) => {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var data = this.getFormData(form);         // get the values submitted in the form
    
        this.setState({ validandoEnvio: true });
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            this.setState({ validandoEnvio: false });
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map( (k) => {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
        alert("¡Gran canción, casi se nos olvida! ¿Quieres sugerirnos alguna otra?");
        form.elements[0].value="";
        form.elements[0].focus();
    }

    render(){
        const { validandoEnvio } = this.state;
        return (
            <div className={ SugerenciasStyle.contenedortexto }>
                <form name="" method="POST" action={url} onSubmit={ this.handleFormSubmit } onKeyPress={this.handleEnter} onKeyUp={this.handleEnter} >
                <div className={ SugerenciasStyle.texto }>
                    <p>
                        También puedes indicarnos si quieres escuchar alguna canción en concreto durante la fiesta para así hacérselo saber al DJ.
                    </p>
                    <input tyope="text" name="cancion">
                    </input>
                    <div><input type="submit" value="Enviar" disable={validandoEnvio}></input></div>
                </div>
                </form>
            </div>
        );
    }

}