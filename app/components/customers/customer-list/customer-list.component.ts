import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CustomersComponent } from "../customers.component";

@Component({
    selector: 'customer-list',
    templateUrl: 'app/components/customers/customer-list/customer-list.component.html',
    styleUrls: ['app/components/customers/customer-list/customer-list.component.css']
})

export class CustomerListComponent {
    @Input() customers: any;
    @Input() model: any;

    @Output() onDelete: EventEmitter<number>;

    order: boolean = false;

    constructor() {
        this.onDelete = new EventEmitter<number>();
    }

    editShow(customer: any) {
        for (let i in this.model) {
            this.model[i] = customer[i];
        }
        CustomersComponent.BASICMODAL.modal('show');
    }

    sort() {
        this.order = !this.order;
        this.customers.sort((a: any, b: any) => {
            return this.order ? ((a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0) : ((a.label < b.label) ? 1 : (a.label > b.label) ? -1 : 0);
        });
    }

    getSortClass() {
        return this.order ? 'glyphicon glyphicon-chevron-up pull-right' : 'glyphicon glyphicon-chevron-down pull-right';
    }

    deleteShow(id: number) {
       this.onDelete.emit(id);
        CustomersComponent.DELETEMODAL.modal('show');
    }
}