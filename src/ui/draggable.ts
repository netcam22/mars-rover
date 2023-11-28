import { showMoveButtons } from "./buttons";

export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);
  if (thisRobot) {
    thisRobot.ondragstart = () => false;
    thisRobot.onpointerdown = function (event) {
      thisRobot.setPointerCapture(event.pointerId);
      startMoving(event, thisRobot);
    };
  }
}

function startMoving(event: PointerEvent, thisRobot: HTMLElement) {
  const shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
  const shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

  document.body.append(thisRobot);

  function moveThisRobot(event: PointerEvent) {
    shiftRobot(thisRobot, event.pageX, event.pageY, shiftX, shiftY);
  }
  document.addEventListener("pointermove", moveThisRobot);

  function dropThisRobot(event: PointerEvent) {
    if (thisRobot && robotDropped(event, thisRobot)) {
      document.removeEventListener("pointerup", dropThisRobot);
      document.removeEventListener("pointermove", moveThisRobot);
      thisRobot.onpointerdown = null;
      event.preventDefault();
      showMoveButtons();
    }
  }
  document.addEventListener("pointerup", dropThisRobot);
}

function shiftRobot(
  thisRobot: HTMLElement,
  pageX: number,
  pageY: number,
  shiftX: number,
  shiftY: number
) {
  if (thisRobot) {
    thisRobot.style.left = pageX - shiftX + "px";
    thisRobot.style.top = pageY - shiftY + "px";
  }
}

function robotDropped(event: PointerEvent, thisRobot: HTMLElement): boolean {
  thisRobot.hidden = true;
  const elemBelow: Element | null = document.elementFromPoint(
    event.clientX,
    event.clientY
  );
  return addToDropZone(thisRobot, elemBelow);
}

function addToDropZone(thisRobot: HTMLElement, elemBelow: Element | null) {
  thisRobot.hidden = false;
  if (elemBelow) {
    const attached = attachRobot(elemBelow, thisRobot);
    if (attached && thisRobot.parentNode === attached) {
      return true;
    }
  }
  return false;
}

function attachRobot(
  elemBelow: Element,
  thisRobot: HTMLElement
): Element | undefined {
  const dropZone: Element | null = elemBelow.classList.contains("grid-layer")
    ? elemBelow
    : null;
  if (dropZone) {
    if (thisRobot.parentNode === document.body) {
      document.body.removeChild(thisRobot);
    }
    thisRobot.style.left = "0%";
    thisRobot.style.top = "-20%";
    dropZone.append(thisRobot);
    return dropZone;
  }
  return undefined;
}
