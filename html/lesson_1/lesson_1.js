function start(){
    const homer = document.getElementById("homer")
    const bart = document.getElementById("bart")
    const lisa = document.getElementById("lisa")
    const marge = document.getElementById("marge")
    
    const loaderInnerHtml = function(item){
        fetch(`html/lesson_1/${item.id}.html`)
        .then(response => response.text())
        .then(data => {
            contentBlock.innerHTML = "";
            contentBlock.innerHTML = data;
            
            document.getElementById("back_to_home").addEventListener("click",()=>{
                            fetch('html/lesson_1/lesson_1.html') // Загрузить HTML из другого файла
                            .then(response => response.text())
                            .then(data => {
                                contentBlock.innerHTML = "";
                                contentBlock.innerHTML = data;
                                start()
                            })
                        })
    })
    }

    marge.addEventListener("click", ()=>{loaderInnerHtml(marge)})
    homer.addEventListener("click", ()=>{loaderInnerHtml(homer)})
    bart.addEventListener("click", ()=>{loaderInnerHtml(bart)})
    lisa.addEventListener("click", ()=>{loaderInnerHtml(lisa)})
}