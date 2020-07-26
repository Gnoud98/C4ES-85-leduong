function changeProductList(type) {
    document.getElementById(type).style.display = "block";
    switch (type) {
        case 'iphone':
            document.getElementById('samsung').style.display = "none";
            document.getElementById('xiaomi').style.display = "none";
            document.getElementById('oppo').style.display = "none";
            document.getElementById('home_product').style.display = "none";
            break;
        case 'samsung':
            document.getElementById('iphone').style.display = "none";
            document.getElementById('xiaomi').style.display = "none";
            document.getElementById('oppo').style.display = "none";
            document.getElementById('home_product').style.display = "none";
            break;
        case 'xiaomi':
            document.getElementById('iphone').style.display = "none";
            document.getElementById('samsung').style.display = "none";
            document.getElementById('oppo').style.display = "none";
            document.getElementById('home_product').style.display = "none";
            break;
        case 'oppo':
            document.getElementById('iphone').style.display = "none";
            document.getElementById('samsung').style.display = "none";
            document.getElementById('xiaomi').style.display = "none";
            document.getElementById('home_product').style.display = "none";
            break;


    }















}