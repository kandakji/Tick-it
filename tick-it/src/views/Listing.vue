<template>
    <div class="about">
        <h1>See the available tickets</h1>
        
        


        <div class="">
            
            <!-- <span>Search: </span><input type="text" v-model="search" placeholder="Search listings..."> -->

            <b-card no-body class="overflow-hidden mx-auto mt-4" style="max-width: 1024px;" v-for="item in filteredListings" :key="item.id">
                <b-row no-gutters>
                    <b-col md="12">
                        <b-card-body :title="item.title">
                            <b-card-text>
                                <p>In {{ item.venue }} on {{ item.date }}</p>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

        </div>


    </div>
</template>


<script>
    import events from '../assets/events.json'
    export default {

        name: 'listing',

        data() {
            return {
                search: this.$route.query.search,
                items: events

            }
        },
        computed: {
            filteredListings: function(){
                return this.items.filter((item)=> {
                    return item.title.toLowerCase().match(this.search.toLowerCase());
                });
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


</style>
