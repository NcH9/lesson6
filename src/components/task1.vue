<template>
    <v-card class="padding">Hello!</v-card>
    <div class="task">
        <p>Track List:</p>
        <song 
            v-for="(song, index) in products" :key="index"
            :song="song"
        />  
    </div>
    <div class="task">
        <p>counter implemented in product store</p>
        <div class="bubble">counter: {{ counterValue }}</div>
        <div class="bubble">doubled counter: {{ counterDoubleValue }}</div>
        <button @click="increaseCounter">+</button>
        <button @click="decreaseCounter">-</button>
    </div>
    <div class="task">
        <p>counter in different file</p>
        <div class="bubble">counter: {{ value }}</div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
    <div class="task">
        <song 
            v-for="(song, index) in products" :key="index"
            :song="song"
        /> 
        <button @click="prevPage" :disabled="getCurrentPage === 1">Попередня</button>
        <button @click="nextPage" :disabled="getCurrentPage === getTotalPages">Наступна</button>
        <p>Сторінка {{ getCurrentPage }} з {{ getTotalPages }}</p>
    </div>
</template>

<script type="module">
import song from './song.vue';
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../store/ProductStore';
import { useCounter } from '@/store/counterStore';

export default {
    name: 'task1',
    data(){
        return {

        }
    },
    methods: {
        ...mapActions(useProductStore, ['getProducts', 'getCounter', 'increaseCounter', 'decreaseCounter']),
        ...mapActions(useCounter, ['increment', 'decrement']),
        ...mapActions(useProductStore, ['nextPage', 'prevPage']),
    },
    mounted(){
        this.getProducts();
        this.getCounter();
    },
    computed: {
        ...mapState(useProductStore, ['products', 'counterValue', 'counterDoubleValue']),
        ...mapState(useCounter, ['value']),
        ...mapState(useProductStore, ['getCurrentPage', 'getTotalPages']),
    },
    components: {
        song,
    },

}
</script>

<style scoped>
.asd{
    margin: 20px;
}
.padding{
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    padding: 15px;
    margin: 20px;

}
.bubble{
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    box-shadow: 3px -3px 5px rgb(67, 67, 67);
    color: black;
}
.task{
    background-color: rgb(96, 96, 96);
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    box-shadow: 3px -3px 5px rgb(149, 149, 149);
    color: black; 
}
button{
    margin: 10px;
    padding: 10px;
    background-color: white;
    color: black;
}
p {
    color: white;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
}
</style>