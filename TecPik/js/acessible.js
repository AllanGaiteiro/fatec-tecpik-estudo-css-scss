
acessible = () => {
    var stilo = document.getElementById('estilo')
    let stlStandard = 'css/style.css'
    let stlAcessible = 'css/styleAcessible.css'

    stilo.href = (stilo.href == stlAcessible)?  stlStandard : stlAcessible;
} 