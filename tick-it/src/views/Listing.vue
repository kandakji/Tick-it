<template>
    <div class="about">
            
        <b-card no-body>
            <b-tabs  content-class="mt-3" align="center">
                <b-tab title="On Sale" :class="{ active: onSaleTab}">
                    <b-card no-body v-for="sItem in filteredOnSale" :key="sItem.id">
					<div class="card-tab">
                        <div class="card-img">
						    <b-img-lazy :src="buildIconUrl(sItem.icon)" width="100vw" height="300vw"> </b-img-lazy>
                        </div>
                        <b-card-body :title="sItem.title"  :sub-title="sItem.artist">
							<div class="card-holder">
                            <div class="card-info">
                                <b-card-text>
                                    <b-badge v-if="sItem.verified" variant="success">Verified</b-badge>
                                    <p>At {{ sItem.venue }}</p>
                                    <p>On {{ sItem.date }} - {{sItem.city}},{{sItem.country}}</p>
                                    <b-badge class="price" variant="info"><s>{{parseInt(sItem.price) +10 }} $</s></b-badge><b-badge class="price" variant="success"> {{sItem.price}} $</b-badge>
                                </b-card-text>
                                <div class="card-btn">
                                    <b-button v-bind:href="'/onsale/'+ sItem.id" variant="primary">Buy Now</b-button>
                                    <!-- <b-button v-bind:href="'/onsale/'+ sItem.id" variant="primary">Details</b-button> -->
                                </div>
                            </div>
							</div>
                        </b-card-body>
					</div>
                    </b-card>
                </b-tab>
                <b-tab title="Requested">
                    <b-card no-body v-for="rItem in filteredRequested" :key="rItem.id">
					<div class="card-tab">
                        <div class="card-img">
						    <b-img-lazy :src="buildIconUrl(rItem.icon)" width="100vw" height="300vw"> </b-img-lazy>
                        </div>
                        <b-card-body :title="rItem.title"  :sub-title="rItem.artist">
                            <div class="card-holder">
							<div class="card-info">
                                <b-card-text>
                                    <b-badge v-if="rItem.verified" variant="success">Verified</b-badge>
                                    <p>At {{ rItem.venue }}</p>
                                    <p>On {{ rItem.date }} - {{rItem.city}},{{rItem.country}}</p>
                                </b-card-text>
                                <div class="card-btn">
                                    <b-button v-bind:href="'/requested/'+ rItem.id" variant="primary">Make Offer</b-button>
                                    <!-- <b-button v-bind:href="'/requested/'+ rItem.id" variant="primary">Details</b-button> -->
                                </div>
                            </div>
							</div>
                        </b-card-body>
						</div>
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
                return this.onSaleItems.filter((item)=> item.title.toLowerCase().match(this.search.toLowerCase()) || item.artist.toLowerCase().match(this.search.toLowerCase()) );
            },
            filteredRequested: function(){
                return this.requestedItems.filter((item)=> item.title.toLowerCase().match(this.search.toLowerCase()) || item.artist.toLowerCase().match(this.search.toLowerCase()) );
            },
            originalPrice : function(){return this.requestedItems.map((item) => parseInt(item.price)+10 )}
        },
        watch: {
            '$route' (to, from) {
                this.search = to.query.search;
            }     
        },
		methods: {
			buildIconUrl(icon) {
				return require(`../assets/${icon}`);
			}
		}
    }
</script>



<style scoped>
.card{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    display: table;
}
.card-body{
	display:table-cell;
    width: 80%;
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
    float: left;
    clear: left;
    text-align: left;
    width: 100%;
}
.card-subtitle {
    text-align: left;
    width: 100%;
}
.card-info{
    display: table-row;
    width: 100%;
}
.card-text{
    text-align: left;
    display: table-cell;
    width: 80%;
}
.card-btn {
    display: table-cell;
    width: 20%;
}
.card-tab{
	display: table-row;
    /* width: 100% */
}
.card-img{
	display: table-cell;
	width: 30%;
    
}

.card-img img{
    width: 20vw;
    height: 20vw;
    margin: 5%
}

.card-holder{
	display: table;
    width: 100%
	
}
.btn-primary {
    margin: 1%;
    background-color: #17a2b8;
    border-color: #ffffff;
    float:none;
    width: 90%;
    font-size: 90%;
    white-space: nowrap;
    color: azure;
}
.btn-primary:hover{
    background-color: #14b5ce;
}

.price{
    font-size: 150%;
    margin-top: 2%;
    margin-right: 2%;
}
</style>