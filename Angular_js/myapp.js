var app=angular.module("mymodule",[]);
app.controller("myctrl",function($scope){
var products=[{'pname':'powder','pcatagry':'cosmatics','pbrand':'ponds','pprise':'100','pdescripation':'facepoder'},
{'pname':'powder','pcatagry':'cosmatics','pbrand':'ponds','pprise':'100','pdescripation':'facepoder'},
{'pname':'powder','pcatagry':'cosmatics','pbrand':'ponds','pprise':'100','pdescripation':'facepoder'},
{'pname':'powder','pcatagry':'cosmatics','pbrand':'ponds','pprise':'100','pdescripation':'facepoder'},
{'pname':'powder','pcatagry':'cosmatics','pbrand':'ponds','pprise':'100','pdescripation':'facepoder'},
];
$scope.myproducts.myproduct;
$scope.saveproduct=function(){
  var newproduct=[];
  newproduct.pname=$scope.proname;
  newproduct.pcategry=$scope.procategry;
  newproduct.pbrand=$scope.probrand;
  newproduct.pdecraption=$scope.prodecraption;
  newproduct.pprise=$scope.proprise;
  }
  $scope.delateproduct=function(index}{
  
  $scope.myproducts.splice(index,1);
  }
});