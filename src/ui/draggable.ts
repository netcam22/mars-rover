import { showMoveButtons } from "./buttons";

export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);
  if (thisRobot) {
    thisRobot.onmousedown = function (event) {
      startMoving(event, thisRobot);
    };
  }
}

function startMoving(event: MouseEvent, thisRobot: HTMLElement) {
  const shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
  const shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

  document.body.append(thisRobot);

  function moveThisRobot(event: MouseEvent) {
    if (event.type === "mousemove") {
      shiftRobot(thisRobot, event.pageX, event.pageY, shiftX, shiftY);
    }
  }

  document.addEventListener("mousemove", moveThisRobot);

  function dropThisRobot(event: MouseEvent) {
    if (thisRobot && robotDropped(event, thisRobot)) {
      document.removeEventListener("mouseup", dropThisRobot);
      document.removeEventListener("mousemove", moveThisRobot);
      thisRobot.onmousedown = null;
      event.preventDefault();
      showMoveButtons();
    }
  }

  document.addEventListener("mouseup", dropThisRobot);

  thisRobot.ondragstart = function () {
    return false;
  };
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

function robotDropped(event: MouseEvent, thisRobot: HTMLElement): boolean {
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
