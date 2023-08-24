import { IWaveData } from "../contracts/interfaces";

class WaveBreakCalculation {

    public calculateWaveBreak(wavesData: IWaveData[], profileData: any) { //profileData será um array de arrays com os dados dos perfis
        //AQUI IRÁ CRIAR DIFERENTES THREADS PARA O CÁLCULO, VAI SER COMO UMA FILA
        //IRÁ PEGAR OS 5 PRIMEIROS PERFIS POR EXEMPLO E CALCULAR E POR ASSIM VAI, QUANDO UM LOTE SE ENCERRAR IRÁ INICIAR OUTRO, TODOS EM DIFERENTES THREADS
        //VAI CALCULAR O PONTO DE QUEBRA COM BASE NA PROFUNDIDADE DO PERFIL
        //VAI CHAMAR O MÉTODO QUE CRIA A FIGURA E SALVA NUMA PASTA
    }
}

export default new WaveBreakCalculation();