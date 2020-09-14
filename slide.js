<script>
function mover(elem, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo, 
    if(novoInicio >= fim)
     {
    elem.style.left = novoInicio + 'px'
    setTimeout()( => mover(elem, novoInicio, fim, passo, callback), 7 ) 
} 
else { 
        callback()
    }
        
    }
 const p = document.querySelector('[wm-slider] > p')
 p.style.display = 'block'
 mover(p, 1500, -663, 5 () => {
     console.log('Terminou!!!');     })

</script>
