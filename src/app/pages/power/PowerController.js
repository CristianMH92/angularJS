app.controller('PowerController', function ($scope, ComputerService, $location) {            
    $scope.computerStatusOne = function(){
        var valuePowerButton = ComputerService.getComputerStatus()
        var elementos = document.getElementById("button_settings")
        elementos.disabled = false                
        if (valuePowerButton) {
            ComputerService.toogleComputer()
        } else {
            ComputerService.toogleComputer()
            $location.path('/settings')
        }        
    },
    $scope.goSettings = function () {
        $location.path('/settings')
    }
});
