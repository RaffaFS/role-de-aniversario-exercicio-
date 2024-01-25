AOS.init();

const dataAniversario = new Date("Jan 31, 2025 10:00:00");
const timeStampAniversario = dataAniversario.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const timeStampRestante = timeStampAniversario - timeStampAgora;

    const diasEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;
    const segundosEmMs = 1000;

    const diasRestantes = Math.floor(timeStampRestante / diasEmMs);
    const horasRestantes = Math.floor((timeStampRestante % diasEmMs) / horasEmMs);
    const minutosRestantes = Math.floor((timeStampRestante % horasEmMs) / minutosEmMs);
    const segundosRestantes = Math.floor((timeStampRestante % minutosEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`

    if (timeStampRestante < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Data expirada.';
    }
}, 1000)