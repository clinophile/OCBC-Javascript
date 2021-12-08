import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-drivenform',
  templateUrl: './template-drivenform.component.html',
  styleUrls: ['./template-drivenform.component.css']
})
export class TemplateDrivenformComponent {
  tasks: Task[] = []
  categories= ['School', 'Work', 'Hobby'];

  onSubmit(form: NgForm) {
    const {taskName, category} = form.value
    this.tasks = [...this.tasks, new Task(taskName, false, category)]
    form.reset()
  }

}
