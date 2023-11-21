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
        thisRobot.style.padding = `${targetDiv?.offsetWidth}px 0 0 0`;
      }
      document.body.append(thisRobot);
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX: number, pageY: number) {
        if (thisRobot) {
          thisRobot.style.left = pageX - shiftX + "px";
          thisRobot.style.top = pageY - shiftY + "px";
        }
      }
      document.addEventListener("mousemove", onMouseEnd);

      thisRobot.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseEnd);
        thisRobot.ondragend = null;
      };

      function onMouseEnd(event: any) {
        console.log("here");
        moveAt(event.pageX, event.pageY);
        if (thisRobot) {
          thisRobot.hidden = true;
          const elemBelow: Element | null = document.elementFromPoint(
            event.clientX,
            event.clientY
          );
          thisRobot.hidden = false;

          console.log(elemBelow);
          if (elemBelow) {
            const droppableBelow: Element | null = elemBelow.classList.contains(
              "grid-layer"
            )
              ? elemBelow
              : null;
            console.log(droppableBelow);
            if (droppableBelow && thisRobot.parentNode === document.body) {
              document.body.removeChild(thisRobot);
              thisRobot.style.left = "0%";
              thisRobot.style.top = "-20%";
              droppableBelow.prepend(thisRobot);
              if (thisRobot.parentNode === droppableBelow) {
                document.removeEventListener("mousemove", onMouseEnd);
                return;
              }
            }
          }
        }
      }
    };
  }
}
