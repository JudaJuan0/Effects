/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1928, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_1}", "mouseover", function(sym, e) {
         sym.getSymbol("cua_1").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_1}", "mouseout", function(sym, e) {
         sym.getSymbol("cua_1").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_2}", "mouseout", function(sym, e) {
         sym.getSymbol("cua_2").playReverse();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_2}", "mouseover", function(sym, e) {
         sym.getSymbol("cua_2").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_3}", "mouseover", function(sym, e) {
         sym.getSymbol("cua_3").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_3}", "mouseout", function(sym, e) {
         sym.getSymbol("cua_3").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_4}", "mouseout", function(sym, e) {
         sym.getSymbol("cua_4").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_4}", "mouseover", function(sym, e) {
         sym.getSymbol("cua_4").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_1}", "click", function(sym, e) {
         sym.$("mal_1").show();
         sym.getSymbol("mal_1").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_2}", "click", function(sym, e) {
         sym.$("mal_1").show();
         sym.getSymbol("mal_1").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_3}", "click", function(sym, e) {
         sym.$("bien_1").show();
         sym.getSymbol("bien_1").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${option_4}", "click", function(sym, e) {
         sym.$("mal_1").show();
         sym.getSymbol("mal_1").play();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${img4}", "click", function(sym, e) {
         parent.window.close();
         window.close();
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cua_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cua_1");
   //Edge symbol end:'cua_1'

   //=========================================================
   
   //Edge symbol: 'cua_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cua_2");
   //Edge symbol end:'cua_2'

   //=========================================================
   
   //Edge symbol: 'cua_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cua_3");
   //Edge symbol end:'cua_3'

   //=========================================================
   
   //Edge symbol: 'cua_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cua_4");
   //Edge symbol end:'cua_4'

   //=========================================================
   
   //Edge symbol: 'bien_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         sym.$("bien_1").hide();
         sym.getComposition().getStage("pr_2").play("pr_2");

      });
      //Edge binding end

   })("bien_1");
   //Edge symbol end:'bien_1'

   //=========================================================
   
   //Edge symbol: 'mal_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         sym.$("mal_1").hide();
         sym.getComposition().getStage("pr_1").stop("pr_1");

      });
      //Edge binding end

   })("mal_1");
   //Edge symbol end:'mal_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "test1mod1");