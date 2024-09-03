import { defineStore } from "pinia";
import axiosInstance from "@/services/axios";
import { useCounter } from "./counterStore";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
        value: 0,

        currentPage: 1,
        totalPages: 1,
    }),
    getters: {
        products: (state) => state.productsState,
        counterValue: (state) => state.value,
        counterDoubleValue: (state) => (state.value)*2,

        getCurrentPage: (state) => state.currentPage,
        getTotalPages: (state) => state.totalPages,
    },
    actions: {
        getProducts(page = 1, params = {}){
            try{
                axiosInstance.get('products', {
                    params: {
                        limit: 10,
                        page: page,
                        ...params
                    }    
                })
                .then(response=>{
                    console.log(response.data.results)
                    this.productsState = response.data.results;
                    this.currentPage = page;
                    this.totalPages = Math.ceil(response.data.results.length / 5);
                    
                })
            } catch(error) {
                console.log(error);
            };
        },
        getCounter(){
            const counterStore = useCounter();
            this.value = counterStore.counter;
        },
        increaseCounter(){
            const counterStore = useCounter();
            counterStore.increment();
            this.value = counterStore.counter;
        },
        decreaseCounter(){
            const counterStore = useCounter();
            counterStore.decrement();
            this.value = counterStore.counter;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.getProducts(this.currentPage + 1);
                this.currentPage++
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.getProducts(this.currentPage - 1);
                this.currentPage--;
            }
        },
    }
})