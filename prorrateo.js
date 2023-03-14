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

        var daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        var result = (PlanValue * differenceInDays) / daysInCurrentMonth;
    
        result = Math.round(result * 100) / 100;

        var finalResult = PlanValue + result;

        finalResult = Math.round(finalResult * 100) / 100;

        swal({
        
        title:'El saldo del prorrateo es: ' + result,
        text: 'El total a pagar el primer mes es: ' + finalResult,
        icon: 'success'
    });
    }   else {
        swal('Para el plan '+ PlanValue + ' no aplica prorrateo.')
        }
}