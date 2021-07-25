<template>
    <v-form
        @submit.prevent="doLogin"
        v-model="valid"
    >
        <v-text-field
            prepend-icon="mdi-email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            :placeholder="' '"
            required
        ></v-text-field>

        <v-text-field
            prepend-icon="mdi-lock"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            :placeholder="' '"
            :type="'password'"
            required
        ></v-text-field>

        <v-btn
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mr-4"
        >
            Login
        </v-btn>
    </v-form>

</template>

<script>
export default {
    data() {
        return {
            valid: true,
            email: '',
            password: '',
            passwordRules: [
                v => !!v || 'Password is required'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
        }
    },

    methods : {
        doLogin : function () {
            alert('Function not yet available');
        }
    }
}
</script>
