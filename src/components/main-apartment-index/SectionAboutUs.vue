<script>


export default {
  name: "SectionAboutUs",
  components: {

  },
};
</script>

<template>
    <section class="chi-siamo">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="../../assets/img/london4k.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="../../assets/img/mountain4k.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="../../assets/img/wild4k.jpeg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container d-flex">
            <div class="card text-light">
                <div class="card-body">
                    <h3 class="card-title m-text-cursive mb-md-3 mb-0">About Us</h3>
                    <div class="about-us-item mb-4">
                        <h4 class="card-subtitle">Mission</h4>
                        <p class="card-text mb-4"><i class="fa-solid fa-quote-left"></i> La missione di BoolBnB è aiutare a creare un mondo in cui puoi appartenere ovunque e in cui le persone possono vivere in un luogo, invece di limitarsi a viaggiare verso di esso. <i class="fa-solid fa-quote-right"></i> </p>
                    </div>
                    <div class="business-item">
                        <hr >
                        <h4 class="card-subtitle">Business</h4>
                        <p class="card-text mb-4"><i class="fa-solid fa-quote-left"></i> BoolBnB è nato nel 2023 quando due host hanno accolto tre ospiti nella loro casa di San Francisco e da allora è cresciuto fino a superare i 4 milioni di host che hanno accolto 200 milioni di ospiti in arrivo in quasi tutti i paesi del mondo. Ogni giorno, gli host offrono soggiorni ed esperienze uniche che consentono agli ospiti di entrare in contatto con le comunità in modo più autentico. <i class="fa-solid fa-quote-right"></i> </p>
                    </div>
                    <div class="our-team-item">
                        <hr>
                        <h4 class="card-subtitle">Our Team</h4>
                        <p class="card-text"><i class="fa-solid fa-quote-left"></i> Leonardo Maran - Maria Ximena - Paolo Napoli - Pietro Fecarotta - Roberto Papagni <i class="fa-solid fa-quote-right"></i></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <h5 class="evidence"><hr></h5> -->

    </section>
</template>

<style lang="scss" scoped>
.chi-siamo {
    position: relative;
    & .carousel-inner {
        width: 100%;

        & .carousel-item {
            & img {
                max-height: 600px;
                filter: brightness(80%);
            }
        }
    }
    & .container {
        & hr {
        }
        & .card {
            backdrop-filter: blur(5px);            
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -40%); 
            background-color: transparent;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; 
            // Typography //
            & h3 {
                display: block;
                font-size: 3.5rem;
                text-align: center;
                color: rgb(240, 215, 215);
                text-shadow: 3px 3px #151010eb;
            }
            & h4 {
                font-size: 1.8rem;
                display: inline-block;
                color: rgb(223, 223, 223);
                text-shadow: 2px 2px #151010eb;
            }
            & p {
                font-size: 1rem;
                font-style: italic;
                text-shadow: 1px 1px #151010eb;

            }
        }
    }
}
</style>