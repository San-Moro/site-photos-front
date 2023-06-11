
<script>
import axios from 'axios';
export default {
    name: 'PhotoDetail',
    props: ['id'],
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            photo: {},
            tags: []
        }
    },
    created() {
        this.getPhoto();
    },
    methods: {
        getPhoto() {
            const id = this.$route.params.id;
            axios.get(`${this.baseUrl}/api/photos/${id}`).then((resp) => {
                console.log(resp.data.photo);
                this.photo = resp.data.photo;
                this.tags = resp.data.photo.tags;
            })
        },
        handleTagClick(tagId) {
            this.$router.push({ name: 'PhotosTag', params: { tagId: tagId } });
        }
        
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <img class="w-100" :src="`${baseUrl}/storage/${photo.image}`" alt=""> 
            </div>
            <div class="col-3">
                <h4> Author: Luca Rossi {{ photo.user_id }}</h4>
                <p>Date: {{ photo.created_at }}</p>
                <h4>Tags:</h4>
                <ul>
                    <li v-for="tag in tags" :key="tag.id" @click="handleTagClick(tag.id)">
                        <a href="">{{tag.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>