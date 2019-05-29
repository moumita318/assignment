
$(document).ready(function(){


$(".btn").click(function(){
	$(".name").toggle();
})

  $("#filldetails").click(function(){
            $(".btnn").toggle();
            var number = document.getElementById("member").value;
            if(number<6){
            var container = document.getElementById("container");
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for ( var i=0;i<number;i++){
                container.appendChild(document.createTextNode("ROBOT DETAILS " + (i+1)));
                var input = document.createElement("input");
                input.type = "text";
                input.placeholder="ID"
                input.autocomplete="on"
                input.minlength="1"
                input.maxlength="10"
                container.appendChild(input);
                var input1 = document.createElement('input'); 
                input1.type = "text"; 
                input1.placeholder="NickName"
                var input2 = document.createElement('input'); 
                input2.type = "text";
                input2.placeholder="IP" 
//...    
                container.appendChild(input); 
                
                container.appendChild(input1);
                container.appendChild(input2);


               
                
                container.appendChild(document.createElement("br"));
               
              }
            }
            $(".btnn").click(function(){
            	$(".box").hide();
            })


        });
           
        

});