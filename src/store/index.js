import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        login(username,password) { 
            if (username === '咖喱饭' && password === 'man') {
                this.isAuthenticated = true
                this.user = username
                return true
            }
            return false
        },
        logout() {
            this.isAuthenticated = false
            this.user = null
        },
    },
})
