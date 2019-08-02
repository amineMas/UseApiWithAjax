




$('#search').click(function(){
   var name = ($('#name').val())
    console.log('https://swapi.co/api/people/?search='+name)

   $.ajax('https://swapi.co/api/people/?search='+name ,
   {    
       timeout: 8000,
       dataType: 'json',
       type: 'GET',
       success : function(data){
           //console.log(data.results)
           var infos = data.results[0]
           $('#result').html(infos.name)
           
       },
       error : function (errorMessage) { // error callback 
        alert(('Error: ' + errorMessage));
    }
   }

   );


   /*
   console.log('https://swapi.co/api/people/?search='+name);

   $.ajax({
    url : 'https://swapi.co/api/people/?search='+name,
    dataType: 'json',
    Type: 'GET',
    success: function(data){
        console.log(data.results[0])
        var people = data.results[0]
        $('#result').html(people.name);
    }

   });

*/

   
});

