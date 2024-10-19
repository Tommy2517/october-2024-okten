    const btn_burger_menu = document.getElementById("btn_burger_menu")
    const btn_module_out = document.getElementById("btn_module_out")
    const contentBlock = document.getElementById("contentBlock")


    btn_module_out.onclick = function(){
        btn_burger_menu.classList.toggle("btn_burger_menu_toggle")
    }

    const lesson_1_html = function(e) {        
        contentBlock.classList.toggle('content1') // Показать блок
        contentBlock.classList.toggle('content') // Показать блок

        
        fetch('html/lesson_1/lesson_1.html') // Загрузить HTML из другого файла
        .then(response => response.text())
        .then(data => {
            contentBlock.innerHTML = "";
            contentBlock.innerHTML = data;
            start()
        })
        .catch(error => console.error("Ошибка загрузки файла:", error));
    }

    document.getElementById("btn_lesson_1").addEventListener("click", lesson_1_html);
