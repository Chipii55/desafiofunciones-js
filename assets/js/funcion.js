//4

let color = '';
document.addEventListener ('keydown', function (e) {
    switch (e.key.toLowerCase()) {
        case 'a':
            color = 'lightgreen'
            break;
        
        case 's':
            color = 'pink'
            break;
    
        case 'd':
            color = 'lightblue'
            break;
    
        case 'f':
            color = 'lightgray'
            break;
    
        default:
            color = ''
    }
})

const c1 = document.getElementById("caja1")
const c2 = document.getElementById("caja2")
const c3 = document.getElementById("caja3")
const c4 = document.getElementById("caja4")

c1.addEventListener("click" , () => c1.style.backgroundColor = color)
c2.addEventListener("click" , () => c2.style.backgroundColor = color)
c3.addEventListener("click" , () => c3.style.backgroundColor = color)
c4.addEventListener("click" , () => c4.style.backgroundColor = color)