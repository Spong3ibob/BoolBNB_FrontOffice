<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    props: {
        info: Object,
    },
    data() {
        return {
            store,
            name: '',
            email: '',
            ceckIn:'',
            ceckOut:'',
            message: ``,
            is_sent: false
        }
    },
    methods: {
        publicFunction(){
            axios.post(`${this.store.backendUrl}/message/create/name=${this.name}&email=${this.email}&content=${this.message}&apartmentId=${this.info.id}`).then((response) => {
                if ( response.status == 200 ) {
                    this.is_sent = true;
                }
            })
        },
        setEmailMessage() {
            this.message = `Buongiorno signor ${this.info.user.name} la contatto per chiederle delle informazioni in merito al suo appartamento ${this.info.title}, situato a ${this.info.full_address}, per il periodo che va dal ${this.ceckIn} al ${this.ceckOut}`;
        }
    },
};
</script>

<template>
    <div class="alert alert-success alert-dismissible fade show mt-3 container-card ms-auto mt-4 d-flex align-items-center" role="alert" v-if="this.is_sent">
        <div>Messaggio inviato all'host con successo.</div>
        <button type="button" class="btn-close me-4 p-0 h-100" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="container-card line-space-divider ms-auto">
        <form class="card" @submit.prevent>
            <span>
                <h5 class="d-inline-block">{{ info.price }} € </h5> 
                notte
            </span>
            <div class="container-ceck my-3">
                <div class="date-ceck p-4">
                    <div class="ceck-left">
                        <h6>CHECK-IN</h6>
                        <input type="date" v-model="this.ceckIn" required>
                    </div>
                    <div class="ceck-right">
                        <h6>CHECK-OUT</h6>
                        <input type="date" v-model="this.ceckOut" required>
                    </div>
                </div>
            </div>
                <!-- Bottone prenota da implementare  -->
            <!-- <button type="button" id="prenota-button" class="my-btn mb-3">Prenota</button> -->
            <!-- Button trigger modal -->
            <div v-if="this.ceckIn !== '' && this.ceckOut !== ''">
                <button type="submit" class="my-btn mx-auto" data-bs-toggle="modal" data-bs-target="#boxMessage" @click="setEmailMessage()">
                    Contatta l'host
                </button>
                <!-- Modal -->
            </div>
            <div v-else>
                <button class="my-btn mx-auto">
                Contatta l'host
                </button>
                <!-- Modal -->
            </div>
        </form>
    </div>

    <!-- Modal Message -->
    <div class="modal fade" id="boxMessage" tabindex="-1" aria-labelledby="boxMessageLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="host-button"> <strong>Contatta l'host {{ info.user.name }}</strong> </h1>
            <button type="button" class="my-btn" data-bs-dismiss="modal" disabled aria-label="Close"></button>
        </div>
        <form @submit.prevent="publicFunction">
            <div class="modal-body">
                    <div class="mb-3">
                        <label for="recipient-name">Nome</label>
                        <input type="text" class="form-control" id="recipient-name" placeholder="inserisci nome" autocomplete="name" v-model="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-email">Email Addres *</label>
                        <input type="email" class="form-control" id="recipient-email" placeholder="inserisci email" autocomplete="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="message-text">Contenuto messaggio *</label>
                        <textarea class="form-control my-textarea" id="message-text" cols="30" rows="10"  required placeholder="Cotenuto messaggio*" v-model="message"></textarea>
                    </div>
            </div>
            <div class="modal-footer">
                    <button type="button" class="my-btn2" data-bs-dismiss="modal">Close</button>
                    <div class="d-inline" v-if="(this.name !== '' && this.email !== '' && this.email.includes('@') )">
                        <button type="submit" class="my-btn2" data-bs-dismiss="modal">Invia</button>
                    </div>
            </div>
        </form>
        </div>
    </div>
    </div>        
</template>

<style lang="scss" scoped>
    .container-card{
        width: 400px;
        border: 1px solid #fa4546;
        border-radius: 10px;
        padding: 20px;
        -webkit-box-shadow: 0px 8px 11px 2px rgba(0,0,0,0.36); 
        box-shadow: 0px 8px 11px 2px rgba(0,0,0,0.36);
        position: sticky;
        top: 30%;
        .card{
            width: 360px;
            border: none;
            margin: auto;                 
        }
    }

    .my-btn{
            width: 70%;
            font-family: Roboto, sans-serif;
            font-weight: 0;
            font-size: 14px;
            color: #fff;
            background: linear-gradient(158deg, #fa4546 0%, #d4029f 100%);
            padding: 10px 30px;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            border-radius: 15px;
            transition : 113ms;
            transform: translateY(0);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            align-self: center;
            cursor: pointer;
        }
        .my-btn:hover{
            transition : 113ms;
            padding: 10px 33px;
            transform : translateY(-2px);
            background: linear-gradient(158deg, #fa4546 0%, #d4029f 100%);
            color: #ffffff;
            border: none;
        }

    .container-ceck{
        border: 1px solid rgba(0, 0, 0, 0.346);
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

    #prenota-button {
        background-color: var(--red-color);
        font-weight: bold;
    }
    .my-btn2{
        width: 30%;
        font-family: Roboto, sans-serif;
        font-weight: 0;
        font-size: 14px;
        color: #fff;
        background: linear-gradient(158deg, #fa4546 0%, #d4029f 100%);
        padding: 10px 30px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        border-radius: 15px;
        transition : 113ms;
        transform: translateY(0);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-self: center;
        cursor: pointer;
    }
    .my-btn2:hover{
        transition : 113ms;
        padding: 10px 33px;
        transform : translateY(-2px);
        background: linear-gradient(158deg, #fa4546 0%, #d4029f 100%);
        color: #ffffff;
        border: none;
    }
    .my-textarea{
        height: 200px;
    }

    .alert.alert-success {
        position: fixed;
        bottom: 0;
        left: 1%;
        top: 90% !important;
        border-color: green;
        & button:focus {
            box-shadow: none;
        }
    }
    // .modal{
    //     z-index: 2000 !important; 
    //     position: fixed;
    // }
</style>