app.controller('MainController', ['$scope', function (){
  $scope.apps = [
    {
      icon: 'https://elgatoescaldadolibros.files.wordpress.com/2012/07/momo-tapa.jpg',
      title: 'Momo',
      developer: 'MOVE, Inc.',
      price: 0.99
    },
    {
      icon: 'https://losojosdehipatia.com.es/wp-content/uploads/El-Principito1.jpg',
      title: 'El principito',
      developer: 'Chico Dusty',
      price: 2.99
    },
    {
      icon: 'https://lh6.googleusercontent.com/_wV2euar7NzE/TXuN7-Jf51I/AAAAAAAAEJ0/W_Zgks9SbE4/s800/portadalibro10.jpg',
      title: 'Moral Relativism',
      developer: 'Steven Lukes',
      price: 1.99
    },
    {
      icon: 'https://images-na.ssl-images-amazon.com/images/I/81i5oH9kYjL.jpg',
      title: 'La Montaña de Libros',
      developer: 'Rocio Bonilla',
      price: 1.99
    }
  ]
}]);
