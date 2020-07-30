
function probarValidarPreguntaFamiliar(){

    console.assert(
        validarCantidadIntegrantes(4.5) === 'el campo cantidad solo acepta numeros enteros, no decimales',
        'Validar cantidad integrantes no validó que la cantidad no sea vacío',
    );

    




}

probarValidarPreguntaFamiliar();