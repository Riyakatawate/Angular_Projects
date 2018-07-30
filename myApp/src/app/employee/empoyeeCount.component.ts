import { Component , Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector :'employee-count',
    template :`
    <input type="radio" name="options" value="All" [(ngModel)]="selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()" /><span class='radioClass'>All ({{all}})</span>
    <input type="radio" name='options' value='Male' [(ngModel)] = "selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()"/><span class='radioClass'>Male ({{male}})</span>
    <input type="radio" name='options' value='Female' [(ngModel)] ="selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()"/><span class='radioClass'>Female ({{female}})</span>
    `
})

export class employeeCountComponent{

    selectedRadioButtonValue : string = "All";
    
    @Output()
    countRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    
    @Input()
    male : number;

    @Input()
    female: number;

    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}