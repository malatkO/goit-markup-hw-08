( ( )  =>  {
    const  mobileMenu  =  документ . querySelector ( '.js-меню-контейнер' ) ;
    const  openMenuBtn  =  документ . querySelector ( '.js-open-menu' ) ;
    const  closeMenuBtn  =  документ . querySelector ( '.js-close-menu' ) ;
  
    const  toggleMenu  =  ( )  =>  {
      const  isMenuOpen  =
        openMenuBtn . getAttribute ( 'aria- extended ' )  ===  'true'  ||  ложь ;
      openMenuBtn . SetAttribute ( 'ария вспененные' ,  ! isMenuOpen ) ;
      mobileMenu . classList . переключить ( 'открыто' ) ;
  
      const  scrollLockMethod  =  ! isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll' ;
      bodyScrollLock [ scrollLockMethod ] ( документ . тело ) ;
    } ;
  
    openMenuBtn . addEventListener ( «щелчок» ,  toggleMenu ) ;
    closeMenuBtn . addEventListener ( «щелчок» ,  toggleMenu ) ;
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    окно . matchMedia ( '(минимальная ширина: 768 пикселей)' ) . addEventListener ( 'изменить' ,  e  =>  {
      если  ( ! e . соответствует )  return ;
      mobileMenu . classList . удалить ( 'открыто' ) ;
      openMenuBtn . setAttribute ( 'расширенная ария' ,  ложь ) ;
      bodyScrollLock . enableBodyScroll ( документ . тело ) ;
    } ) ;
  } ) ( ) ;