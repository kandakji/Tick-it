<template>
    <div class="mt-4">
        <b-card 
        :img-src="buildIconUrl(item.icon)"
        img-alt="Card image"
        img-left class="mb-3"
        img-height="250vw">
        <b-card-title>{{item.title}} <b-badge v-if="item.verified" variant="success">Verified</b-badge></b-card-title>
        <b-card-sub-title>{{item.artist}}	</b-card-sub-title>
        <b-card-text>
            <p><br>
                At {{ item.venue }}<br>
            On {{ item.date }} - {{item.city}},{{item.country}}
            <br>
            </p>
        </b-card-text>
        <b-input-group class="mt-3">
            <template v-slot:prepend>
                <b-input-group-text >{{quantity}} Tickets</b-input-group-text>
            </template>
            <b-form-input type="range" v-model="quantity" :min="item.minTickets" :max="item.numTickets"></b-form-input>
            <template v-slot:append>
                 <b-input-group-text >{{item.numTickets}} Max</b-input-group-text>
            </template>
        </b-input-group>
        <b-button href="#" variant="primary">Buy Now</b-button>
        </b-card>
    </div>
</template>

<script>
import onSaleEvents from '../assets/onSale.json'
export default {
    name: 'onsale',
    data(){
        return {
            item: onSaleEvents.filter((obj)=>{ return obj.id === parseInt(this.$route.params.id);}).pop(),
            quantity: "0"
        }
    },
    methods: {
        buildIconUrl(icon) {
            return require(`../assets/${icon}`);
        }
    },
    created(){
        this.quantity = this.item.minTickets;
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

</style>