export class Todo {
  constructor(description, tags) {
    this.description = description;
    this.done = false;
    // this.getTags = getTags();
    this.tags = tags;
  }

  // getTags(){
  //     return this.parse(tags);
  // }


//
// parse(csString) {
//     parse(csString, ',', true);
// }
//
// parse(csString, delimiter, doTrim) {
//     csEls = csstring.split(delimiter);
//     csEls.forEach(function (value) {
//         if (doTrim) {
//             value = value.trim();
//         }
//         console.log(value + '**');
//     });
// }

}
