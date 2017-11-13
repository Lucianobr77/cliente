// JavaScript Document

function loadMoreSuggestion()
{
	var page = sNavigator.getCurrentPage();		
	if ( page.name=="votacao.html"){		
	    callAjax("Suggestion",params);	             	       
		return;
	}
	
	var options = {
      animation: 'slide',
      onTransitionEnd: function() { 						      	  
      	     'page-suggestion';
	      callAjax("Suggestion",params);	             	       
      } 
    };   
    sNavigator.pushPage("votacao.html", options);		 	
}

function displaySuggestion(data)
{
	var htm='';
	$.each( data, function( key, val ) {        		  
		htm+=tplSugestoes(val.nome_empresa, val.cidade, val.votos, val.date_created );
	});	
	createElement('suggestion-list-scroller',htm);
	initRating();
}

function showSuggestionForm()
{
	if (isLogin()){
	var options = {
      animation: 'none',
      onTransitionEnd: function() { 						      	  
      	  
      	     'page-addsuggestions';
      	  
      	  translatePage();
      	  $(".nome_empresa").attr("placeholder", getTrans('o Nome da Empresa','nome_da_empresa') );
          $(".cidade").attr("placeholder", getTrans('Cidade','cidade') ); 
          $(".telefone").attr("placeholder", getTrans('Telefone','telefone') );     
          $(".contato").attr("placeholder", getTrans('Contato','contato') );     
          translateValidationForm();      
          
          	  
      }                   
    };   
    sNavigator.pushPage("indicacao.html", options);	
	
} else {
		menu.setMainPage('prelogin.html', {closeMenu: true})
	}
	
}

function showSuggestion2Form()
{  
	if (isLogin()){
	var options = {
      animation: 'none',
      onTransitionEnd: function() { 						      	  
      	  
      	     'page-addsuggestions';
      	  
      	  translatePage();
      	  $(".nome_empresa").attr("placeholder", getTrans('o Nome da Empresa','nome_da_empresa') );
          $(".cidade").attr("placeholder", getTrans('Cidade','cidade') ); 
          $(".telefone").attr("placeholder", getTrans('Telefone','telefone') );     
          $(".contato").attr("placeholder", getTrans('Contato','contato') );     
          translateValidationForm();      
          
          	  
      }                   
    }; 
	
    sNavigator.pushPage("suggestion.html", options);
	
	} else {
		menu.setMainPage('prelogin.html', {closeMenu: true})
	}
}


function addSuggestion()
{
	if (isLogin()){
	
	$.validate({ 	
	    form : '#frm-addsuggestion',    
	    borderColorOnError:"#FF0000",
	    onError : function() { 
			return;
		},	    
	    onSuccess : function() {     	      
	      var params = $( "#frm-addsuggestion").serialize();	      
	      params+="&client_token="+ getStorage("client_token");
			
	      callAjax("addSuggestion",params);
			setTimeout('carregarPagina(20)', 800);
			return;
			
	    }  
	});
		
	} else {
		menu.setMainPage('prelogin.html', {closeMenu: true})
	}
	
}

