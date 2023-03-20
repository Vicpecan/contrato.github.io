let PlanValue;
let CicloValue;

function setPlanValue(value) {
    PlanValue = value;
}

function setCicloValue(value) {
    CicloValue = value;
}

function CalcularProrrateo() {
    PlanValue = parseFloat(PlanValue);
    CicloValue = new Date(CicloValue);
    CicloValue.setHours(0, 0, 0, 0);
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (!PlanValue || !CicloValue) {
        swal("Por favor proporciona valores válidos para Plan y Ciclo");
        return;
    }

    CicloValue.setHours(0, 0, 0, 0);

    if (PlanValue !== 20.90 && PlanValue !== 25.90){

        var differenceInMilliseconds = CicloValue.getTime() - currentDate.getTime() + (24 * 60 * 60 * 1000);
        var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

        // Aquí se realiza el cambio para calcular el prorrateo dependiendo del ciclo seleccionado: 

        let daysInMonth;  // Variable que contendrá los días del mes a calcular el prorrateo 

        if (CicloValue == 1) { // Si el ciclo es 1 entonces se toman los días del mes vigente 
            daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();  // Se obtienen los días del mes vigente 
        } else { // Si el ciclo es 3, 4 o 5 entonces se toman los días del mes anterior 
            daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0).getDate();   // Se obtienen los días del mes anterior 
        }

        var result = (PlanValue / daysInMonth) * differenceInDays;   // Se calcula el prorrateo con base en los días obtenidos arriba 

        result = Math.round(result * 100) / 100;   // Se redondea a dos decimales el resultado 

        var finalResult = PlanValue + result;   // Se suma al plan el prorrateo calculado para obtener el total a pagar en primer mes 

        finalResult = Math.round(finalResult * 100) / 100;   // Se redondea a dos decimales el total a pagar en primer mes 

        swal({
        
        title:'El saldo del prorrateo es: ' + result,
        text: 'El total a pagar el primer mes es: ' + finalResult,
        icon: 'success'
    });
    }   else {
        swal('Para el plan '+ PlanValue + ' no aplica prorrateo.')
        }
}