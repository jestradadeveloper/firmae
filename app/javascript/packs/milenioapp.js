import Vue from "vue/dist/vue.esm";
import VueClipboard from "vue-clipboard2";
import VueSweetalert2 from "vue-sweetalert2";
const options = {
  confirmButtonColor: "#3cd4c7",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);
Vue.use(VueClipboard);
document.addEventListener("DOMContentLoaded", () => {
  Vue.component("person-data", {
    props: ["name", "position", "email", "number", "time_schedule"],
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
        <div class="col-6">
          <div class="form-group">
            <label for="time_schedule">Horario:</label>
            <input v-model="time_schedule" id="time_schedule" class="form-control" placeholder="Horario">
          </div>
        </div>
      </div>
      <hr>
    
      <html>
      <head>
        <!--[if !mso]><!-- -->
        <style type="text/css">
          h1,h2,h3,h4,h5,h6,p,a,span,td,strong {
            font-family: Arial, Verdana, sans-serif !important;
          }
          a{
            color: #a0a0a0 !important;
          }
          .table__position{
            color: #000;
            font-size: 18px;
          }
          .table__logo{
            text-align: right;
          }
          .table__cell-b1{
            border: 1px solid #1a8b21;
            border-top: 0;
            border-left: 0;
          }
          .table__cell-c1{
            border: 1px solid #1a8b21;
            border-top: 0;
            border-right: 0;
            padding-left: 12px;
          }
          .table__cell-b2{
            border: 1px solid #1a8b21;
            border-bottom: 0;
            border-left: 0;
          }
          .table__cell-c2{
            border: 1px solid #1a8b21;
            border-bottom: 0;
            border-right: 0;
            padding-left: 12px;
          }
          p, .icon{
            color: #9D9D9D;
            margin: 5px 0;
            font-size: 13px;
            line-height: 1;
          }
        </style>
        <!--<![endif]-->
        
      </head>
      <body>
        <div class="row tablefirm" style="font-size:14px; font-family:Arial, sans-serif !important; margin:0 auto;"
          id="tablefirm" ref="tablefirm">
          <table style="display:table; width:750px; font-family: Arial, sans-serif;" width="750">
            <tbody>
              <tr>
                <td class="table__logo" rowspan="2" width="50">
                    <img width="150" src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/grupomilenio-logo.png" alt="">
                </td>
                <td class="table__cell-b1" width="20"></td>
                <td class="table__cell-c1" width="400" height="40"><strong> <span class="table__name">{{name}}</span></strong>
                </td>
              </tr>
              <tr>
                <td class="table__cell-b2" width="20"></td>
                <td class="table__cell-c2" width="400" height="80">
                  <p><strong class="table__position"> {{position}}</strong></p>
                  <p><span class="icon icon-email"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/icon-email.png"> :</span> <a styles="font-family: Arial !important; margin-bottom: 0px; line-height: 1.5em; color: rgb(0, 0, 0); text-decoration: none !important; color:#1a8b21;" href="mailto:{{email}}"><span styles="color:#1a8b21 ;text-decoration: none !important;">{{email}}</span></a></p>
                  <p><span class="icon icon-tel"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/icon-call.png"> :{{number}}</p>
                  <p><span class="icon icon-clock"><img src="https://villagrouploreto.s3.us-west-2.amazonaws.com/firmae/icon-clock.png"> :</span>{{time_schedule}}</p>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

      </div>
    `,
  });

  new Vue({
    el: "#app-milenio",
    data: {
      name: "LCP. Blasa Barajas Robles",
      position: "Contador",
      email: "bbarajas@gpomilenio.mx",
      number: "(322) 222 -1792",
      time_schedule: "L-V 9:00 - 3:00 | 4:00 - 7:00pm"
    },
    methods: {
      copyFirma: function(event) {
        var codigoACopiar = document.getElementById("tablefirm");
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        var res = document.execCommand("copy");
        window.getSelection().removeRange(seleccion);
        this.$swal("¡Firma copiada!");
      },
    },
  });
});
