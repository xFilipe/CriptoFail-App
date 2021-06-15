public  class BinanceAPI {

    // with sharing - Usando as configurações  de compartilhamenti /  without sharing - sem usar as configurçações de compartilhamento  
    
    @AuraEnabled
    public static string getPrice(String mercadoId){
  

        Marcado__c mercado = [SELECT Id, MoedaPrimaria__c, MoedaSecundaria__c 
                                FROM Marcado__c
                                WHERE Id = :mercadoId];


        String pair = marcado.MoedaPrimaria__c + marcado.MoedaSecundaria__c;
        
        pair = pair.replace('USD', 'USDT');
        

        return pair;
      
    }
 

    }
