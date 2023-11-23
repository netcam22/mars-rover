export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);
  if (thisRobot) {
    thisRobot.onmousedown = function (event) {
      const shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
      const shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

      document.body.append(thisRobot);
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX: number, pageY: number) {
        if (thisRobot) {
          thisRobot.style.left = pageX - shiftX + "px";
          thisRobot.style.top = pageY - shiftY + "px";
        }
      }

      function onMouseMove(event: any) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      function onMouseUp(event: any) {
        if (thisRobot) {
          thisRobot.hidden = true;
          const elemBelow: Element | null = document.elementFromPoint(
            event.clientX,
            event.clientY
          );
          thisRobot.hidden = false;
          if (elemBelow) {
            const droppableBelow: Element | null = elemBelow.classList.contains(
              "grid-layer"
            )
              ? elemBelow
              : null;
            if (droppableBelow) {
              if (thisRobot.parentNode === document.body) {
                document.body.removeChild(thisRobot);
              }
              thisRobot.style.left = "0%";
              thisRobot.style.top = "-20%";
              droppableBelow.append(thisRobot);
              if (thisRobot.parentNode === droppableBelow) {
                document.removeEventListener("mousemove", onMouseMove);
                event.preventDefault();
                const moveButtons: NodeListOf<HTMLElement> | null =
                  document.querySelectorAll(".move-button");
                if (moveButtons) {
                  moveButtons.forEach(
                    (button: HTMLElement) => (button.style.display = "block")
                  );
                }
              }
            }
          }
        }
      }

      document.addEventListener("mouseup", onMouseUp);

      thisRobot.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        thisRobot.onmouseup = null;
      };

      thisRobot.ondragstart = function () {
        return false;
      };
    };
  }
}
