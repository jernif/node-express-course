const  express  =  require ( 'express' ) ; 
const  app  =  express ( ) ;

const  mockUserData = [ 
	{ nom : 'Mark' } , 
	{ nom : 'Jill' } 
]

app . get ( '/ users/:id' , function ( req , res ) { 
    console.log(req. params. id)
	res . json ( { 
		success : true , 
		message : 'a réussi à obtenir des utilisateurs. Nice!' , 
		users : req. params. id
	} ) 
} )

app . listen ( 8000 , function ( ) { console . log ( 'serveur écoute' ) } )