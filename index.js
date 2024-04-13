// Write your solution in this file!
var customerName='bob'
function upperCaseCustomerName(){
    if(typeof customerName!=='undefined'){
        customerName=customerName.toUpperCase();
    } else{
        console.log('customerName is not defined globally');
            
    }
}
function setBestCustomer(){
    bestCustomer='not bob'
}
function overwriteBestCustomer(){
bestCustomer='maybe bob';

}



const leastFavoriteCustomer='John';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='Alice';
}
