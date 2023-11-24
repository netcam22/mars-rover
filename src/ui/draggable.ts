import { showMoveButtons } from "./buttons";

export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);

  if (thisRobot) {
    thisRobot.onmousedown = function (event) {
      startMove(event, thisRobot);
    };
  }

  function startMove(event: MouseEvent, thisRobot: HTMLElement) {
    const shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
    const shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

    document.body.append(thisRobot);

    function dragThisRobot(event: any) {
      shiftRobot(thisRobot, event.pageX, event.pageY, shiftX, shiftY);
    }

    document.addEventListener("mousemove", dragThisRobot);

    document.addEventListener("mouseup", dropThisRobot);

    thisRobot.onmouseup = function () {
      document.removeEventListener("mousemove", dragThisRobot);
      thisRobot.onmousemove = null;
    };

    thisRobot.ondragstart = function () {
      return false;
    };
  }

  function dropThisRobot(event: any) {
    if (thisRobot) {
      thisRobot.hidden = true;
      const elemBelow: Element | null = document.elementFromPoint(
        event.clientX,
        event.clientY
      );
      thisRobot.hidden = false;
      if (elemBelow) {
        const dropZone = attachRobot(elemBelow, thisRobot);
        if (dropZone && thisRobot.parentNode === dropZone) {
          document.removeEventListener("mouseup", dropThisRobot);
          thisRobot.onmousedown = null;
          event.preventDefault();
          showMoveButtons();
        }
      }
    }
  }
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
