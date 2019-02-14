<template>
    <div>
        <h1>user</h1>
        <div>我是user组件{{dyn}}</div>
        <!-- <div v-test="num"></div> -->
        <button @click="add">增加</button>
    </div>
</template>

<script>
import store from './store/index.js';
export default {
    data(){
        return {
            dyn:this.$route.params.id,
            // num:$store.state.aArg
        }
    },
    methods:{
        add(){
            store.state.user.aArg++;
        }
    },
    store,
    watch:{
        $route(to,from){
            console.log(to);
            console.log(from);
            this.dyn = to.params.id;
        }
    }
}
</script>

<style>

</style>
