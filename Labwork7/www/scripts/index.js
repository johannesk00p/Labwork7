$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
//Adding item in table
function addProduct() {
    var name = $("#txtName").val();
    var quantity = $("#txtQuantity").val();
   
    if (!name) {
        alert("Name is required");
    } else {
        var r = confirm("Name: " + name + "\n" + "Quantity: " + quantity);
        if (r == true) {
            productHandler.addProduct(name, quantity);
            $("#txtName").val("");
            $("#txtQuantity").val("");
        }
    }
}
