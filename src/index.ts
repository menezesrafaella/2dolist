import "./style.css";
import "material-icons/iconfont/material-icons.css";

import { Tarefa } from "./tarefa";
import { Prioridade } from "./Prioridade"
import { Lista } from "./Lista"


let t1 = new Tarefa("escovar os dentes", Prioridade.alta )
let t2 = new Tarefa("Lavar o cabelo", Prioridade.baixa )
let t3 = new Tarefa("Fazer a janta", Prioridade.alta )

let lista = new Lista()


// lista.addTarefa(t1,t2,t3);
// lista.removeTarefa(t1);


const form: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
const input: HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");

form.addEventListener(
    'submit', (evt) => {
        evt.preventDefault();
        let t = new Tarefa(input.value, Prioridade.baixa)
        lista.addTarefa(t);
        console.log(lista);
}
)