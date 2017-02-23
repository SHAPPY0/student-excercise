 app.controller('createCtrl', function($scope,$http,$routeParams){
  $scope.btnTxt="Add";
  $scope.create=function(){  
    $http.post('/api/student/create', $scope.add).success(function(res){
         $scope.add=""; 
     refreshlist();
     $scope.msg=true;
     $scope.alert="Student Successfully Added"
    })
  };

  /*=========get student list==========*/
  function refreshlist(){ 
  $http.get('/api/student/all').success(function(res){
    $scope.slist=res;
  }) 
  }refreshlist();


  /*====get individual studnet=========*/
  $scope.editbtn=function(id){
    $scope.btnTxt="Update";
    $scope.editform=true; 
  $http.get('/api/student/'+id).success(function(res){
    $scope.edit=res; 
  });
  }

  /*======update address=========*/
  $scope.updateadd=function(id){
    $http.put('/api/student/add/address/'+id,  $scope.edit).success(function(res){ 
      refreshlist();
      $scope.edit="";
      $scope.msg=true;
     $scope.alert="Address Updated Successfully "
    })
  }
 })