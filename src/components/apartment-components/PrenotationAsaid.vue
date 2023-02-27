<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    props: {
        info: Object
    },
    data() {
        return {
            store,
            message: '',
            email: '',
            is_sent: false
        };
    },
    methods: {
        publicFunction(){
            axios.get(`${this.store.backendUrl}/message/create/email=${this.email}&content=${this.message}&apartmentId=${this.info.id}`).then((response) => {
                if ( response.status == 200 ) {
                    this.is_sent = true;
                }
            })

            this.email = '';
            this.message = '';
        },
    },
};

</script>

<template>
    <div class="container-card line-space-divider ms-auto">
        <div class="card">
            <span>
                <h5 class="d-inline-block">{{ info.price }} € </h5> 
                notte
            </span>
            <div class="container-ceck my-3">
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
            <button type="button" id="prenota-button" class="btn mb-3 text-white">Prenota</button>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#boxMessager">
            Contatta l'host
            </button>
                <!-- Modal -->
            <div class="modal fade" id="boxMessager" tabindex="-1" aria-labelledby="boxMessagerLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="boxMessagerLabel">Contatta l'host {{ info.user.name }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="inserisci email" autocomplete="email" v-model="email" required>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="inserisci testo" v-model="message" required>
                        <label for="floatingInput">Contenuto messaggio</label>
                    </div>
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
    <div class="container-card alert alert-success ms-auto mt-3" v-if="this.is_sent">
        Messaggio inviato all'Host {{ info.user.name }} con successo !
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

    #prenota-button {
        background-color: var(--red-color);
        font-weight: bold;
    }

</style>