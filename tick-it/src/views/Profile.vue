<template>
    <div class="mt-4" v-if="signedOn">
        <b-card 
        :img-src="buildIconUrl('user.png')"
        img-alt="Card image"
        img-left class="mb-3"
        img-height="250vw">
        <b-card-title>{{user.name}}</b-card-title>
        <b-card-sub-title>{{user.email}}</b-card-sub-title>
        <b-card-text>
            <p><br>
                Account Details
            <br>
            </p>
        </b-card-text>
        <b-card-group deck>
                <b-card
                header="Tickets Sold"
                header-tag="header"
                title="Total 12"
                border-variant="success"
                >
                <b-card-text><b-badge variant="success"> ▲ </b-badge> 4 Tickets Last Month</b-card-text>
                <b-button href="/tickets" variant="primary">View Listings</b-button>
                </b-card>

                <b-card title="Total 6" header-tag="header" footer-tag="footer" border-variant="danger">
                <template v-slot:header>
                    <h6 class="mb-0">Tickets Bought</h6>
                </template>
                <b-card-text><b-badge variant="danger"> ▼ </b-badge> 2 Tickets Last Month</b-card-text>
                <b-button href="#" variant="primary">View Listings</b-button>
                </b-card>
            </b-card-group>
        </b-card>
    </div>
</template>

<script>
// import onSaleEvents from '../assets/onSale.json'
export default {
    name: 'profile',
    data(){
        return {
            user: null,
            signedOn: false,
        }
    },
    methods: {
        buildIconUrl(icon) {
            return require(`../assets/${icon}`);
        }
    },
    created(){
        if(sessionStorage.getItem('signin')){
            console.log("Signed in")
            this.signedOn = true;
            this.user = JSON.parse(localStorage.getItem(sessionStorage.getItem('signin')));
            this.user.email = sessionStorage.getItem('signin');
        }
    }
}
</script>

<style scoped>

.mt-4 {
    margin: 5%;
}

.card-title{
    text-align: left;
    display: block;
    margin-top: 2vw;
}

.card-subtitle{
    text-align: left;
}

.card-text {
    text-align: left;
}

.card-title .badge{
    font-size: 50%;
    height: 100%;
    vertical-align: middle;
}

.btn-primary {
    margin: 1%;
    background-color: #17a2b8;
    border-color: #ffffff;
    float: left;
    width: 30%;
    font-size: 90%;
    white-space: nowrap;
}
.btn-primary:hover{
    background-color: #14b5ce;
}

.input-group{
    width: 70%;
    padding-top: 5%;
    padding-bottom: 5%;
}

.card-img-left{
    margin: 2vw;
}

.card-text{
    font-size: 100%;
    vertical-align: bottom;
}

.card-text .badge{
    font-size: 100%;
    vertical-align: middle;
}

.card-body .btn-primary{
    width: 15vw;
    text-align: center;
    font-size: 1vw;
}

.card-deck{
    float: left;
    padding-right: 10%;
}

.card-deck .card{
    width: 100%;
}

.card-img-left{
    width: 25vw;
    height: 25vw;
}

.btn-primary {
    margin: 1%;
    background-color: #17a2b8;
    border-color: #ffffff;
    float:none;
    width: 90%;
    font-size: 90%;
    white-space: nowrap;
}
.btn-primary:hover{
    background-color: #14b5ce;
}

.card-subtitle{
    width: 80%;
}

.card-title{
    width: 80%;
}


</style>