<script>
export default {
  name: "AppHeader",
  data() {
    return {
      services: [
            'Wifi',
            'Vasca',
            'Vasca idromassaggio',
            'Spa zonarelax',
            'Cancellazione gratuita', 
            'Animali ammessi',
            'Parcheggio gratuito', 
            'Area intrattenimento bimbi',
            'TV',
            'Stanza climatizzata',
            'Servizio navetta',
            'Zona fumatori',
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center mb-5">
    <div class="container">
        <a href="/" class="navbar-brand d-flex w-50 me-auto"><img src="../assets/img/logoboolbnb-prova1.png" alt=""></a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100">
            <ul class="navbar-nav border rounded-pill w-100 p-2">
              <form class="w-100">
                <input type="search" class="form-control border-0" placeholder="Cerca un appartamento">
              </form>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link me-3" href="#">Affitta con Airbnb</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#">Account </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#">Registrati</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Accedi</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  <div class="container d-flex justify-content-center">
    <div class="">
      <ul class="d-flex list-unstyled">
        <li class="me-3" v-for="service in services"><small>{{ service }}</small></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>