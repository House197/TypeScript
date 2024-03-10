"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let powerScale;
    (function (powerScale) {
        powerScale[powerScale["weak"] = 0] = "weak";
        powerScale[powerScale["normal"] = 1] = "normal";
        powerScale[powerScale["strong"] = 5] = "strong";
        powerScale[powerScale["strongest"] = 100] = "strongest";
    })(powerScale || (powerScale = {}));
    const fuerzaFlash = powerScale.strong;
    const fuerzaSuperman = powerScale.strongest;
    const fuerzaBatman = powerScale.normal;
    const fuerzaAcuaman = powerScale.weak;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
