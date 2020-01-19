<template>
    <div id="app">

        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#"><v-icon name="check" scale="2"/> Tick-It </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">
                        Home
                    </b-nav-item>
                    <b-nav-item to="/tickets">
                        Tickets
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
					<b-nav-item to="/createNew">
						<v-icon name="plus" scale="2"/>
					</b-nav-item>
                    <b-nav-form v-on:submit.prevent @submit="search()">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchContent"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <!-- <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown> -->

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item v-if="signedOn"  href="/profile">Profile</b-dropdown-item>
                        <b-dropdown-item v-if="signedOn" v-on:click="signOut" href="#">Sign Out</b-dropdown-item>
                        <b-dropdown-item v-else href="#" v-b-modal="'signin-form'">Sign In</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>



        <router-view />
        <b-modal ref="signin-modal" id="signin-form" size="lg" hide-footer hide-header>
            <b-tabs  content-class="mt-3" align="center">
                <b-tab title="Sign In">
                    <b-form v-on:submit.prevent="signIn">
                        <b-form-group
                        id="input-group-1"
                        label="Email address"
                        label-for="signin-email"
                        >
                            <b-form-input
                            id="signin-email"
                            type="email"
                            required
                            v-model="signinEmail"
                            ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label="Password"
                                label-for="signin-password"
                            >
                            <b-form-input
                            id="signin-password"
                            type="password"
                            required
                            v-model="signinPassword"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation_signin">
                                Authentication Failed. Please check your credentials.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-button variant="info" type="submit"  class="modal-btn">Sign In</b-button>
                        <b-button variant="outline-dark" @click="$bvModal.hide('signin-form')"  class="modal-btn">Cancel</b-button>
                    </b-form>
                </b-tab>
                <b-tab title="Sign Up">
                    <b-form v-on:submit.prevent="signUp">
                        <b-form-group
                        id="input-group-1"
                        label="Name"
                        label-for="signup-name"
                        >
                        <b-form-input
                        id="signup-name"
                        type="text"
                        required
                        v-model="signupName"
                        ></b-form-input>
                        </b-form-group>

                        <b-form-group
                        id="input-group-2"
                        label="Email address"
                        label-for="signup-email"
                        >
                        <b-form-input
                        id="signup-email"
                        type="email"
                        required
                        v-model="signupEmail"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validation_email_exist">
                            The email entered already exists. Sign in instead.
                        </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            id="input-group-3"
                            label="Password"
                            label-for="signup-password"
                        >
                            <b-form-input
                            id="signup-password"
                            type="password"
                            required
                            v-model="signupPassword"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-3"
                            label="Confirm Password"
                            label-for="signup-password-confirm"
                        >
                            <b-form-input
                            id="signup-password-confirm"
                            type="password"
                            required
                            v-model="signupPasswordConfirm"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation_password_match">
                                The two passwords don't match.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-button variant="info" type="submit" class="modal-btn">Sign Up</b-button>
                        <b-button variant="outline-dark" @click="$bvModal.hide('signin-form')" class="modal-btn">Cancel</b-button>
                    </b-form>
                </b-tab>
            </b-tabs>
        </b-modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchContent: '',
            signedOn: false,
            signinEmail: '',
            signinPassword: '',
            signupName: '',
            signupEmail: '',
            signupPassword: '',
            signupPasswordConfirm: '',
            validation_signin: null,
            validation_password_match: null,
            validation_email_exist: null
        }
    },
    methods: {
        search(){
            this.$router.push({ path: '/tickets', query: { search: this.searchContent } }).catch(err => {});
        },
        signIn(){
            this.validation_signin = null;
            if(localStorage.getItem(this.signinEmail)){
                console.log("User found");
                if(localStorage.getItem(this.signinEmail) == this.signinPassword){
                    console.log("Sign In Successful");
                    sessionStorage.setItem('signin',this.signinEmail);
                    this.signedOn = true;
                    this.$refs['signin-modal'].hide()
                }else{
                    console.log("Wrong password");
                    this.validation_signin = false;
                }
            }else{
                console.log("User not found");
                this.validation_signin = false;
            }

        },
        signUp(){
            this.validation_password_match = null;
            this.validation_email_exist = null;
            if(this.signupPassword == this.signupPasswordConfirm){
                console.log("Password match");
                if(localStorage.getItem(this.signupEmail)){
                    console.log("User already exists");
                    this.validation_email_exist = false;
                }else{
                    console.log("Sign Up successfull");
                    localStorage.setItem(this.signupEmail, this.signupPassword);
                    sessionStorage.setItem('signin', this.signupEmail);
                    this.signedOn = true;
                    this.$refs['signin-modal'].hide()
                }
            }else{
                console.log("Passwords don't match");
                this.validation_password_match = false;
            }
        },signOut(){
            console.log("Signed out")
            this.signedOn = false;
            sessionStorage.removeItem('signin');
        }
    },created(){
        if(sessionStorage.getItem('signin')){
            console.log("Signed in")
            this.signedOn = true;
        }
    }
    
}
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';
    @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
        
    }
    .modal-btn{
        margin-right : 5% !important;
        margin-top: 3%;
        width: 20% !important;
    }

</style>
