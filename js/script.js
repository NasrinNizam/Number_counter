let result = document.querySelectorAll('.result')
let arr = Array.from(result)

 arr.map((item)=>{
    let i = 0
    let count = ()=>{
        i++
        item.innerHTML = i

        if(i == item.dataset.show){
            clearInterval(end)
        }
    }

    let end = setInterval(()=>{
        count()
    } , 500 / item.dataset.show)
 })

