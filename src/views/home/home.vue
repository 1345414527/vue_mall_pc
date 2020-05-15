<template>
    <div class="home">
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            logout(){
                window.sessionStorage.removeItem('token')
                this.$router.replace('/')
                return this.$message({
                    showClose: true,
                    message: '退出成功',
                    type: 'success'
                })
            }
        }
    }
</script>

<style scoped>

</style>