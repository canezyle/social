<template>

    <v-form
        @submit.prevent="doRegister"
        v-model="valid"
    >
        <v-text-field
            prepend-icon="mdi-account"
            v-model="name"
            :rules="nameRules"
            label="Name"
            :placeholder="' '"
            required
        ></v-text-field>

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

        <v-text-field
            prepend-icon="mdi-lock"
            v-model="confirm_password"
            :rules="confirmPasswordRules"
            label="Confirm Password"
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
            Register
        </v-btn>
    </v-form>

</template>

<script>
export default {
  data() {
      return {
          valid : true,
          name : '',
          email : '',
          password : '',
          confirm_password : '',
          nameRules: [
              v => !!v || 'Name is required'
          ],
          emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          passwordRules: [
              v => !!v || 'Password is required'
          ],
          confirmPasswordRules: [
              v => !!v || 'Password is required',
              v => v === this.password || 'The password confirmation does not match.',
          ]
      }
  },
    methods : {
        doRegister : function () {
            alert('Function not yet available');
        }
    }
}
</script>
