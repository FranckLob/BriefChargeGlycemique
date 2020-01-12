import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';  
import { AlimentService } from '../aliment.service';
import { PortionService } from '../portion.service';
import { ChargeService } from '../charge.service';

@Component({
  selector: 'app-aliment-calculator',
  templateUrl: './aliment-calculator.component.html',
  styleUrls: ['./aliment-calculator.component.css']
})
export class AlimentCalculatorComponent implements OnInit {
alimentList;
portionList;
portionForm;
charge;

  constructor(
    private alimentService: AlimentService,
    private portionService: PortionService,
    private chargeService: ChargeService,
    private formBuilder: FormBuilder) {
    this.alimentList=this.alimentService.aliments;
    this.portionList=this.portionService.portions;
    this.charge=this.chargeService.charge;
    this.portionForm=this.formBuilder.group({
      alimentName : '',
      weight : ''
    })
  }
  
  createPortion(portion){
    //on écrit seulement si tous les champs sont correctement renseignés
    if (portion.alimentName.name != null && portion.weight >0) {
    this.portionList.push(portion);
    this.charge=this.charge+(portion.alimentName.ig * portion.weight / 100);
    document.getElementById("charge").innerHTML=this.charge.toFixed(2);
    }
    else {
      window.alert("Les données saisies sont incomplètes")
    }
  }

  deletePortion(portion,portionId) {
    this.portionList.splice(portionId,1);
    this.charge=this.charge-(portion.alimentName.ig * portion.weight / 100);
    document.getElementById("charge").innerHTML=this.charge.toFixed(2);
  }

  ngOnInit() {
  }

}