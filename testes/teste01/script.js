const carro = {
    ano: "2016",
    marca: "Ford",
    placa: "joj-2721",
    buzina: function(){
        return 'Biiiiii'
    },
    completo: function(){
        return "A marca é " + this.marca + ' O ano é ' + this.ano + " e a placa é " + this.placa
    }

}

console.log(carro.buzina())