var eve = document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener("DOMContentLoaded",function(){});
    
    data_container = document.getElementById("data_container");
    menu_about = document.getElementById("menu_about");
    menu_catalog = document.getElementById("menu_catalog");
    menu_delivery = document.getElementById("menu_delivery");
    menu_contacts = document.getElementById("menu_contacts");
    menu_buy = document.getElementById("menu_buy");

    buy_list = []

    menu_catalog_click = function(){
        data_container.innerHTML ="";
        catalog.forEach((element,index) => {
            data_container.innerHTML +=
            '<div class="item_container">\
                <h2>'+element.item+'</h2>\
                <img class="catalog_image" src="images/'+element.photo+'">\
                <h4>'+element.description+'</h4>\
                <h4 id="item_price"> Цена: '+element.price+'</h4>\
                <button id="button_item_index'+index+'">Добавить в корзину</button>\
            </div>';
            var interval = setInterval(function(){
                button_buy = document.getElementById("button_item_index"+String(index));
                if (button_buy){
                    button_buy.addEventListener("click",function(){
                        buy_list.push(element);
                        alert("Товар добавлен в корзину!!!")
                        return false;
                    });
                    clearInterval(interval);   
                };
            },1);     
        });
    };
    menu_about.addEventListener("click",function(){
        data_container.innerHTML = "1";
        return false;
    });
    menu_catalog.addEventListener("click",menu_catalog_click);
    menu_delivery.addEventListener("click",function(){
        data_container.innerHTML = "3";
        return false;
    });
    menu_contacts.addEventListener("click",function(){
        data_container.innerHTML = "4";
        return false;
    });
    menu_buy.addEventListener("click",function(){
        data_container.innerHTML = "";
        buy_list.forEach(element => {
            data_container.innerHTML += 
            '<div class="buy_item_container">\
                <img class="buy_image" src="images/'+element.photo+'"></img>\
                <h3 class="buy_text">'+element.item+'</h3>\
                <h3 class="buy_text">'+element.price+'руб.</h3>\
            </div>'
        });
        data_container.innerHTML +=
        '<button id="button_end">Оформить заказ</button>';
         setTimeout(function(){
                button_end = document.getElementById("button_end");
                button_end.addEventListener("click",function(){
                    alert("Заказ отправлен!!!");
                    return false;
                });
            },500);
        return false;
    });
    
    menu_catalog_click();
});