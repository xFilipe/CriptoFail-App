
({
    handleClick : function (component, event, helper) {
        var num1 = component.get("v.nome");         
        
        alert(num1);

        component.set("v.nome", "novo valor mano")

    }
});