<template>
    <div class="browse">
        <h1 class="titulo">Find your favorite Rick and Morty character</h1>
        <div class="contenedor">
            <input type="text" class="buscador" ref="myInput">
            <button @click="searchClick" class="boton-busqueda">Search</button>
        </div>
        <div class="results-container">
            <CharCard v-for="result in searchResults" :key="result.id"  :result="result"/>
        </div>
        <p class="result-info">{{ searchInfo }}</p>
    </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import CharCard from '../components/CharCard.vue'

export default {
    name: "Browse",
    components: { CharCard },
    setup(){
        const myInput = ref(null)
        const searchResults = ref([])
        const error = ref(null)
        const searchInfo = ref(null)

        onBeforeMount(()=>{
            const val = ref(null)

            const getStartVal = async ()=>{
                let random = Math.floor(Math.random() * 826 + 1 )

                try{
                    let data = await fetch("https://rickandmortyapi.com/api/character/" + random )
                    if(!data.ok){
                        throw Error("Random name error")
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
// -----------------------------------------------------------------------------
        /*  Funcion que haga esto:
                1) Leer lo q se escribió en el searchbar
                2) Busque las coincidencias con "https://rickandmortyapi.com/api/character/?name=NOMBRE"
                3) Traer esos personajes
                4) Almacenarlos en searchResults


                La función ya hace lo anterior, ahora queda:

                1) Sacar y extraer en una nueva variable el primer item del array de resultados ya que no es un resultado como tal pero sirve la info para la paginacion
                2) Hacer la paginación
        */

        const searchClick = async ()=>{
            let searchRequest = myInput.value.value
            let apiResponse
            try{
                let data = await fetch("https://rickandmortyapi.com/api/character/?name=" + searchRequest)
                if(!data.ok){
                        throw Error("No data available")
                    }
                apiResponse = await data.json()
                searchInfo.value = apiResponse.info
                searchResults.value = apiResponse.results
            }
            catch(err){
                    error.value = err.message
                    console.log(error.value)
            }
        }

// -----------------------------------------------------------------------------
        return { myInput, searchClick, searchResults,  searchInfo}
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

    .results-container{
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .result-info{
        color: #0c0;
    }
</style>