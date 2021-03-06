import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { ContatoService } from "./contato.service";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id:number = +params['id'];

            if(id) {

                this.isNew = false;

                this.contatoService.find(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        });
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    onSubmit(): void {

        let promise;
        
        if(this.isNew) {
            console.log("Cadastrar Novo contato");
            promise = this.contatoService.create(this.contato);
        } else {
            console.log("Atualizar Contato");
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.goBack());

    }

    goBack(): void {
        this.location.back();
    }

}