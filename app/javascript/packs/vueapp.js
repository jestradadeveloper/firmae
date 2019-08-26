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

      <div class="row tablefirm" style="font-size:14px; font-family:Arial !important; margin:0 auto;" id="tablefirm" ref="tablefirm">
      <table style="display:table; width:750px;">
        <tbody>
          <tr style="display:block;">
            <td  style="margin-right:20px; float:left; width:150px;"><img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/Logo-danzante.png" style="display:block;width:120px; margin:15px auto;"></td>
            <td  style="float:left; width:auto; margin-right:50px;">
              <p class="name" style="font-family:Arial !important;margin-bottom:0; line-height:2em"><strong>{{name}}</strong></p>
              <span class="position" style="font-family:Arial !important;margin-bottom:0; line-height:2em">{{position}}</span>
              <p style="font-family:Arial !important;margin-bottom:0; line-height:2em;color:#000; text-decoration:none;"><a href="#" style="font-family:Arial !important;margin-bottom:0; line-height:2em;color:#000; text-decoration:none; text-decoration-line: none;">{{email}}</a></p>

            </td>
            <td style="border-left:1px solid #f3e8d9; padding-left:20px;float:left; width:auto;">
              <p style="font-family:Arial !important;margin-bottom:0; line-height:2em;color:#000;"><img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/Tel.png" style="width:14px;height:14px;"><span style="margin-left:10px;">{{number}}</span></p>
              <p style="font-family:Arial !important;margin-bottom:0; line-height:2em"><img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/Hotel.png" style="width:14px;height:14px;"> <a href="https://villadelpalmarloreto.com" style="margin-left:10px;color:#000; text-decoration:none; text-decoration-line: none;">www.villadelpalmarloreto.com</a></p>
              <p style="font-family:Arial !important;margin-bottom:0; line-height:2em"><img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/Golf.png" style="width:14px;height:14px;"><a href="http://www.tpcdanzantebay.com" style="margin-left:10px;color:#000; text-decoration:none; text-decoration-line: none;" >www.tpcdanzantebay.com</a></p>
            </td>
          </tr>
          <tr style="display:block;clear:both;"><td style="float:left; width:710px;" colspan="3"><img src="https://villagrouploreto.s3-us-west-2.amazonaws.com/firmae/logos-awards-signal-2019.png" style="width:710px;"></td></tr>
          <tr style="display:block; clear:both;">
            <td colspan="3" style="line-height: 11px;font-family:Arial !important; font-size:11px; display:block; float:left;width:680px; margin:2px auto; padding-right:50px">
              Aviso Legal: La información contenida en este mensaje es confidencial. Consulte las políticas de privacidad y seguridad. Disclaimer: The information contained in this communication is confidential. Read privacy and security policies
            </td>  
          </tr>
        
        </tbody>
        </table>
        </div>

    </div>
    `
  })

  new Vue({
    el: '#app',
    data: {
      name: 'Jane Doe',
      position:'Manager',
      email:'janedeo@mail.com',
      number:'+52 (613) 134 10 10'
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
      }
    }
  });



});

