<template>
    <div class="contenedor-item">
        <span>Character id: {{ result.id }}</span>
        <img :src="result.image">
        <h2 class="nombre">{{ result.name }}</h2>
        <p>Status: <span>{{ result.status }}</span></p>
        <p>Specie: <span>{{ result.species }}</span></p>
    </div>
</template>

<script>
export default {
    props: ["result"]
}
</script>

<style scoped>
    *{
        color: #999;
    }
    .contenedor-item{
        display: flex;
        border-radius: 10px;
        border: 1px solid #999;
        width: 200px;
        margin: 10px 15px;
        flex-wrap: wrap;
        padding: 3px;
        justify-content: center;
        align-items: center;
    }

    img{
        margin: 10px 0;
        width: 180px;
        height: 180px;
        border-radius: 10px;
    }

    .nombre{
        color: #999;
    }
    p{
        width: 100%;
        margin: 2px;
    }
</style>