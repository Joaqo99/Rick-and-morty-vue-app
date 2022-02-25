<template>
    <header>
        <nav>
            <div class="logo"><img src="@/assets/rick-portal.png" alt="logo"></div>
            <ul class="navigation">
                <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                <li><router-link class="link" :to="{ name: 'Browse' }">Browse</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navegacion",

}
</script>

<style scoped>
    header{
        background: #112137;
        z-index: 99;
        width: 100%;
        position: fixed;
        color: #ddd;
    }

    nav{
        display: flex;
        flex-direction: row;
        height: 55px;
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    ul{
        list-style: none;
    }

    li{
        padding: 20px 25px;
        /*margin-left: 16px;*/
    }

    .link{
        color: #ddd;
        text-decoration: none;
        font-size: 16px;
        padding-bottom: 2px;
    }

    li:hover{
        background: linear-gradient(#112137, #999);
    }

    .logo{
        display: flex;
        align-items: center;
    }

    .logo img{
        width: 90px;
    }

    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }
</style>