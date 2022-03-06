<template>
    <div class="contenedor-item">
        <h3 class="nombre">{{ result.name }}</h3>
    </div>
</template>

<script>
export default {
    props: ["result"]
}
</script>

<style>
    .contenedor-item{
        border-radius: 5px;
        border: 1px solid #999;
        height: 50px;
        width: 5%;
    }
    .nombre{
        color: #999;
    }
</style>