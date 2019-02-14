<template>
    <div>
        <h1>home</h1>
            <!-- <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link> -->
        <p>
            我是home组件{{this.$route.query.a}}
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data (){
        return {
            msg:'我是home组件'
        }
    }
}
</script>


