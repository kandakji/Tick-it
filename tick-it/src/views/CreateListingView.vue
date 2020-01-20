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
						<b-form-group label-cols-lg="2" label="Event Type :" label-align-lg="right" label-for="input-1"
						
						>
							<b-form-select id="input-1" v-model="form.sel_event" :options="types" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Title :" label-align-lg="right" label-for="input-2">
							<b-form-input id="input-2" v-model="form.title" required placeholder="Enter the event name or title"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Artist(s) :" label-align-lg="right" label-for="input-7">
							<b-form-input id="input-7" v-model="form.artist" required placeholder="Enter the artist name"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Venue :" label-align-lg="right" label-for="input-12">
							<b-form-input id="input-12" v-model="form.venue" required placeholder="Enter the venue"></b-form-input>
						</b-form-group>						
						<b-form-group label-cols-lg="2" label="Event Country :" label-align-lg="right" label-for="input-3">
							<b-form-select id="input-3" v-model="form.sel_cntry" :options="allCountries" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event City :" label-align-lg="right" label-for="input-4">
							<b-form-select id="input-4" v-model="form.sel_city" :options="cities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Date :" label-align-lg="right" label-for="input-5">
							<b-form-input id="input-5" v-model="form.edate" required type="date"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Time :" label-align-lg="right" label-for="input-6">
							<b-form-input id="input-6" v-model="form.etime" required type="time"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Number of Tickets :" label-align-lg="right" label-for="input-8">
							<b-form-input id="input-8" v-model="form.num_tickets" required type="number" min="1" max="20" ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Price Per Ticket($) :" label-align-lg="right" label-for="input-9">
							<b-form-input id="input-9" v-model="form.tick_price" required type="number" min="0"  ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Add a thumbnail :" label-align-lg="right" label-for="input-10">
							<b-card :img-src="buildIconUrl(form.thumb)" img-right img-height="200vw" img-width="200vw" img-alt="please pick a thumbnail">
								<b-form-select id="input-3" v-model="form.thumb" :options="thumbs" trim></b-form-select>
							</b-card>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Additional Info :" label-align-lg="right" label-for="input-11">
							<b-form-textarea id="input-11" placeholder="Add additional info" v-model="form.note" rows="3" max-rows="3"   ></b-form-textarea>
						</b-form-group>
						<b-row labels-col-lg="2">
						<b-col lg="2" class="pb-2" ><b-button variant="primary" @click="createOnSale" v-bind:href="'/mylistings'" >Add Ticket </b-button></b-col>
						<b-col lg="2" class="pb-2" ><b-button variant="danger" v-bind:href="'/home/'" >Cancel</b-button></b-col>
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
						<b-form-group label-cols-lg="2" label="Event Type :" label-align-lg="right" label-for="input-1"	>
							<b-form-select id="input-1" v-model="form.sel_event" :options="types" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Title :" label-align-lg="right" label-for="input-2">
							<b-form-input id="input-2" v-model="form.title" required placeholder="Enter the event name or title"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Artist(s) :" label-align-lg="right" label-for="input-7">
							<b-form-input id="input-7" v-model="form.artist" required placeholder="Enter the artist name"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Venue :" label-align-lg="right" label-for="input-12">
							<b-form-input id="input-12" v-model="form.venue" required placeholder="Enter the venue"></b-form-input>
						</b-form-group>	
						<b-form-group label-cols-lg="2" label="Event Country :" label-align-lg="right" label-for="input-3">
							<b-form-select id="input-3" v-model="form.sel_cntry" :options="allCountries" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event City :" label-align-lg="right" label-for="input-4">
							<b-form-select id="input-4" v-model="form.sel_city" :options="cities" trim></b-form-select>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Date :" label-align-lg="right" label-for="input-5">
							<b-form-input id="input-5" v-model="form.edate" required type="date"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Event Time :" label-align-lg="right" label-for="input-6">
							<b-form-input id="input-6" v-model="form.etime" required type="time"></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Number of Tickets :" label-align-lg="right" label-for="input-8">
							<b-form-input id="input-8" v-model="form.num_tickets" required type="number" min="1" max="20" ></b-form-input>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Add a thumbnail :" label-align-lg="right" label-for="input-10">
							<b-card :img-src="buildIconUrl(form.thumb)" img-right img-height="200vw" img-width="200vw" img-alt="please pick a thumbnail">
								<b-form-select id="input-3" v-model="form.thumb" :options="thumbs" trim></b-form-select>
							</b-card>
						</b-form-group>
						<b-form-group label-cols-lg="2" label="Additional Info :" label-align-lg="right" label-for="input-9">
							<b-form-textarea id="input-10" placeholder="Add additional info" v-model="form.note" rows="3" max-rows="3"   ></b-form-textarea>
						</b-form-group>
						<b-row labels-col-lg="2">
						<b-col lg="2" class="pb-2" ><b-button variant="primary" @click="createOnRequest" v-bind:href="'/mylistings'">Add Ticket </b-button></b-col>
						<b-col lg="2" class="pb-2" ><b-button variant="danger" v-bind:href="'/home/'">Cancel</b-button></b-col>
						</b-row>
						
					</b-form-group>			
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>

<script>
  import countries from '../assets/countries.json'
  var num_tickets = 1;
  var tick_price = 1;
  var note = "";
  var thumb = 'default.jpg';
  var sel_event = null;
  var sel_city = null;
  var sel_cntry = null;
  var artist;
  var title;
  var edate;
  var etime;
  var venue;
  var types =  [{value: null, text: 'Please select an option'},
				{value:'event', text: 'Concert'},
				{value:'lecture',text: 'Lecture/Talk'},
				{value:'fair', text: 'Fair/Carnival'}
				];
  var thumbs = [
				{value: 'concert5.jpg', text: 'Mood'},
				{value: 'concert6.jpg', text: 'Awesome'},
				{value: 'concert7.jpg', text: 'Surreal'},
				{value: 'guitar.jpg', text: 'Pleasant'},
				{value: 'carnival.jpg', text: 'Fun'},
				{value: 'motivational.jpg', text: 'Attitude'},
				{value: 'music.jpg', text: 'Symphony'},
				];
  export default {
    data() {
      return {
	  
	  form : {
		sel_event,
		sel_cntry,
		sel_city,
		num_tickets,
		tick_price,
		note,
		thumb,
		edate,
		etime,
		title,
		artist,
		venue
		},
		thumbs,
        types,
		countries : Object.keys(countries)
    }
	},
	computed : {
		allCountries : function(){
			var ret = [{value: null, text: 'Please select a country'}];
			var i = 0;
			Object.keys(countries).forEach(function(key) {
				ret.push({value: i, text: key});
				i++;
			});
			return ret;
		},
		cities : function (){
			var ret = [{value: null, text: 'Please select a city'}];
			var i = 0;
			if (this.form.sel_cntry != null){
				var items = countries[Object.keys(countries)[this.form.sel_cntry]];
				items.forEach(function (item){
					ret.push({value: i, text: item});
					i++;
				});
			}
			return ret;
		}
	},
	methods : {
		buildIconUrl(icon) {
				return require(`../assets/${icon}`);
			},
		createOnSale () {
		    var result = 
				{
				"id": ""+Math.floor(Math.random()*1000),
				"title": this.form.title,
				"artist": this.form.artist,
				"numTickets": this.form.numTickets,
				"minTickets": 1,
				"venue": this.form.venue,
				"date": this.form.edate,
				"time": this.form.etime,
				"city": this.cities[this.form.sel_city+1].text,
				"country": this.allCountries[this.form.sel_cntry+1].text,
				"icon" : this.form.thumb,
				"price": this.form.tick_price,
				"user" : sessionStorage.getItem('signin')
				};
			var tickOnSale = localStorage.getItem('tickOnSale');
			if (tickOnSale !== "undefined" && tickOnSale) {
				tickOnSale = JSON.parse(tickOnSale);
				tickOnSale.push(result);
			}else{
				tickOnSale = [result];
			}
			tickOnSale = JSON.stringify(tickOnSale);
			localStorage.setItem('tickOnSale', tickOnSale);
		
		},
		createOnRequest () {
		    var result = 
				{
				"id": ""+Math.floor(Math.random()*1000),
				"title": this.form.title,
				"artist": this.form.artist,
				"numTickets": this.form.numTickets,
				"minTickets": 1,
				"venue": this.form.venue,
				"date": this.form.edate,
				"time": this.form.etime,
				"city": this.cities[this.form.sel_city+1].text,
				"country": this.allCountries[this.form.sel_cntry+1].text,
				"icon" : this.form.thumb,
				"user" : sessionStorage.getItem('signin')
				};
			var tickOnReq = localStorage.getItem('tickOnReq');
			if (tickOnReq !== "undefined" && tickOnReq) {
				tickOnReq = JSON.parse(tickOnReq);
				tickOnReq.push(result);
			}else{
				tickOnReq = [result];
			}
			tickOnReq = JSON.stringify(tickOnReq);
			localStorage.setItem('tickOnReq', tickOnReq);
		
		}
		
		
	}
	
  }
</script>