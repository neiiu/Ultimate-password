
let min = 1
let max = 100
let randomInteger = Math.floor(Math.random() * (max-min+1) + min)
console.log(randomInteger);
let res = 0
while(true){
    res = prompt("請輸入一個"+min+"~"+max+"的數字");
    console.log('min:'+min+",max:"+max);
    if(res<min || res>max){
        alert('無效猜測,請重新選擇一個數字')
        continue; //如果這裡不continue的話會跑到下面的比較大小
    }
    if(res == randomInteger){
        alert('猜對了！就是'+res)
        break
    }
    else if(res<randomInteger){
        min = res
        // prompt("請輸入一個"+min+"~"+max+"的數字");
    }
    else if(res>randomInteger){
        max = res
        // prompt("請輸入一個"+min+"~"+max+"的數字");
    }
    
}