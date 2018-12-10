angular.module('phoneList', []).
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http',
            function phoneListController($http){
                var self = this
                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                });

                self.total_phones = function(){
                    return self.phones.length;
                };
                self.orderProp = 'age';
            }
        ]
    });