import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Food[], desiredCompleteness, word1, word2, word3, word4) {
    console.log(word1);
    console.log(word2);
    console.log(word3);
    console.log(word4);

    var output: Food[] = [];
    if(desiredCompleteness === "callories") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
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
