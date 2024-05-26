AOS.init();

const dataAniversario = new Date("Jan 31, 2025 10:00:00");
const timeStampAniversario = dataAniversario.getTime();     // Essa função pega o valor em "Ms" referente à data definida em "dataAaniversário"
                                                            // Dizemos então que esse valor é o "timeStamp" de tal instante, sendo que
                                                            // O "instante zero" seria o dia 01/01/1970 às 00:00 em UTC ou
                                                            // "Universal Time Coordinated" / "Tempo Universal Cordenado"

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const timeStampRestante = timeStampAniversario - timeStampAgora;

    const diasEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;
    const segundosEmMs = 1000;

    const diasRestantes = Math.floor(timeStampRestante / diasEmMs);
    const horasRestantes = Math.floor((timeStampRestante % diasEmMs) / horasEmMs);      // O operador "%" é um operador de divisão, mas trará
    const minutosRestantes = Math.floor((timeStampRestante % horasEmMs) / minutosEmMs);     // para mim, como resultado, o "resto" da divisão
    const segundosRestantes = Math.floor((timeStampRestante % minutosEmMs) / segundosEmMs); // que pode ser caracterizado, nesse caso, pelo
                                                                                            // tempo corrido de um dia não completo (em "Ms")

    document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`

    if (timeStampRestante < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Data expirada.';
    }
}, 1000);