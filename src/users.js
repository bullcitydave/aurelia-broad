import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'My Github Repos';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('users/bullcitydave/repos?f33b4754f424b266f74ae2c7d9d820e97a179ca9')
      .then(response => response.json())
      .then(users => this.users = users);
  }

//   var login = 'bullcitydave';
//   var token = 'f33b4754f424b266f74ae2c7d9d820e97a179ca9';
//
// // Get github API URLs
// var repoURL = 'https://api.github.com/users/' + login + '/repos?' + token;
// var userURL = 'https://api.github.com/users/' + login + '?' + token;
// var eventURL = 'https://api.github.com/users/' + login + '/events?' + token;
// var starredURL = 'https://api.github.com/users/' + login + '/starred?' + token;
//
// $.getJSON(userURL).done(function(userData){
//     var userView = $('.user-template').html();
//     userData.starredCount = _.size($.getJSON(starredURL));
//     $('#user-info').append(_.template(userView,userData));
// });

// WHY IS responseJSON not accessible here?
// var j =   $.getJSON(userURL).done(function(userData){
//     return userData.responseJSON;
// });


// $.getJSON(repoURL).done(function(repoData){
//     var repoView = $('.repo-template').html();
//     for (var i = 0; i < (_.size(repoData)) && i < 5 ; i++) {
//         $('#popular-repos').append(_.template(repoView,repoData[i]));
//     }
// });
}
