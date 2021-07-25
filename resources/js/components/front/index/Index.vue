<template>
    <v-container fill-height grid-list-sm text-xs-center>
        <div class="mx-auto col-sm-5">
            <v-tabs
                v-model="tab"
                background-color="primary"
                dark
                fixed-tabs
                centered
            >
                <v-tab>Login</v-tab>
                <v-tab>Register</v-tab>
            </v-tabs>

            <div style="height: 300px;">
                <v-tabs-items v-model="tab">
                    <v-tab-item><login></login></v-tab-item>
                    <v-tab-item><register></register></v-tab-item>
                </v-tabs-items>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            tab : ''
        }
    }
}
</script>
