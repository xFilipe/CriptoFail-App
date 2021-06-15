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

    ,

    handleOrder : function (component, event, helper) {
        var action = component.get("c.getPrice");
        action.setParamns({
            "currencyPair"  : "UTCUSDT"
        });


        // See better
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state == "SUCCESS"){
                console.log(response.getReturnVale());
            }            else{
                console.log("Erro}: " + JSON.stringify(response.getError()));
            }


        })



        $A.enqueueAction(action);
        
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