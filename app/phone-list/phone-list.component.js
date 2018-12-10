angular.module('phoneList', []).
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function phoneListController(){
            this.phones = [
                {
                  name: 'Nexus S',
                  snippet: 'Fast just got faster with Nexus S.'
                }, {
                  name: 'Motorola XOOM™ with Wi-Fi',
                  snippet: 'The Next, Next Generation tablet.'
                }, {
                  name: 'MOTOROLA XOOM™',
                  snippet: 'The Next, Next Generation tablet.'
                }
              ];
            this.total_phones = function(){
            return this.phones.length;
            }
        }
    });