<template>
    <div class="hello h-100">

        <div class="introduction mx-auto">
            <v-icon name="check" scale="25" class="content" />

            <h2 class="content">Welcome to Tick-It!</h2>
            <p>The best online platform for exchanging event tickets</p>

            <b-btn to="/tickets" variant="primary">Find out more</b-btn>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .hello {

        background: linear-gradient(rgba(20, 30, 20, 0.6) 100%, rgba(0, 50, 0, 0.6) 100%),
            url(../assets/bg.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

    }

    .introduction {
        border: 0px solid;
        border-radius: 10px;
        //background: #ddd;
        // opacity: 0.2;
        width: 25rem;
        color: #ddd;
        text-shadow: 2px 2px 2px 5px #ccc;
        //box-shadow: 5px 10px #888888;
    }

    .content {
        opacity: 1;
    }

</style>
