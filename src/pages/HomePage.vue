<script>
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
      photos: []
    }
  },
  components: {

  },
  created() {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      axios.get(`${this.baseUrl}/api/photos`).then(resp => {
        //console.log(resp);
        this.photos = resp.data.results;
      })
    },
    navigateToDetail(photoId) {
      this.$router.push({ name: 'detail', params: { id: photoId } });
    }
  }
}
</script>

<template>
  <div class="container text-center">
    <h2>All Photos</h2>
    <div class="row row-cols-4" >
      <div class="col g-3" v-for="photo in photos" :key="photo.id">

        <img class="w-100" :src="`${baseUrl}/storage/${photo.image}`" @click="navigateToDetail(photo.id)" alt="">

      </div>
    </div>

  </div>

</template>

<style lang="scss">
.col {
  width: 300px;
  height: 300px;
}
.col img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
}
.col img:hover {
  transform: scale(1.5);
  transition: all .5s ease-out;
}


</style>