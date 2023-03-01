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
            email: '',
            ceckIn:'',
            ceckOut:'',
            message: '',
            is_sent: false
        }
    },
    methods: {
        publicFunction(){
            const textArea = document.querySelector('.my-textarea');

            axios.post(`${this.store.backendUrl}/message/create/email=${this.email}&content=${textArea.innerHTML}&apartmentId=${this.info.id}`).then((response) => {
                if ( response.status == 200 ) {
                    this.is_sent = true;
                }
            })
        },
    }
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
                <div class="date-ceck p-4">
                    <div class="ceck-left">
                        <h6>CECK-IN</h6>
                        <input type="date" v-model="ceckIn" required>
                    </div>
                    <div class="ceck-right">
                        <h6>CECK-OUT</h6>
                        <input type="date" v-model="ceckOut" required>
                    </div>
                </div>
            </div>
                <!-- Bottone prenota da implementare  -->
            <!-- <button type="button" id="prenota-button" class="my-btn mb-3">Prenota</button> -->
            <!-- Button trigger modal -->
            <button type="button" class="my-btn" data-bs-toggle="modal" data-bs-target="#boxMessager">
            Contatta l'host
            </button>
                <!-- Modal -->
            </div>
    </div>
<div class="modal fade" id="boxMessager" tabindex="-1" aria-labelledby="boxMessagerLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="host-button"><strong>Contatta l'host {{ info.user.name }}</strong> </h1>
            <button type="button" class="my-btn" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="inserisci email" autocomplete="email" v-model="email" required>
                <label for="floatingInput">Email address*</label>
            </div>
            <div class="form-floating mb-4">
                <textarea class="form-control my-textarea" id="floatingInput" cols="30" rows="10"  required placeholder="Cotenuto messaggio*">Buongiorno signor {{ this.info.user.name}} la contatto per prenotare dal giorno {{ this.ceckIn }} al giorno {{ this.ceckOut }},</textarea>
                <label for="floatingInput">Contenuto messaggio*</label>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="my-btn2" data-bs-dismiss="modal">Close</button>
            <button type="button" class="my-btn2"  data-bs-dismiss="modal" @click="publicFunction">Invia</button>
        </div>
        </div>
    </div>
</div>

<div class="alert alert-success alert-dismissible fade show mt-3 container-card ms-auto mt-4" role="alert" v-if="this.is_sent">
    Messaggio inviato all'host con successo.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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

    // .modal{
    //     z-index: 2000 !important; 
    //     position: fixed;
    // }
</style>