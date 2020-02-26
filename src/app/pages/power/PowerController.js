app.controller('PowerController', function ($scope, ComputerService, $location) {   
   
    $scope.computerStatusOne = function(){  
        var valuePowerButton = ComputerService.getComputerStatus()
        var valueShowInfo = ComputerService.getShowInfo()
        var elementos = document.getElementById("button_settings")      
        elementos.disabled = false 

        if (valuePowerButton) {         
            ComputerService.toogleComputer()
        } else if (valuePowerButton === false && valueShowInfo === false) {
            ComputerService.toogleComputer() 
            $location.path('/settings')            
            ComputerService.toogleShowInfo()                       
        } else{
            $location.path('/settings')
            ComputerService.toogleSettings()
        } 
    },
    $scope.goSettings = function () {
        var valuePowerButton = ComputerService.getComputerStatus()
        if (valuePowerButton === false) {
            $location.path('/settings')
            ComputerService.toogleSettings()
            ComputerService.toogleShowInfo()
        }                            
    }
});
