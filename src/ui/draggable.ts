import { robot } from "../modules/robot";
import { makeCoordinates } from "../modules/plateau";
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
      document.addEventListener("mousemove", onMouseEnd);

      thisRobot.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseEnd);
        thisRobot.onmouseup = null;
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
              droppableBelow.append(thisRobot);
              if (thisRobot.parentNode === droppableBelow) {
                document.removeEventListener("mousemove", onMouseEnd);
                const newPosition = droppableBelow.id.split("_").join("");
                if (newPosition) {
                  robot.setPosition(makeCoordinates(newPosition));
                }
              }
            }
          }
        }
      }
    };
  }
}
