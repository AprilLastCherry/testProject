<template>
    <div>
        <h1>user</h1>
        <div>我是user组件{{dyn}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dyn:""
        }
    },
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
