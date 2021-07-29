let data = [];

const tambah = document.querySelector('button');
const input = document.querySelector('#input');
const urutkan = document.querySelector('#urutkan');
const olah = document.querySelector('#average');

tambah.addEventListener('click', function(){
    document.querySelector('.data').innerHTML = "Data = " + pushData(data);
})

urutkan.addEventListener('click',function(){
    document.querySelector('.urut').innerHTML = "Data Urut = " + data.sort();
})

olah.addEventListener('click',function(){
    document.querySelector('.nilaiAverage').innerHTML = "Nilai Rata-Rata = " + nilaiAverage(data);
    document.querySelector('.nilaiTengah').innerHTML = "Nilai Tengah = " + nilaiMedian(data);
    document.querySelector('.hasilKali').innerHTML = "Hasil Kali = " + hasilKali(data);
})

function pushData(data){
    data.push(input.value);

    let angka = "";
    for (let i = 0; i < data.length; i++) {
        angka = angka + data[i] + ",";
    }
    return angka;
      
}

function hasilKali(data){
    let kali= 1;
    for( let i = 0; i < data.length; i++ ){
        kali = kali*parseInt( data[i]);
    }
    return kali;
}

function nilaiAverage(data){
    let sum = 0;
    for( var i = 0; i < data.length; i++ ){
        sum += parseInt( data[i]);
    }
    let avg = sum/data.length;
    return avg;
}

function nilaiMedian(data){
    let median=0
    data.sort();

    if(data.length % 2 === 0){
        median = (parseInt(data[data.length/2 - 1]) + parseInt(data[data.length/2]))/2;
       
    }else {
        median = parseInt(data[(data.length-1)/2]);
    }
    return median;
}




