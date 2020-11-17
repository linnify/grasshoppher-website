export function resizeGridItem(item){
  const grid = document.getElementsByClassName("blog-post")[0];
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  const rowSpan = Math.ceil((item.querySelector('.post--content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  return item.style.gridRowEnd = "span "+rowSpan;
};

export function resizeAllGridItems(){
  const allItems = document.getElementsByClassName("post");
  for(let x = 0; x < allItems.length; x++){
    resizeGridItem(allItems[x]);
  }
};
