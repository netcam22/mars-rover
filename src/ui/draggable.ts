export function makeDraggable(thisRobotId: string) {
  const thisRobot = document.getElementById(thisRobotId);
  if (thisRobot) {
    thisRobot.onmousedown = function (event) {
      let shiftX = event.clientX - thisRobot.getBoundingClientRect().left;
      let shiftY = event.clientY - thisRobot.getBoundingClientRect().top;

      thisRobot.style.position = "absolute";
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

      function onMouseMove(event: any) {
        moveAt(event.pageX, event.pageY);
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
