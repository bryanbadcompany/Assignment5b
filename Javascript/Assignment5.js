function SectionSelect()
{
    if (document.getElementById("menu").value == "Display Customer List Section")
    {
        document.getElementById("section1").style.visibility = "visible";
    }
    if (document.getElementById("menu").value == "Display Order History Input")
    {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    if (document.getElementById("menu").value == "Display Order Details Input")
    {
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
}


//This handles the onchange event for the menu










//Gathers the full customer list
function getAllCustomers()
{
    
   
    
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    table = document.getElementById("customerResult")
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateCustomerOutput(output);
        }
    }
    objRequest.open("GET", url, true);
    objRequest.send();
    
}
//Generate Table For Customer List
function GenerateCustomerOutput(result)
{
    
    var count = 0;
    
     
    for(count = 0; count < result.GetAllCustomersResult.length; count++)
    {
        
        var row = table.insertRow(count);
        
        var cell_name = row.insertCell(0);
        var cell_id = row.insertCell(1);
        var cell_city = row.insertCell(2);
        
        cell_name.innerHTML = result.GetAllCustomersResult[count].CompanyName;
        cell_id.innerHTML = result.GetAllCustomersResult[count].CustomerID;
        cell_city.innerHTML = result.GetAllCustomersResult[count].City;
        
    }
    
    var header = table.createTHead();
     var header_row = header.insertRow(0);
     var header_cell_name = header_row.insertCell(0);
     var header_cell_id = header_row.insertCell(1);
     var header_cell_city = header_row.insertCell(2);
     
     
     header_cell_name.innerHTML = "Customer Name";
     header_cell_id.innerHTML = "Customer ID";
     header_cell_city.innerHTML = "Customer City";
     
}













//Order History
function getCustomerOrderHistory()
{
    
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    
    url+= document.getElementById("customerIDOH").value;
    
    table = document.getElementById("orderHistoryTable");
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOrderHistory(output);
        }
        
    }
    objRequest.open("GET", url, true);
    objRequest.send();
    
}


function GenerateOrderHistory(result)
{
    var count = 0
    
    for(count = 0; count< result.length; count++)
    {
        var row = table.insertRow(count);
        var cell_name = row.insertCell(0);
        var cell_quantity = row.insertCell(1);
        
        cell_name.innerHTML = result[count].ProductName;
        cell_quantity.innerHTML = result[count].Total;
    }
    
    
     var header = table.createTHead();
     var header_row = header.insertRow(0);
     var header_cell_name = header_row.insertCell(0);
     var header_cell_quantity = header_row.insertCell(1);
     
     
     
     header_cell_name.innerHTML = "Product";
     header_cell_quantity.innerHTML = "Quantity";
     
}
















function getOrdersForCustomer()
{
    
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    
    url += document.getElementById("customerOrderID").value;
    
    table = document.getElementById("orderlisttable");
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOrderList(output);
        }
    }
    objRequest.open("GET", url, true);
    objRequest.send();
}

function GenerateOrderList(result)
{
    var count = 0;
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {
        var row = table.insertRow(count);
        var order_date = row.insertCell(0);
        var order_id = row.insertCell(1);
        var order_address = row.insertCell(2);
        var order_city = row.insertCell(3);
        var order_name = row.insertCell(4);
        var order_postal_code = row.insertCell(5);
        var shipped_date = row.insertCell(6);
        
        order_date.innerHTML = result.GetOrdersForCustomerResult[count].OrderDate;
        order_id.innerHTML = result.GetOrdersForCustomerResult[count].OrderID;
        order_address.innerHTML = result.GetOrdersForCustomerResult[count].ShipAddress;
        order_city.innerHTML = result.GetOrdersForCustomerResult[count].ShipCity;
        order_name.innerHTML = result.GetOrdersForCustomerResult[count].ShipName;
        order_postal_code.innerHTML = result.GetOrdersForCustomerResult[count].ShipPostcode;
        shipped_date.innerHTML = result.GetOrdersForCustomerResult[count].ShippedDate;
        
    }
    
    var header = table.createTHead();
    var header_row = header.insertRow();
    var header_order_date_cell = header_row.insertCell(0);
    var header_order_ID_cell = header_row.insertCell(1);
    var header_order_address_cell = header_row.insertCell(2);
    var header_order_city_cell = header_row.insertCell(3);
    var header_order_name_cell = header_row.insertCell(4);
    var header_order_postal_code_cell = header_row.insertCell(5);
    var header_shipped_date_cell = header_row.insertCell(6);
    
    header_order_date_cell.innerHTML = "Order Date";
    header_order_ID_cell.innerHTML = "Order ID";
    header_order_address_cell.innerHTML = "Order Address";
    header_order_city_cell.innerHTML = "City";
    header_order_name_cell.innerHTML = "Name of Order";
    header_order_postal_code_cell.innerHTML = "Postal Code";
    header_shipped_date_cell.innerHTML = "Shipped Date";
}








