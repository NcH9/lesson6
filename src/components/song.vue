<template>
    <div class="bubble" v-if="loaded">
        {{ song.trackName }}
    </div>
    
</template>

<script type="module">
export default {
    name: 'song',
    data(){
        return{
            loaded: false,
        }
    },
    props:{
        song: {
            type: Object,
            required: true,
        }
    },
    watch: {
        song: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.loaded = true;
                }
            }
        }
    }
}
</script>

<style scoped>
.padding{
    padding: 15px
}
.bubble{
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    box-shadow: 3px -3px 5px gray;
    color: black;
}
</style>