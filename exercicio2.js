divC.style.display = 'none'

const hideinputs = () => {
    let selectTed = selectTemp.value
    console.log(selectTed)

if(selectTed === 'c'){
    document.getElementById("divC").style.display = "none";
    document.getElementById("divF").style.display = "block";

    btnC.style.display = 'block'
    btnF.style.display = 'none'

}else if(selectTed === 'f'){
    document.getElementById("divF").style.display = "none";
    document.getElementById("divC").style.display = "block";

    btnC.style.display = 'none'
    btnF.style.display = 'block'
}


}

const toC = () => {
    event.preventDefault()
    console.log('para celsius')
    let tempFahrenheit = Fahrenheit.value
    let resultadoC = (tempFahrenheit - 32) * 5/9
    window.alert(resultadoC)
}
const toF = () => {
    event.preventDefault()
    console.log('para fahrenheit')
    let tempCelsius = celsius.value
    let resultadoF = ( tempCelsius * 9/5) + 32
    window.alert(resultadoF)
}

