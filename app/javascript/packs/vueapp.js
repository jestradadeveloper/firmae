import Vue from 'vue/dist/vue.esm'
import VueClipboard from 'vue-clipboard2'
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
  confirmButtonColor: '#3cd4c7',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options)
Vue.use(VueClipboard)
document.addEventListener('DOMContentLoaded', () => {

  Vue.component('person-data',{
    props:['name','position','email','number'],
    template: `
    <div>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input v-model="name" id="name" class="form-control" placeholder="Nombre">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="position">Cargo en la empresa:</label>
            <input v-model="position" id="position" class="form-control" placeholder="Cargo">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input v-model="email" id="email" class="form-control" placeholder="Correo">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="number">Numero de teléfono:</label>
            <input v-model="number" id="number" class="form-control" placeholder="Telefono">
          </div>
        
        </div>
        
      
      </div>
      <hr>
      <html><head>
      <!--[if !mso]><!-- -->
        <style type="text/css">
        h1,h2,h3,h4,h5,h6,p,a,span,td,strong{font-family: Arial, Verdana, sans-serif !important;}
        </style>
      <!--<![endif]-->
      </head><body>
      <div class="row tablefirm" style="font-size:14px; font-family:Arial, sans-serif !important; margin:0 auto;" id="tablefirm" ref="tablefirm">
      <table style="display:table; width:750px; font-family: Arial, sans-serif;" width="750">
        <tbody>
          <tr>
            <td style="padding:0px;"><p style="margin:0;"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/logo-2-vdpl-2021-firma.png" style="display:block;" width="180"></p></td>
            <td style="font-family: Arial, sans-serif !important; font-size:10.5px;">
              <p class="name" style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><strong>{{name}}</strong></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em">{{position}}</p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none;"><a :href="'mailto:' + email" target="_blank" style="font-family:Arial !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">{{email}}</span></strong></a></p>
              
            </td>
            <td style="padding:5px;">
              <p style="margin:0;">
                <img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/linea-vertical.png" style="float:left">
              </p>
            </td>
            <td style="font-family: Helvetica, Arial, sans-serif !important;padding:5px;font-size:10.5px;">
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000;"><span style="color:#000;">{{number}}</span></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="https://villadelpalmarloreto.com" target="_blank" style="text-decoration:none !important; text-decoration:none; padding-left:0px;color:#B29245; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important; text-decoration:none;">www.villadelpalmarloreto.com</span></strong></a></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="http://www.tpcdanzantebay.com" target="_blank" style="text-decoration:none !important; text-decoration:none; padding-left:0px;color:#B29245; text-decoration:none !important; text-decoration-line: none !important;" > <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important; text-decoration:none;">www.tpcdanzantebay.com</span></strong></a></p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style="font-family: Helvetica, Arial, sans-serif !important;">
              <p><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/banner-2-vdpl-2021-firma.png" width="710" style="width:710px;"></p>
              <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                Aviso Legal: La información contenida en este mensaje es confidencial. 
                <a href="https://villadelpalmarloreto.mx/politicas-de-privacidad" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">
                  Consulte las políticas de privacidad y seguridad. 
                </a>
              </p>
              <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                Disclaimer: The information contained in this communication is confidential. 
                <a href="https://villadelpalmarloreto.com/privacy-policy" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">Read privacy and security policies
                </a>
              </p>
            </td>
          </tr>
        
        </tbody>
        </table>
          
        </div>
        <hr>
        <div class="row tablefirm-2" style="font-size:14px; font-family:Arial, sans-serif !important; margin:0 auto;" id="tablefirm-2" ref="tablefirm-2">
      <table style="display:table; width:750px;font-family: Arial, sans-serif;" width="750">
        <tbody>
          <tr>
            <td style="padding:5px;"><p style="margin:0;"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/logo-2-danzante-2021-firma.png" style="display:block;" width="180"></p></td>
            <td style="font-family: Arial, sans-serif !important;font-size:10.5px;">
              <p class="name" style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><strong>{{name}}</strong></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em">{{position}}</p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none;"><a :href="'mailto:' + email" target="_blank" style="font-family:Arial !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">{{email}}</span></strong></a></p>
              
            </td>
            <td style="padding:5px;">
              <p style="margin:0;">
                <img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/linea-2-firma-danzante-2021.jpg" style="float:left">
              </p>
            </td>
            <td style="padding:5px; font-family: Arial, sans-serif !important;font-size:10.5px;">
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000;"><span style="color:#000;">{{number}}</span></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="http://www.danzantebay.com/" target="_blank" style="padding-left:0px;color:#9B8E87; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">www.danzantebay.com</span></strong></a></p>
              <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="https://villadelpalmarloreto.com" target="_blank" style="padding-left:0px;color:#9B8E87; text-decoration:none !important; text-decoration-line: none !important;" > <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">www.villadelpalmarloreto.com</span></strong></a></p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style="font-family: Arial, sans-serif !important;">
              <p><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/banner-2-danzantebay-2021-firma.png" width="710" style="width:710px;"></p>
              <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                Aviso Legal: La información contenida en este mensaje es confidencial. 
                <a href="https://villadelpalmarloreto.mx/politicas-de-privacidad" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">
                  Consulte las políticas de privacidad y seguridad. 
                </a>
              </p>
              <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                Disclaimer: The information contained in this communication is confidential. 
                <a href="https://villadelpalmarloreto.com/privacy-policy" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">Read privacy and security policies
                </a>
              </p>
            </td>
          </td>
        </tbody>
        </table>
        </div>
        <hr>
        <div class="row tablefirm-3" style="font-size:14px; font-family:Arial, sans-serif !important; margin:0 auto;" id="tablefirm-3" ref="tablefirm-3">
        <table style="display:table; width:750px; font-family: Arial, sans-serif;" width="750">
          <tbody>
            <tr>
              <td style="padding:5px;"><p style="margin:0;"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/logo-2-tpc-2021-firma.png" style="display:block;" width="180"></p></td>
              <td style="font-family: Arial, sans-serif !important;font-size:10.5px;">
                <p class="name" style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><strong>{{name}}</strong></p>
                <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em">{{position}}</p>
                <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none;"><a :href="'mailto:' + email" target="_blank" style="font-family:Arial !important;margin-bottom:0; line-height:1.5em;color:#000; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">{{email}}</span></strong></a></p>
                
              </td>
              <td style="padding:5px;">
                <p style="margin:0;">
                  <img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/linea-firma-tpc-2021.jpg" style="float:left">
                </p>
              </td>
              <td style="font-family: Arial, sans-serif !important;padding:5px;font-size:10.5px;">
                <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em;color:#000;"><span style="color:#000;">{{number}}</span></p>
                <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="https://villadelpalmarloreto.com" target="_blank" style="padding-left:0px;color:#1B3B6A; text-decoration:none !important; text-decoration-line: none !important;"> <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">www.villadelpalmarloreto.com</span></strong></a></p>
                <p style="margin:0;font-family:Arial, sans-serif !important;margin-bottom:0; line-height:1.5em"><a href="http://www.tpcdanzantebay.com" target="_blank" style="padding-left:0px;color:#1B3B6A; text-decoration:none !important; text-decoration-line: none !important;" > <strong style="text-decoration:none;font-weight:normal;"><span class="blank" style="text-decoration:none !important;">www.tpcdanzantebay.com</span></strong></a></p>
              </td>
            </tr>
            <tr>
              <td colspan="4" style="font-family: Arial, sans-serif !important;">
                <p><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/banner-2-tpc-2021-firma.png" width="710" style="width:710px;"></p>
                <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                Aviso Legal: La información contenida en este mensaje es confidencial. 
                <a href="https://villadelpalmarloreto.mx/politicas-de-privacidad" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">
                  Consulte las políticas de privacidad y seguridad. 
                  </a>
                </p>
                <p style="color:#5d5858;margin:0;line-height: 14px;margin-bottom: 0; font-size:12px">
                  Disclaimer: The information contained in this communication is confidential. 
                  <a href="https://villadelpalmarloreto.com/privacy-policy" target="_blank" style="color:#5d5858; text-decoration:none !important; text-decoration-line: none !important;">Read privacy and security policies
                  </a>
                </p>
              </td>
            </tr>  
          </tbody>
          </table>
          </div>
        <br>

    </div>
    `
  })

  new Vue({
    el: '#app',
    data: {
      name: 'Eduardo Rojas',
      position:'Gerente General',
      email:'eduardo.rojas@vgloreto.com',
      number:'+52 (613) 134 1010'
    },
    methods: {
     
      copyFirma: function(event){
        var codigoACopiar = document.getElementById('tablefirm');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        var res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);    
        this.$swal('¡Firma copiada!'); 
      },
      copyFirmaDanzante: function(event){
        var codigoACopiar = document.getElementById('tablefirm-2');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        var res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);    
        this.$swal('¡Firma copiada!'); 
      },
      copyFirmaTPC: function(event){
        var codigoACopiar = document.getElementById('tablefirm-3');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        var res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);    
        this.$swal('¡Firma copiada!'); 
      }
    }
  });



});

