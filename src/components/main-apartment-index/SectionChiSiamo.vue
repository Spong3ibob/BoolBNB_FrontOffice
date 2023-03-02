<script>


export default {
  name: "SectionChiSiamo",
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
                    <h3 class="card-title mb-5">About Us</h3>
                    <div class="about-us-item p-1 mb-4">
                        <h4 class="card-subtitle mb-2">Mission</h4>
                        <p class="card-text"><i class="fa-solid fa-quote-left"></i> Airbnb's mission is to help create a world where you can belong anywhere and where people can live in a place, instead of just traveling to it.<i class="fa-solid fa-quote-right"></i> </p>
                    </div>
                    <hr>
                    <div class="business-item p-1 mb-4">
                        <h4 class="card-subtitle mb-2">Business</h4>
                        <p class="card-text"><i class="fa-solid fa-quote-left"></i> Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 4 million Hosts who have welcomed 1.4 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way. <i class="fa-solid fa-quote-right"></i> </p>
                    </div>
                    <hr>
                    <div class="our-team-item p-1 mb-4">
                        <h4 class="card-subtitle mb-2">Our Team</h4>
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


   /* & .evidence {
        background-color: white;
        border: 2px solid var(--red-color);
        color: var(--red-color);
        position: absolute;
        left: 50%;
        bottom: -175px;
        transform: translate(-50%, 0);
        padding: 8px 15px;
        border-radius: 18px;
      }
    */
    position: relative;
    & .carousel-inner {
            

        & .carousel-item {
            & img {
                max-height: 800px;
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
            top: 10%;
            transform: translate(-50%, 0); 
            background-color: transparent;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; 
            & h3 {
                font-size: 2.5rem;
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