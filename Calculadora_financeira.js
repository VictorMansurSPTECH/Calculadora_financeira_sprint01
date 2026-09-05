let valor_hora = 0;
let tamanho_estacionamento = 0;
let horario_func = 0;
let horas_ociosas = 0;
let dias_funcionamento = 0;
let desconto_ocioso = 0;
let aumento_uso = 0;

function calcular() {
    valor_hora = Number(ipt_valor_hora.value);
    tamanho_estacionamento = Number(ipt_tamanho_estacionamento.value);
    horario_func = Number(ipt_horarios_funcionamento.value);
    horas_ociosas = Number(ipt_horas_ociosas.value);
    dias_funcionamento = Number(ipt_dias_mes.value);
    desconto_ocioso = Number(ipt_desconto_ocioso.value);
    aumento_uso = Number(ipt_aumento_uso.value);

    if (horas_ociosas > horario_func) {
        exibir.innerHTML = `Horas ociosas não podem ser maiores que o horário de funcionamento.`;
        return;
    }

    let horas_ocupadas_atual = horario_func - horas_ociosas;

  
    let receita_atual = valor_hora * horas_ocupadas_atual * tamanho_estacionamento * dias_funcionamento;


    let preco_desconto = valor_hora * (1 - desconto_ocioso / 100); // -1 serve para ver o que sobra depois de tirar a porcentagem desejada


    let horas_recuperadas = horas_ociosas * (aumento_uso / 100);


    let receita_extra = preco_desconto * horas_recuperadas * tamanho_estacionamento * dias_funcionamento;


    let receita_com_sistema = receita_atual + receita_extra;

    let ganho = receita_com_sistema - receita_atual;

    exibir.innerHTML = `
        Receita atual (preço fixo, ignora ociosidade): R$ ${receita_atual.toFixed(2)}
        <br>
        Receita extra com preço dinâmico nas horas ociosas: R$ ${receita_extra.toFixed(2)}
        <br>
        Receita total estimada com o sistema: R$ ${receita_com_sistema.toFixed(2)}
        <br>
        Ganho mensal estimado: R$ ${ganho.toFixed(2)}
    `;
}