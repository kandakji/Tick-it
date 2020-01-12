<template>
    <div class="about">
            
        <b-card no-body>
            <b-tabs  content-class="mt-3" align="center">
                <b-tab title="On Sale" :class="{ active: onSaleTab}">
                    <b-card no-body v-for="sItem in filteredOnSale" :key="sItem.id">
                        <b-card-body :title="sItem.title"  :sub-title="sItem.artist">
                            <div class="card-info">
                                <b-card-text>
                                    <p>At {{ sItem.venue }}</p>
                                    <p>On {{ sItem.date }} - {{sItem.city}},{{sItem.country}}</p>
                                </b-card-text>
                                <div class="card-btn">
                                    <b-button v-bind:href="'/onsale/'+ sItem.id" variant="primary">Buy Now</b-button>
                                    <b-button v-bind:href="'/onsale/'+ sItem.id" variant="primary">Details</b-button>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-tab>
                <b-tab title="Requested">
                    <b-card no-body v-for="rItem in filteredRequested" :key="rItem.id">
                        <b-card-body :title="rItem.title"  :sub-title="rItem.artist">
                            <div class="card-info">
                                <b-card-text>
                                    <p>At {{ rItem.venue }}</p>
                                    <p>On {{ rItem.date }} - {{rItem.city}},{{rItem.country}}</p>
                                </b-card-text>
                                <div class="card-btn">
                                    <b-button v-bind:href="'/request/'+ rItem.id" variant="primary">Make Offer</b-button>
                                    <b-button v-bind:href="'/request/'+ rItem.id" variant="primary">Details</b-button>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-tab>
            </b-tabs>
        </b-card>

    </div>

</template>

<script>
    import onSaleEvents from '../assets/onSale.json'
    import requestedEvents from '../assets/requested.json'
    export default {

        name: 'listing',

        data() {
            return {
                search: '',
                onSaleItems: onSaleEvents,
                requestedItems: requestedEvents,
                onSaleTab: true
            }
        },
        created() {
            if(this.$route.query.search != null){
                this.search = this.$route.query.search
            }
        },
        computed: {
            filteredOnSale: function(){
                return this.onSaleItems.filter((item)=> item.title.toLowerCase().match(this.search.toLowerCase()));
            },
            filteredRequested: function(){
                return this.requestedItems.filter((item)=> item.title.toLowerCase().match(this.search.toLowerCase()));
            }
        },
        watch: {
            '$route' (to, from) {
                this.search = to.query.search;
            }     
        },


    }

</script>



<style>

.card{
    width: 100%;
    display: table;
    margin: 1%;
}

.card-body{
    width: 100%;
}

.card{
    padding:1%;
    width: 100%;
}

a {
    color: #17a2b8;
}

a:hover {
  color: #17a2b8;
}

.tabs{
    margin-top: 2%;
}

.card-title{
    text-align: left;
    width: 100%;
}

.card-subtitle {
    text-align: left;
}

.card-info{
    display: table-row;
}

.card-text{
    text-align: left;
    display: table-cell;
    width: 90%;
}

.card-btn {
    display: table-cell;
    width: 10%;
}

.btn-primary {
    margin: 1%;
    width: 90%;
    background-color: #17a2b8;
    border-color: #ffffff;
}

.btn-primary:hover{
    background-color: #14b5ce;
}



</style>
