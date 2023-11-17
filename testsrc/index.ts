document.getElementById("demo")?.addEventListener("click", () => {
  const myMum: HTMLElement | null = document.getElementById("mum");
  if (myMum) {
    myMum.innerHTML = "go and make the dinner";
  }
});
