(function(angular){
  "use strict";

  angular.module("mod.contact",[])
    .controller("ctrl.contact", function(){
      this.contacts = [
        {
          name: "john doe",
          phone: "00 00 00 00 00"
        },
        {
          name: "Sebastien",
          phone: "01 10 00 11 10"
        },
        {
          name: "Jean",
          phone: "99 99 99 99 99"
        }
      ];
    });

})(window.angular);
