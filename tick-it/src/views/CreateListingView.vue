<template>
	<div>
		<b-card no-body>
			<b-tabs pills card vertical >
				<b-tab title="Put your tickets on sale" active>
					<b-form-group
						label-cols-lg="2"
						label="Ticket Details"
						label-size="lg"
						label-class="font-weight-bold pt-0"
						class="mb-0"
					>
						<b-form-group label-cols-sm="2" label="Event Type :" label-align-sm="right" label-for="input-1"	>
							<b-form-select id="input-1" v-model="sel_event" :options="types" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Title :" label-align-sm="right" label-for="input-2">
							<b-form-input id="input-2" required placeholder="Enter the event name or title"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Artist(s) :" label-align-sm="right" label-for="input-7">
							<b-form-input id="input-7" required placeholder="Enter the artist name"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Country :" label-align-sm="right" label-for="input-3">
							<b-form-select id="input-3" v-model="sel_cntry" :options="allCountries" @change="getCities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event City :" label-align-sm="right" label-for="input-4">
							<b-form-select id="input-4" v-model="sel_city" :options="cities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Date :" label-align-sm="right" label-for="input-5">
							<b-form-input id="input-5" required type="date"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Time :" label-align-sm="right" label-for="input-6">
							<b-form-input id="input-6" required type="time"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Number of Tickets :" label-align-sm="right" label-for="input-8">
							<b-form-input id="input-8" v-model="num_tickets" required type="number" min="1" max="20" ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Price Per Ticket($) :" label-align-sm="right" label-for="input-9">
							<b-form-input id="input-9" v-model="tickPrice" required type="number" min="0"  ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Additional Info :" label-align-sm="right" label-for="input-9">
							<b-form-textarea id="input-10" placeholder="Add additional info" v-model="note" rows="3" max-rows="3"   ></b-form-textarea>
						</b-form-group>
						<b-row labels-col-sm="2">
						<b-col lg="2" class="pb-2" ><b-button variant="primary">Add Ticket </b-button></b-col>
						<b-col lg="2" class="pb-2" ><b-button variant="danger">Cancel</b-button></b-col>
						</b-row>
						
					</b-form-group>
				</b-tab>
				<b-tab title="Request a Ticket" >
					<b-form-group
						label-cols-lg="2"
						label="Ticket Details"
						label-size="lg"
						label-class="font-weight-bold pt-0"
						class="mb-0"
					>
						<b-form-group label-cols-sm="2" label="Event Type :" label-align-sm="right" label-for="input-1"	>
							<b-form-select id="input-1" v-model="sel_event" :options="types" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Title :" label-align-sm="right" label-for="input-2">
							<b-form-input id="input-2" required placeholder="Enter the event name or title"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Artist(s) :" label-align-sm="right" label-for="input-7">
							<b-form-input id="input-7" required placeholder="Enter the artist name"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Country :" label-align-sm="right" label-for="input-3">
							<b-form-select id="input-3" v-model="sel_cntry" :options="allCountries" @change="getCities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event City :" label-align-sm="right" label-for="input-4">
							<b-form-select id="input-4" v-model="sel_city" :options="cities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Date :" label-align-sm="right" label-for="input-5">
							<b-form-input id="input-5" required type="date"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Event Time :" label-align-sm="right" label-for="input-6">
							<b-form-input id="input-6" required type="time"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Number of Tickets :" label-align-sm="right" label-for="input-8">
							<b-form-input id="input-8" v-model="num_tickets" required type="number" min="1" max="20" ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-sm="2" label="Additional Info :" label-align-sm="right" label-for="input-9">
							<b-form-textarea id="input-10" placeholder="Add additional info" v-model="note" rows="3" max-rows="3"   ></b-form-textarea>
						</b-form-group>
						<b-row labels-col-sm="2">
						<b-col lg="2" class="pb-2" ><b-button variant="primary">Add Ticket </b-button></b-col>
						<b-col lg="2" class="pb-2" ><b-button variant="danger">Cancel</b-button></b-col>
						</b-row>
						
					</b-form-group>			
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>

<script>
  import countries from '../assets/countries.json'
  var cities = [{value: null, text: 'Please select a city'}];
  var num_tickets = 1;
  var tickPrice = 1;
  var note = "";
  export default {
    data() {
      return {
		sel_event : null,
		sel_cntry : null,
		sel_city  : null,
		cities,
		num_tickets,
		tickPrice,
		note,
        types: [{value: null, text: 'Please select an option'},
				{value:'event', text: 'Concert'},
				{value:'lecture',text: 'Lecture/Talk'},
				{value:'fair', text: 'Fair/Carnival'}
		],
		countries : Object.keys(countries)
      }
    },
	computed : {
		allCountries : function(){
			var ret = [{value: null, text: 'Please select a country'}];
			var i = 1;
			Object.keys(countries).forEach(function(key) {
				ret.push({value: i, text: key});
				i++;
			});
			return ret;
		},
	},
	methods : {
		getCities(value) {
			var i = 1;
			alert(cities.length);
			while (cities.length > 1){
				cities.pop();
			}
			alert(cities.length);
			if (value != null){
				var items = countries[Object.keys(countries)[value]];
				items.forEach(function (item){
					cities.push({value: i, text: item});
					i++;
				});
			}
		},
		validateNumTickets(value) {
			if (value < 1){
				num_tickets = 1;
			}
			if (value > 20) {
				num_tickets = 20;
			}
		}
		
	}
	
  }
</script>