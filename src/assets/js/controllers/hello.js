(function(angular){
  "use strict";

  angular.module("mod.hello",[])
    .controller("ctrl.hello", function(){
      this.afficheLong = function(string) {
        if (typeof  string !== "undefined") {
            return string.length;
        }
        return 0;
      };

      this.afficheRevers = function(string) {
        if (typeof  string !== "undefined") {
            return string.split("").reverse().join("");
        }
        return "";
      };

      this.afficheTable = function(string) {
        if (typeof  string !== "undefined") {
            return string.split("");
        }
        return "";
      };


    });

})(window.angular);
