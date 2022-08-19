var y = Math.floor(Math.random() * 100 + 1);
      
      var guess = 1;
           
      document.getElementById("submitguess").onclick = function(){
          
      var x = document.getElementById("guessField").value;
        
         if(x == y && guess == 1)
         {    
             alert("Sobresaliente, adivinaste el número en " + guess + " intentos. ");
         }
         if(x == y && guess < 4)
         {    
             alert("Notable, adivinaste el número en " + guess + " intentos. ");
         }
         if(x == y && guess < 11)
         {    
             alert("Muy bien, adivinaste el número en " + guess + " intentos. ");
         }
         if(x == y && guess < 25)
         {    
             alert("Regular, adivinaste el número en " + guess + " intentos. ");
         }
         if(x == y && guess > 25)
         {    
             alert("Pésimo, adivinaste el número en " + guess + " intentos. ");
         }
         if(x > y) 
         {    
             guess++;
             alert("Ups. Prueba con un número más pequeño!");
         }
         else
         {
             guess++;
             alert("Ups. Prueba con un número más grande!")
         }
      }