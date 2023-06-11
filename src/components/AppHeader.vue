<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DigitalPA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-5" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/admin">Area Riservata</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>