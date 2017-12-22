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

  ngOnInit() {
    this.addRow();
    this.myForm.valueChanges.subscribe(()=>{
      const control = <FormArray>this.myForm.controls['regions'];
      for(var i =0;i<control.length;i++){
        const demographics =<FormGroup> control.at(i);
        this.firmDemographics.forEach(element => {
          if(element!='Totals')
          if(demographics.controls[element].invalid){
            demographics.controls[element].setValue(0)
          }
        });
      }
    })
  }
  

  addRow(){
   
    const control = <FormArray>this.myForm.controls['regions'];


    
    this.items.forEach(element => {
      control.push(this.initItems(element));
    
    });

   
  }

  initItems(name:string): FormGroup{
    // Here, we make the form for each day

    return this.fb.group({
      region:[name],
      'Equity Partners':[0,Validators.required],
      'Non-Equity Partners': [0,Validators.required ],
      'Associates': [0, Validators.required ],
      'Counsel': [0,Validators.required ],
      'Other Lawyers': [0,Validators.required],
    });
  }

  sample(index:number){
    const control = <FormArray>this.myForm.controls['regions'];
    const formb=<FormGroup>control.at(index)
    return (formb.controls['region'].value)
    // console.log(formbuild)
    // return formbuild.control['validate'].value
    //return control[index].controls['validate'].value
  }

  compute(index : number){
    const control = <FormArray>this.myForm.controls['regions'];
    const formb=<FormGroup>control.at(index)
    var value:number=0;
   
      this.firmDemographics.forEach(element => {
        if(element!='Totals'){
          var a =+formb.controls[element].value
       
          value=value + (a)
        }
      });
    return value;
  }

  submit(){
    //console.log(this.myForm.value)
    const control = <FormArray>this.myForm.controls['regions'];
    for(var i =0;i<control.length;i++){
      const demographics =<FormGroup> control.at(i);

      this.firmDemographics.forEach(element => {
        if(element!='Totals')
        console.log(element +' ' +demographics.controls[element].value)
      });
    }
  }

}