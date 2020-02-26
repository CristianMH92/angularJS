app.factory('ComputerService', function(){
    return {
        computerStatus: false,
        toogleComputer: function () {
            this.computerStatus = !this.computerStatus            
        },
        getComputerStatus: function () {
            return this.computerStatus
        }
    }
});