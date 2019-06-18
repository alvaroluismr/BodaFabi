import React from "react"
import formStyle from "./confirmaform.module.css"

const url="https://script.google.com/macros/s/AKfycbztghSjo995XPzb4FSY73BfFMblFF7w2eLtiSJb/exec";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validandoEnvio: false,
      exito: false,
      error: false,
    };
  }

  validateHuman = (honeypot) => {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
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

    
    if (this.validateHuman(data.honeypot)) {
      return false;
    }
    this.setState({ validandoEnvio: true });
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        this.setState({ validandoEnvio: false , exito: true });
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map( (k) => {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }

  render() {
    const { exito, validandoEnvio }=this.state;
    return(
      <div>
      {exito ? 
        <div className={formStyle.divgracias}>
          <h2><em>Gracias</em> por confirmarnos tu asistencia!
          Pulsa el botón para volver atras</h2>
          <button onClick={() => this.setState({ exito: false })}>Volver</button>
        </div> 
      : 
      <form className="" method="POST" data-email="example@email.net" action={url} onSubmit={ this.handleFormSubmit } onKeyPress={this.handleEnter} onKeyUp={this.handleEnter} >
        <div className={formStyle.divform} >

          <label className={formStyle.honeypot}>Keep this field blank</label>
          <input className={formStyle.honeypot} type="text" name="honeypot" value="" />
        
          <fieldset className={formStyle.fieldgroup}>
          <legend>Información personal mínima requerida</legend>
            <div>
            <label for="nombre" className={formStyle.bold}>Nombre: </label>
            <input id="nombre" name="nombre" placeholder="Nombre" required className={formStyle.inputext} />
            </div>
            <div>
            <label for="apellidos" className={formStyle.bold}>Apellidos: </label>
            <input id="apellidos" name="apellidos" placeholder="Apellidos" required className={formStyle.inputext} />
            </div>
          </fieldset>

          <fieldset className={formStyle.fieldgroup} style={{marginBottom: '20px', marginTop: '20px'}}>
          <legend>Autobuses (Elija tantas líneas como necesite)</legend>
            <div className={formStyle.anotacion}>
              <p>* Las paradas tanto para la ida como para la vuelta son: </p>
              <p>Cádiz -> Plaza España - Cortefiel - Estadio</p>
              <p>Puerto Real -> Parada de autobuses de la estación de tren *</p>
            </div>
            <div className={formStyle.busgroup}>
            <input id="checkboxes--linea1" type="checkbox" name="autobuses" value="Línea 1 (Cádiz - El Timón)" /> <label for="checkboxes--linea1"><span className={formStyle.bold}>Línea 1:</span> Cádiz - El Timón de Roche - <span className={formStyle.bold}>Salida 18:15</span></label><br />
            <input id="checkboxes--linea2" type="checkbox" name="autobuses" value="Línea 2 (Puerto Real - El Timón)" /> <label for="checkboxes--linea2"><span className={formStyle.bold}>Línea 2:</span> Puerto Real - El Timón de Roche - <span className={formStyle.bold}>Salida 18:15</span></label> <br />
            </div>
            <p className={formStyle.vueltacasa}>----- Vuelta a casa -----</p>
            <div className={formStyle.busgroup}>
            <input id="checkboxes--linea3" type="checkbox" name="autobuses" value="Línea 3 (El Timón - Puerto Real - Cádiz - 3am)" /> <label for="checkboxes--linea3"><span className={formStyle.bold}>Línea 3:</span> El Timón de Roche - Puerto Real - Cádiz - <span className={formStyle.bold}>Salida 3:00 am</span></label> <br />
            <input id="checkboxes--linea4" type="checkbox" name="autobuses" value="Línea 4 (El Timón - Cádiz - 6am)" /> <label for="checkboxes--linea4"><span className={formStyle.bold}>Línea 4:</span> El Timón de Roche - Cádiz - <span className={formStyle.bold}>Salida 6:00 am</span></label> <br />
            <input id="checkboxes--linea5" type="checkbox" name="autobuses" value="Línea 5 (El Timón - Puerto Real - 6am)" /> <label for="checkboxes--linea4"><span className={formStyle.bold}>Línea 5:</span> El Timón de Roche - Puerto Real - <span className={formStyle.bold}>Salida 6:00 am</span></label> <br />
            </div>
          </fieldset>

          <fieldset className={formStyle.fieldgroup}>
          <legend>Menú Especial</legend>
            <p>¿Eres alérgico a algo o tienes alguna necesidad especial para tu menú? Indíquenos cual o cuales para ayudarnos a que disfrutes este día al máximo con nosotros!</p>
            <div className={formStyle.menugroup}>
            <input id="checkboxes--celiaco" type="checkbox" name="menu" value="Celiaco" /> <label for="checkboxes--celiaco">Celiaco</label>
            </div>
            <div className={formStyle.menugroup}>
            <input id="checkboxes--intolerante" type="checkbox" name="menu" value="Intolerante" /> <label for="checkboxes--intolerante">Intolerante</label>
            <label for="intolerante"> - Indique cual: </label>
            <input id="intolerante" name="intolerante" className={formStyle.inputext} />
            </div>
            <div className={formStyle.menugroup}>
            <input id="checkboxes--alergia" type="checkbox" name="menu" value="Alergico" /> <label for="checkboxes--alergia">Alérgico</label>
            <label for="alergico"> - Indique cual: </label>
            <input id="alergico" name="alergico" className={formStyle.inputext} />
            </div>
            <div className={formStyle.menugroup}>
            <input id="checkboxes--otros" type="checkbox" name="menu" value="Otros" /> <label for="checkboxes--otros">Otros</label>
            <label for="otros"> - Indique cual: </label>
            <input id="otros" name="otros" className={formStyle.inputext} />
            </div>
          </fieldset>

          <button className="" disabled={validandoEnvio} >Enviar</button>
        </div>
      </form>
    }
      </div>
    );
  }
    
}