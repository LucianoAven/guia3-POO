// Crear una clase de cuenta bancaria con operaciones avanzadas: 
// Crear una clase CuentaBancaria con propiedades como saldo y titular. 
// Implementar métodos para depositar, retirar y consultar saldo. 
// Luego, agregar métodos para transferir fondos entre cuentas y para calcular intereses 
// según el tipo de cuenta.

class CuentaBancaria {
    // Propiedades de la clase
    constructor(saldo, titular, interes) {
        this.saldo = saldo;
        this.titular = titular;
        this.interes = interes
    }

    // Métodos
    depositarSaldo(cantidad) {
        this.saldo += cantidad;
        // Llamo a otro método para sumar el interés adicional que se depositará en la cuenta.
        this.calcularInteres(cantidad);
        console.log(`Se depositaron $${cantidad} más un %${this.interes} de interés: $${this.saldoAdicional}.`)
    }

    retirarSaldo(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log(`Se retiraron $${cantidad}`)
        } else {
            console.log("No hay suficiente saldo para retirar");
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.saldo}`);
    }

    calcularInteres(montoInteres) {
        // Creo una nueva propiedad para almacenar el interés adicional sumado al saldo y
        // mostrarlo al usuario.
        this.saldoAdicional = (montoInteres * this.interes) / 100 
        this.saldo += this.saldoAdicional
    }

    // Función para transferir de una cuenta a otra, ingresar la cantidad que se quiera 
    // transferir y la cuenta a transferir.    
    transferirFondos(cantidad, cuenta2) {
        if (this.saldo >= cantidad) {
            // Utilizo los métodos y funciones de la otra cuenta para sumarle el saldo que
            // se le transfirió.
            cuenta2.saldo += cantidad;
            cuenta2.calcularInteres(cantidad);
            this.saldo -= cantidad;
            console.log(`Has transferido $${cantidad} a la cuenta de ${cuenta2.titular}`);
        } else {
            console.log(`No hay suficiente saldo para retirar`);
        }
    }
}

// Creo las dos cuentas de prueba
cuenta = new CuentaBancaria(500, "Pedro", 20);
otraCuenta = new CuentaBancaria(1300, "Javier", 30);

// Pruebo que las funcionen realizen las acciones que se tienen planeadas para cada una.
cuenta.consultarSaldo();
cuenta.depositarSaldo(200);
cuenta.consultarSaldo();
cuenta.retirarSaldo(900);
cuenta.retirarSaldo(400);
cuenta.consultarSaldo();
cuenta.transferirFondos(200, otraCuenta);
otraCuenta.consultarSaldo()