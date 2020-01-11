<template>
    <div class="about">
            
        <b-card no-body>
            <b-tabs  content-class="mt-3" align="center">
                <b-tab title="On Sale" :class="{ active: onSaleTab}">
                    <b-card no-body class="overflow-hidden mx-auto mt-4" style="max-width: 1024px;" v-for="sItem in filteredOnSale" :key="sItem.id">
                        <b-row no-gutters>
                            <b-col md="12">
                                <b-card-body :title="sItem.title">
                                    <b-card-text>
                                        <p>In {{ sItem.venue }} on {{ sItem.date }}</p>
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-tab>
                <b-tab title="Requested">
                    <b-card no-body class="overflow-hidden mx-auto mt-4" style="max-width: 1024px;" v-for="rItem in filteredRequested" :key="rItem.id">
                        <b-row no-gutters>
                            <b-col md="12">
                                <b-card-body :title="rItem.title">
                                    <b-card-text>
                                        <p>In {{ rItem.venue }} on {{ rItem.date }}</p>
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
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

a {
    color: #17a2b8;
}

a:hover {
  color: #17a2b8;
}

.tabs{
    margin-top: 2%;
}
</style>
