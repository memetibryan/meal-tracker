import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Food[], desiredCompleteness, name, description, callories) {
    console.log(name);
    console.log(description);
    console.log(callories);

  var output: Food[] = [];
    if(desiredCompleteness === "callories") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "types") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
