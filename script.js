const URL = "./my_model/";

let model, maxPredictions;
let imageElement = null;

window.onload = async () => {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  document.getElementById("label-container").innerHTML = "";
  for (let i = 0; i < maxPredictions; i++) {
    document.getElementById("label-container").appendChild(document.createElement("div"));
  }
};

function handleImageUpload(event) {
  const reader = new FileReader();
  reader.onload = function () {
    imageElement = new Image();
    imageElement.src = reader.result;
    imageElement.onload = () => {
      document.getElementById("preview").src = reader.result;
    };
  };
  reader.readAsDataURL(event.target.files[0]);
}

async function classificar() {
  if (!imageElement) return;

  const prediction = await model.predict(imageElement);
  prediction.sort((a, b) => b.probability - a.probability);

  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = `${prediction[i].className}: ${(prediction[i].probability * 100).toFixed(2)}%`;
    document.getElementById("label-container").childNodes[i].innerHTML = classPrediction;
  }
}