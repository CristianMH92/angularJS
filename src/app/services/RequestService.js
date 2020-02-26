app.factory('RequestService',['$http', function ($http){
    return [
    $http.get('https://swapi.co/api/starships/')
    .success(function(data){
        return data
    })
    .error(function(err){
        return err
    }),
    $http.get('https://swapi.co/api/vehicles/')
    .success(function(data){
        return data
    })
    .error(function(err){
        return err
    }),
    $http.get('https://swapi.co/api/species/')
    .success(function(data){
        return data
    })
    .error(function(err){
        return err
    }),
    $http.get('https://swapi.co/api/planets/')
    .success(function(data){
        return data
    })
    .error(function(err){
        return err
    })
    ]
}])