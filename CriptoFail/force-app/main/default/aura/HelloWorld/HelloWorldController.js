({
    handleClick : function (component, event, helper) {
        var num1 = component.get("v.nome");         
        
        alert(num1);

        component.set("v.nome", "novo valor mano")
    }
    ,


    handleChange : function (component, event, helper) {
        console.log(event.getParam("checked"));   // JSON.stringify(event) pega um objeto populado e trnasofrma em uma string
    }





    
});

/**
 * 
 * Progress Bar
({
    onRender: function (cmp) {
        var interval = setInterval($A.getCallback(function () {
            var progress = cmp.get('v.progress');
            cmp.set('v.progress', progress === 100 ? clearInterval(interval) : progress + 10);
        }), 200);
    }
})


 */