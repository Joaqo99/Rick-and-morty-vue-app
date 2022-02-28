<template>
    <div class="browse">
        <h1 class="titulo">Find your favorite Rick and Morty character, location or episode</h1>
        <div class="contenedor">
            <input type="text" class="buscador" ref="myInput">
            <button class="boton-busqueda">Search</button>
        </div>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'

export default {
    name: "Browse",
    setup(){
        const myInput = ref(null)

        onBeforeMount(()=>{
            const val = ref(null)
            const error = ref(null)

            const getStartVal = async ()=>{
                let random = Math.floor(Math.random() * 826 + 1 )

                try{
                    let data = await fetch("https://rickandmortyapi.com/api/character/" + random )
                    if(!data.ok){
                        throw Error("No data available")
                    }
                    val.value = await data.json()
                    myInput.value.value = val.value.name
                }
                catch(err){
                    error.value = err.message
                    console.log(error.value)
                }
            }

            getStartVal()
        })
        return { myInput }
    }
}
</script>

<style>
    .browse{
        position: absolute;
        top: 120px;
        width: 100%;
        text-align: center;
    }

    .titulo{
        color: #777;
        font-size: 65px;
        margin: 0 5%;
    }

    .contenedor{
        display: inline-block;
        margin-top: 80px;
        background: rgba(80, 80, 80, 0.7);
        width: 40%;
        justify-content: center;
        box-sizing: border-box;
        height: 40px;
        border-radius: 25px;
        padding: 10px;
    }

    .buscador{
        background: none;
        height: 100%;
        width: 85%;
        outline: none;
        border: none;
        font-size: 18px;
        font-style: italic;
        color: #ddd;
        border-bottom: 1px solid #999;
    }

    .boton-busqueda{
        background: none;
        font-size: 20px;
        border: none;
        margin-left: 10px;
        cursor: pointer;
    }
</style>