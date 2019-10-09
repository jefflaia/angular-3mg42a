import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CourseService } from '../course.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  courseForm: FormGroup;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.initForm();
    
    this.courseService.course$.subscribe(x=> {
      this.courseForm.patchValue(x);
    });

    this.courseForm.valueChanges.subscribe(val => console.log(val) );
    this.courseService.getOne();
  }

  onSubmit() {
		// Since we have  access to the FormGroup instance we can directly output the same
		console.log(this.courseForm);    
	}

	private initForm() {
		this.courseForm = new FormGroup({
		  'courseName': new FormControl(null, Validators.required),
		  'courseDesc': new FormControl(null, [Validators.required, Validators.minLength(100)]),
		  'courseAmount': new FormControl(null)
		});
	}
}