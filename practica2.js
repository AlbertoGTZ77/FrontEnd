let edad=Number(prompt("ingresa tu edad"))

let altura=Number(prompt("ingresa tu altura en cm"))


if (edad>=12 || altura >=140){

    let pago=prompt("haz hecho el pago o tienes pase vip?").toLocaleLowerCase()
    if (pago==='si'){

        let salud=prompt("cuentas con alguina condicion medica que ponga en riesgo tu salud?").toLocaleLowerCase()
        
        if (salud==='no'){

            if (edad>=16){
                console.log("puedes pasar")
            }
            else {
                let duo=prompt("vienes con un acompañante?").toLocaleLowerCase()
                if( duo==='si'){
                    console.log("puedes pasar")
                }
                else{
                    console.log("no puedes pasar")
                }

            }

            }
            else{
                console.log("no puedes pasar")
            }


    }
    else{
        console.log("no puedes pasar")
    }


    
}else{
    console.log("no puedes pasar")
}
