export interface Gif {
  id : string ;
  titulo : string ;
  url : string ;
  ancho : number ;
  altura : number ;
}

export  const  mockGifs : Gif [ ]  =  [
  {
    id : '1' ,
    titulo : "Pastel de Superman" ,
    url : 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVxbHY0dncxMHJlZXRvOTY3MXl5cHp0dWs4aG5iY3d0ZWhlcDM5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0GtVKtagi2GvWuY3vm/giphy.gif' ,
    ancho : 300 ,
    altura : 300 ,
  } ,
  {
    id : '2' ,
    titulo : 'Gato gracioso' ,
    url : 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif' ,
    ancho : 400 ,
    altura : 250 ,
  } ,
  {
    id : '3' ,
    titulo : '¡Feliz cumpleaños! ',
    url : 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG40N2cyZm1iZGM2aWlhbHF1bnZmdzkxZ29idTY3ZzZkbnowNDg4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xatKdEypHxBjzabUPV/giphy.gif' ,
    ancho : 280 ,
    altura : 350 ,
  } ,
  {
    id : '4' ,
    titulo : 'Pulgares arriba' ,
    url : 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif' ,
    ancho : 300 ,
    altura : 200 ,
  } ,
  {
    id : '5' ,
    titulo : 'Elmo es el mejor' ,
    url : 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5zMmVsNDFzam56bmR6azl0bmFvbHQxdDczeDNzZTdxczhtejNrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif' ,
    ancho : 300 ,
    altura : 400 ,
  } ,
  {
    id : '6' ,
    titulo : 'Messi es el mejor' ,
    url : 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThyZXBwbHFtdHNpYnh4ZnN0aGswcWJydXNwdnpjaXV0eXNlYXp1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8BSJinJ8of9L0unCqW/giphy.gif' ,
    ancho : 350 ,
    altura : 280 ,
  } ,
] ;