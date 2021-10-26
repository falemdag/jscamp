console.log("Merhaba Kodlama.io")

//JS type safe değildir. 
//Yani dolarBugun = 9.30 dedikten sonra dolarBugun = Ankara değerini de atayabilirsin sorun çıkarmaz.

let dolarBugun = 9.30

let dolarDun = 9.20

{
let dolarDun = 9.10
}


console.log(dolarDun)

// ekrana 9.20 yazdırır. Süslü parantez içini farklı bir yapı olarak algılar.

const euroDun = 11.2
//euroDun = 11  hata verir. yukarıda const(sabittir. farklı değer verilemez) ile tanımladığımız için

console.log(euroDun)


//array
//camelCasing
//PascalCasing
//diziler isimlendirilirken çoğul isimlendirilir. (birden çok elemanı olduğu için)

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}

console.log("</ul>")

console.log (konutKredileri)

// let arabaKredileri = [12,"Araba",[a,b,c]] gibi bir dizi olabilir. 
