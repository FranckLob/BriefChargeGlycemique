import { Component, OnInit } from '@angular/core';
import { AlimentService } from '../aliment.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  alimentList;
  alimentForm;

  constructor(private alimentService: AlimentService,
              private formBuilder: FormBuilder) { 

  this.alimentList=this.alimentService.aliments;
  this.alimentForm=this.formBuilder.group({
    name : '',
    ig : '',
    carbs : ''
  })
}

createAliment(aliment) {
  //on écrit seulement si tous les champs sont correctement renseignés
  if (aliment.name != "" && aliment.ig > 0 && aliment.carbs > 0) {
  this.alimentList.push(aliment);
  }
  else {
    window.alert("Les données saisies sont incomplètes")
  }
}

deleteAliment(alimentId) {
  this.alimentList.splice(alimentId,1);
}

  ngOnInit() {
  }

}
