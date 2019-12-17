'use strict';

class Task {
   constructor(task) {
      this.task =[];
   }
   addTask(newTask){
      this.task.push(newTask);
   }
   getTasks(){
      return this.task;
   }
   delete(id){
      this.task = this.task.filter(newTask => newTask.id !== id);
   }
   doneTask(id){
      this.task.find(task => task.id === id).doneTask = true;
   }
}

//Initialize HTML components
class ChangeDom {
   initialise(){
      const form = document.createElement('form');
      const input = document.createElement('input')
      const ul = document.createElement('ul')
      input.id = "TaskInputId";
      form.id="TaskFormId";
      form.appendChild(input);
      return {
         form, ul
      }
   }
   showTask(task){
      const li = document.createElement('li');
      li.innerText = task.name;
      return li;
   }
}