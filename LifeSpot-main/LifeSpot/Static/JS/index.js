        let userAge = prompt("Укажите свой возраст:");
        if (userAge >= 18) {
            let today = new Date().toLocaleString();
            alert('Приветствуем на LifeSpot' + today);
        }
        else { 
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com";
        }
