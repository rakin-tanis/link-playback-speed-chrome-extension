window.onload = () => {
  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function createLabel(text) {
    const label = document.createElement("div");
    label.innerText = text;
    label.style.color = "black";
    label.style.width = "fit-content";
    label.style.height = "fit-content";
    label.style.fontSize = "12px";
    return label;
  }

  function createDownloadButton(src) {
    const downloadButton = document.createElement("a");
    downloadButton.href = src;
    downloadButton.download =
      "Thema " +
      document
        .getElementsByClassName("content")[0]
        .getElementsByClassName("nummer")[0].innerText +
      " " +
      document
        .getElementsByClassName("content")[0]
        .getElementsByClassName("kolommen")[0]
        .getElementsByClassName("heeft-subitems actief voortgang-0")[0]
        .getElementsByTagName("span")[0].innerText +
      makeId(6);
    downloadButton.value = "download";
    downloadButton.style.width = "30px";
    downloadButton.style.height = "30px";
    downloadButton.style.borderRadius = "50%";
    downloadButton.style.background = "#fd2";

    const iconContainer = document.createElement("div");
    iconContainer.style.display = "flex";
    iconContainer.style.flexDirection = "column";
    iconContainer.style.alignItems = "center";
    iconContainer.style.justifyContent = "center";
    iconContainer.style.width = "30px";
    iconContainer.style.height = "30px";

    const iconArrow = document.createElement("div");
    iconArrow.style.top = "16px";
    iconArrow.style.left = "7px";
    iconArrow.style.borderBottom = "0px";
    iconArrow.style.borderTop = "8px solid #000";
    iconArrow.style.borderRight = "8px solid transparent";
    iconArrow.style.borderLeft = "8px solid transparent";

    const iconHandle = document.createElement("div");
    iconHandle.style.width = "8px";
    iconHandle.style.height = "8px";
    iconHandle.style.background = "#000";

    iconContainer.appendChild(iconHandle);
    iconContainer.appendChild(iconArrow);
    downloadButton.appendChild(iconContainer);
    return downloadButton;
  }

  document.querySelectorAll(".onderdeel-luisteren").forEach((i) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.gap = "30px";

    const dv = document.createElement("div");
    dv.style.width = "400px";
    dv.style.display = "flex";
    dv.style.flexDirection = "column";
    dv.style.gap = "4px";
    const range = document.createElement("input");
    range.type = "range";
    range.min = "0.6";
    range.max = "1.2";
    range.step = "0.1";
    range.value = "1.0";
    range.width = "100%";
    range.addEventListener("change", (event) => {
      i
        .getElementsByClassName("html5audioplayer")[0]
        .getElementsByTagName("audio")[0].playbackRate = event.target.value;
    });

    const labels = document.createElement("div");
    labels.style.width = "100%";
    labels.style.height = "30px";
    labels.style.display = "flex";
    labels.style.flexDirection = "row";
    labels.style.justifyContent = "space-between";
    labels.appendChild(createLabel("0.6"));
    labels.appendChild(createLabel("0.7"));
    labels.appendChild(createLabel("0.8"));
    labels.appendChild(createLabel("0.9"));
    labels.appendChild(createLabel("1.0"));
    labels.appendChild(createLabel("1.1"));
    labels.appendChild(createLabel("1.2"));

    const downloadButton = createDownloadButton(
      i
        .getElementsByClassName("html5audioplayer")[0]
        .getElementsByTagName("audio")[0].src
    );
    dv.appendChild(range);
    dv.appendChild(labels);
    container.appendChild(dv);
    container.appendChild(downloadButton);
    i.appendChild(container);
  });
};
