<template>
    <div id="app">
        <label>用户名</label>
        <input type="text" name="用户名" v-model="username">
        <br>
        <label>密码</label>
        <input type="password" name="密码" v-model="password">
        <br>
        <button class="login" @click="login()">登录</button>
    </div>
</template>

<script>
import Auth from '../lib/login.js'
export default {
    data() {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    computed: {

    },
    mounted() {
        if (!Auth.check()) {
            console.log('1')
            Auth.loginSuccess()
        }
    },
    methods: {
        login(username, password) {
            if (Auth.login(this.username, this.password)) {
                Auth.loginSuccess()
            } else {
                alert('用户名或密码错误')
            }

        }
    }
}
</script>