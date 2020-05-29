var app=angular.module("Customer",[]);
app.controller("myctrl",function($scope){
	var customers=[{'cname':'priyanka jha','cemail':'priyanka@gmail.com','cmobile':'8456944350','ccity':'Bangalore'},
	{'cname':'Nirmal','cemail':'nirmal.rout@gmail.com','cmobile':'8956525252','ccity':'Bangalore'},
	{'cname':'niku','cemail':'niku.333@gmail.com','cmobile':'9556262656','ccity':'Baleswar'},
	{'cname':'piku','cemail':'piku.ss@gmail.com','cmobile':'9986585252','ccity':'Delhi'}];
	
		$scope.mycustomer=customers;
		
		$scope.savecustomer=function(){
		var newcustomer=[];
		newcustomer.cname=$scope.cusname;
		newcustomer.cemail=$scope.cusemail;
		newcustomer.cmobile=$scope.cusmobile;
		newcustomer.ccity=$scope.cuscity;
		
		
		$scope.mycustomer.push(newcustomer);
	}
	$scope.deletecustomer=function(index){
		$scope.mycustomer.splice(index,1)
	}
	
});