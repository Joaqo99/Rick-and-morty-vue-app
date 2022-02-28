import { ref } from 'vue'

const getRandStartVal = ()=>{
    const val = ref(null)
    const error = ref(null)

    const randomStartVal = async ()=>{
        try {
            let data = await fetch("https://rickandmortyapi.com/api/character/8")
            if (!data.ok){
                throw Error("no data available")
            }
            val.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    randomStartVal()
    console.log(val)
    console.log(val.value)
    
    return { val, error, randomStartVal }
}

export default getRandStartVal