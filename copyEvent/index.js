const IMG_REGEX = /^image\/(png|jpe?g)$/i;

async function copyImg() {
  const type = "image/png";
  console.log("inside copy image");
  let myImg = document.getElementById("myImage");
  let imgRes = await fetch(myImg.getAttribute("src"));
  console.log("image has been fetched ");
  let contentType = imgRes.headers.get("Content-Type");

  if (contentType !== type) return;

  console.log(imgRes);
  console.log({ contentType });
  console.log("_______________________________________________");
  var blob = new Blob([await imgRes.blob()], { type });
  var data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
    console.log("The image was copied");
  } catch (e) {
    console.error("There was a problem copying the imagge");
    console.error(e);
  }
}

async function pasteImage() {
  let destinationImage = document.getElementById("paste");
  //   const permission = await navigator.permissions.query({
  //     name: "clipboard-read",
  //   });
  //   if (permission.state === "denied") {
  //     throw new Error("Not allowed to read clipboard.");
  //   }
  const clipboardContents = await navigator.clipboard.read();
  console.log("________________________________________________________");
  console.log(clipboardContents);
  console.log("________________________________________________________");
  for (const item of clipboardContents) {
    console.log({ item, types: item.types });
    const mimeType = item.types[0];
    if (IMG_REGEX.test(mimeType)) {
      const blob = await item.getType(item.types[0]);
      console.log(blob);
      destinationImage.src = URL.createObjectURL(blob);
    }
  }
}

const copyBtn = document.getElementById("copy-btn");
const pasteBtn = document.getElementById("paste-btn");

copyBtn.addEventListener("click", copyImg);
pasteBtn.addEventListener("click", pasteImage);
