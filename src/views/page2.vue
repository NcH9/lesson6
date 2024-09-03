<template>

</template>

<script type="module">
import { useProductStore } from '@/store/ProductStore';
import { mapActions, mapState } from 'pinia';
export default {
    name: 'page2',
    data(){
        return{

        }
    },
    methods: {
        ...mapActions(useProductStore, ['getProducts'])
    },
    computed: {
        ...mapState(useProductStore, ['products'])
    }
}
</script>

<style scoped>

</style>