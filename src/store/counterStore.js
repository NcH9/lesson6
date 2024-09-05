import { defineStore } from "pinia";

export const useCounter = defineStore ('counter', {
    state: () => ({
        counter: 0
    }),
    getters: {
        value: (state) => state.counter,
    },
    actions: {
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
    }
})