<script>
import axios from 'axios';

export default {
  props: {
    info: Object,
  },
  data() {
      return {
        message: [],
        email:[],

      };
    },
  methods: {
    publicFunction(){
      axios.get(`http://localhost:8000/api/message/create/email=${this.email}&content=${this.message}`).then((response) => {
        console.log(response);
      })
    },
    },
};

</script>

<template>
    <div class="container-card">
        <div class="card">
            <span><b>{{ info.price }} €</b> notte</span>
            <div class="container-ceck">
                <div class="date-ceck">
                    <div class="ceck-left">
                        <h6>CECK-IN</h6>
                        <input type="date" >
                    </div>
                    <div class="ceck-right">
                        <h6>CECK-OUT</h6>
                        <input type="date" >
                    </div>
                </div>
                <div class="number-person">
                    <h6>OSPITI</h6>
                    <div class="btn-group">
                        <button class="btn btn-light btn-lg dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        1
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <label for="adulti">Adulti</label>
                                <input type="number" name="adulti" placeholder="1"></li>
                            <li>
                                <label for="bambini">Bambini</label>
                                <input type="number" name="bambini" placeholder="0"></li>
                            <li>
                                <label for="neonati">Neonati</label>
                                <input type="number" name="neonati" placeholder="0"></li>
                            <li>
                                <label for="animali">Animali domestici</label>
                                <a href="">Viaggi con un animale di servizio?</a>
                                <input type="number" name="animali" placeholder="0">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger">Prenota</button>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#boxMessager">
            Contatta l'host
            </button>
                <!-- Modal -->
            <div class="modal fade" id="boxMessager" tabindex="-1" aria-labelledby="boxMessagerLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="boxMessagerLabel">Contatta l'host</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="email" placeholder="inserisci email"  v-model="email">
                    <input type="text" placeholder="inserisci testo"  v-model="message">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" @click="publicFunction">Invia</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .container-card{
        width: 400px;
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        .card{
            width: 360px;
            border: none;
            margin: auto;
        }
    }
    .container-ceck{
        border: 1px solid black;
        border-radius: 10px;
    }
    .date-ceck{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .ceck-left{
        display: flex;
        flex-direction: column;
        align-items: center;

        input{
            border: none;
        }
    }
    .ceck-right{
        display: flex;
        flex-direction: column;
        align-items: center;

        input{
            border: none;
        }
    }
    .number-person{
        border-top: 1px solid black;
    }
    li{
        input{
            border: none;
        }
    }

</style>