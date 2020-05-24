function getCikis() {
    return document.getElementById("cikti-value").innerText;
}

function getGecmis() {
    return document.getElementById("gecmis-deger").innerText;
}

function setCikis(number) {
    if (number === ""){
        document.getElementById("cikti-value").innerText = number;
    }else{
        document.getElementById("cikti-value").innerText = getFormattedNumber(number);
    }
}

function setGecmis(number) {
    document.getElementById("gecmis-deger").innerText = number;
}

function getFormattedNumber(number) {
    if (number === "-"){
        return "";
    }else{
        const n = Number(number);
        const value = n.toLocaleString("en");
        return value;
    }

}

function reverseNumberFormat(number) {
    return Number(number.replace(/,/g,''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i<operator.length; i++){
    operator[i].addEventListener("click", function () {
        if (this.id === "clear"){
            setCikis("");
            setGecmis("");
        }
        else if (this.id === "backspace"){
            let cikis = reverseNumberFormat(getCikis()).toString();
            if (cikis){
                cikis = cikis.substr(0,cikis.length-1);
                setCikis(cikis);
            }
        }
        else{
            let cikis = getCikis();
            let gecmis = getGecmis();

            if (this.id === "="){
               let result = eval(gecmis + cikis);
               setCikis(result);
            }else{
                gecmis += reverseNumberFormat(cikis) + this.id
                setGecmis(gecmis);
                setCikis("");
            }
        }
    });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i<number.length; i++){
    number[i].addEventListener("click", function () {
        let cikis = reverseNumberFormat(getCikis());
        if (cikis != NaN){
            cikis = cikis + this.id;
            setCikis(cikis);
        }
    });
}