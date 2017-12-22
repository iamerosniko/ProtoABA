import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-aba-sample',
  templateUrl: './aba-sample.component.html',
  styleUrls: ['./aba-sample.component.css']
})
export class AbaSampleComponent implements OnInit {


  firmDemographics:string[]=['Equity Partners','Non-Equity Partners','Associates','Counsel','Other Lawyers','Totals']
  items:string[]=['American Indian/Alaska Native','African American','Asian','Hispanic/Latino','Multiracial','White','Women']
  myForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      regions: this.fb.array([])
    })
  }




    this.tableFormGroup=this.fb.group({
      regions :[ this.fb.array([
        
      ]),Validators.required]
    });



    this.addRegions();
  }

  addRegions(){
    const control = <FormArray>this.tableFormGroup.controls['regions'];
    console.log(control)
    this.items.forEach(element => {
      control.push(this.fb.group({
        'name' : [null, Validators.required],
        'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        'validate' : element
      }))
    })

    // this.regionArray=this.regionArray.concat(this.fb.group({
    //   'name' : [null, Validators.required],
    //   'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    //   'validate' : element
    // }));
  }


  sample(index:number){
    const control = <FormArray>this.tableFormGroup.controls['regions'];
    const formb=<FormGroup>control.at(index)
    return (formb.controls['validate'].value)
    // console.log(formbuild)
    // return formbuild.control['validate'].value
    //return control[index].controls['validate'].value
  }
}