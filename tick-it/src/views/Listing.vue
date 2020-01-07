<template>
    <div class="about">
        <h1>See the available tickets</h1>
        
        


        <div class="">
            
            <span>Search: </span><input v-model="search">

            <b-card no-body class="overflow-hidden mx-auto mt-4" style="max-width: 1024px;" v-for="item in items" :key="item.id">
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
    export default {

        name: 'listing',

        data() {
            return {
                search: '',
                items: [

                    {
                        id: 1,
                        title: 'Metallica',
                        date: '2020-01-05',
                        venue: 'Antibes'

                    },
                    {
                        id: 2,
                        title: 'Ariana Grande',
                        date: '2020-01-20',
                        venue: 'Nice'

                    },
                    {
                        id: 3,
                        title: 'Snoop Dogg',
                        date: '2020-02-15',
                        venue: 'Cannes'

                    },


                ],

            }
        },


    }

</script>



<style>


</style>
