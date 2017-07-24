<template>
    <div>
        <h1>内容</h1>
        <button class="logout" @click="logout()">退出</button>
    </div>
</template>
<script>
import Auth from '../lib/login.js'
export default {
    mounted() {
        if (Auth.check()) {
            Auth.logoutSuccess()
            console.log('a')
        }
    },
    methods: {
        logout() {
            if (Auth.logout()) {
                Auth.logoutSuccess()
            }
        }
    }
}
</script>