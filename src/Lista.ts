import { Tarefa } from "./tarefa"

export class Lista {
    private _lista: Tarefa[] = []

    addTarefa(...t:Tarefa[]) {
        this._lista.push(...t);
        return t;
    }

    //splice tira o pedaço da posicao

    removeTarefa(t:Tarefa) {
        let pos:number = this._lista.indexOf(t);
        if (pos > -1){
            this._lista.splice(pos, 1);
        }
    }
}