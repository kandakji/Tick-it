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
            <b-badge class="price" variant="info"><s>{{originalPrice}} $</s></b-badge><b-badge class="price" variant="success"> {{item.price}} $</b-badge>
            </p>
        </b-card-text>
        <audio controls :src="buildIconUrl(item.promo)" type="audio/mpeg">
        </audio>
        <b-input-group class="mt-3" v-if="!isMobile()">
            <template v-slot:prepend>
                <b-input-group-text >{{quantity}} Tickets</b-input-group-text>
            </template>
            <b-form-input type="range" v-model="quantity" :min="item.minTickets" :max="item.numTickets"></b-form-input>
            <template v-slot:append>
                 <b-input-group-text >{{item.numTickets}} Max</b-input-group-text>
            </template>
        </b-input-group>
        <div class="num-tickets" v-else>
            Number of Tickets
            <b-form-input
            type="number"
            v-model="quantity"
            :min="item.minTickets"
            :max="item.numTickets"
            ></b-form-input>
        </div>
        
        <b-button href="#" @click="makeToast('info')" variant="primary">Buy Now</b-button>
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
        },isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },makeToast() {
        this.$bvToast.toast('Thank you for your purchase.\n\nEnjoy the event!', {
          title: `Purchase Successful`,
          variant: 'info',
          solid: true
        })
      }
    },
    created(){
        this.quantity = this.item.minTickets;
    },
    computed:{
        originalPrice : function(){return parseInt(this.item.price)+10}
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
    width: 100%;
}

.card-subtitle{
    text-align: left;
    width: 100%;
}

.card-text {
    text-align: left;
    width: 100%;
}

.card-title .badge{
    font-size: 50%;
    height: 100%;
    vertical-align: middle;
}

.btn-primary {
    margin-top: 1%;
    background-color: #17a2b8;
    border-color: #ffffff;
    float:left;
    /* width: 10vw; */
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

.card-img-left{
    width: 25vw;
    height: 25vw;
}

.card-subtitle{
    width: 80%;
}

.card-title{
    width: 80%;
}

.num-tickets{
    text-align: left;
}

audio{
    float: left;
    width: 100%;
}

.num-tickets{
    width: 60%;
    margin-bottom: 10%;
}

.price{
    font-size: 150%;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 2%;
}


</style>