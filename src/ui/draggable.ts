export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);
  if (thisRobot) {
    thisRobot.onmousedown = function (event) {
      const shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
      const shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

      thisRobot.style.position = "absolute";
      const targetDiv: HTMLElement | null =
        document.querySelector(".grid-item");
      if (targetDiv?.offsetWidth) {
        thisRobot.style.width = `${targetDiv?.offsetWidth}px`;
      }
      document.body.append(thisRobot);
      moveAt(event.pageX, event.pageY);

      // moves the thisRobot at (pageX, pageY) coordinates
      // taking initial shifts into account
      function moveAt(pageX: number, pageY: number) {
        if (thisRobot) {
          thisRobot.style.left = pageX - shiftX + "px";
          thisRobot.style.top = pageY - shiftY + "px";
        }
      }

      // potential droppable that we're flying over right now
      let currentDroppable: HTMLElement | null = null;

      function onMouseMove(event: any) {
        moveAt(event.pageX, event.pageY);
        if (thisRobot) {
          thisRobot.hidden = true;
          let elemBelow = document.elementFromPoint(
            event.clientX,
            event.clientY
          );
          thisRobot.hidden = false;

          // mousemove events may trigger out of the window (when the ball is dragged off-screen)
          // if clientX/clientY are out of the window, then elementFromPoint returns null
          if (!elemBelow) return;

          // potential droppables are labeled with the class "droppable" (can be other logic)
          let droppableBelow: HTMLElement | null =
            elemBelow.closest(".droppable");

          if (currentDroppable != droppableBelow) {
            // we're flying in or out...
            // note: both values can be null
            //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
            //   droppableBelow=null if we're not over a droppable now, during this event

            if (currentDroppable) {
              // the logic to process "flying out" of the droppable (remove highlight)
              leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
              // the logic to process "flying in" of the droppable
              enterDroppable(currentDroppable);
            }
          }
        }
      }

      // move the thisRobot on mousemove
      document.addEventListener("mousemove", onMouseMove);

      // drop the thisRobot, remove unneeded handlers
      thisRobot.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        thisRobot.onmouseup = null;
      };
    };

    thisRobot.ondragstart = function () {
      return false;
    };
  }
}

function enterDroppable(thisRobot: HTMLElement) {
  thisRobot.style.background = "pink";
  thisRobot.style.width = "20%";
}

function leaveDroppable(thisRobot: HTMLElement) {
  thisRobot.style.background = "yellow";
}
