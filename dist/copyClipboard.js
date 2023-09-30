let copyButtonLabel = "Copiar";
let copyButtons = Array.from(document.querySelectorAll(".funding-button"));

for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", async () => {
    let textToCopy = copyButton.getAttribute('data-copy-value');
    await navigator.clipboard.writeText(textToCopy);

    // feedback visual de que la tarea se completó
    copyButton.innerText = "Copiado";

    setTimeout(() => {
      copyButton.innerText = copyButtonLabel;
    }, 700);
  });
}
