import handleScroll from "../hooks/handleScroll";

export function handleOffset( triggerOffset, speed ) {
  const { offsetY } = handleScroll();

  if(offsetY > triggerOffset) return ((offsetY - triggerOffset) * speed)
  return 0
}