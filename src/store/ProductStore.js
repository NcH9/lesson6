import { defineStore } from "pinia";
import axiosInstance from "@/services/axios";

import { useCounter } from "./counterStore";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
        value: 0,
    }),
    getters: {
        products: (state) => state.productsState,
        counterValue: (state) => state.value,
        counterDoubleValue: (state) => (state.value)*2,
    },
    actions: {
        async getProducts(params = {}){
            try {
                await axiosInstance.get('products', {
                    params: {
                        limit: 10,
                        ...params
                    }    
                })
                .then (response => {
                    this.productsState = response.data.results;
                })
            } catch (error) {
                console.log(error);
            }
        },
        getCounter(){
            const counterStore = useCounter();
            console.log(useCounter())
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
    }
})