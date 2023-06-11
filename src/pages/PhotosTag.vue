<script>
import axios from 'axios';

export default {
    name: 'PhotosTag',
    data() {
        return {
        baseUrl: 'http://127.0.0.1:8000',
        photosTag: []
        };
    },
    created() {
        const tagId = this.$route.params.tagId;
        axios.get(`${this.baseUrl}/api/tags/${tagId}/photos`).then((resp) => {
            console.log(resp.data.photosTag);
            this.photosTag = resp.data.photosTag;
        })
    }
};
</script>

<template>
    <div class="container">
        <h2>Photos by Tag </h2>
        <div class="row row-cols-4" >
            <div class="col g-3" v-for="photoTag in photosTag" :key="photoTag.id">
    
                <img class="w-100" :src="`${baseUrl}/storage/${photoTag.image}`" alt="">
    
            </div>
        </div>
    </div>
</template>
