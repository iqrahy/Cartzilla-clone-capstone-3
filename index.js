// for other menu

const homeMenu = document.getElementById('homeMenu');
const homeItemList = document.getElementById('homeItemList');

  homeMenu.addEventListener('click', function () {
    if (homeItemList.style.display === 'block') {
      homeItemList.style.display = 'none';
    } else {
      homeItemList.style.display = 'block';
    }
  });

  homeMenu.addEventListener('mouseleave', function () {
    homeItemList.style.display = 'none';
  });


// for shop menu
const shopMenu = document.getElementById('shopMenu');
const ShopItem = document.getAnimations('shopItemList');

shopMenu.addEventListener('click', function(){
  if(ShopItem.style.display === 'block'){
    ShopItem.style.display = 'none';
  } else {
    ShopItem.style.display = 'block';
  }
})

shopMenu.addEventListener('mouseleave', function(){
  homeItemList.style.display = 'none';
})


