import * as tf from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs';

let galleyModel;

/** */
export async function init(container) {
  const form = container.querySelector('#galleyForm');
  const output = container.querySelector('#galleyOutput');
  const wait = container.querySelector('#wait');

  // Load the model (placeholder: random weights initially)
  galleyModel = await loadGalleyModel();

  form.addEventListener('submit', async (e) => {
    alert('hi'); 
    e.preventDefault();
   wait.textContent = "predictonh";
    const passengers = parseInt(container.querySelector('#passengers').value, 10);
    const demographics = container.querySelector('#demographics').value;
    const itinerary = container.querySelector('#itinerary').value;

    const encodedInput = preprocess(passengers, demographics, itinerary);

    const prediction = galleyModel.predict(encodedInput);
    const result = prediction.dataSync();

    output.textContent = `Prediction: ${formatPrediction(result)}`;
  });
}

// Mock preprocessing
function preprocess(passengers, demographics, itinerary) {
  // Example: simple numeric encoding (real version will be more complex)
  const demoCode = demographics.toLowerCase().includes('family') ? 1 : 0;
  const itinCode = itinerary.toLowerCase().includes('caribbean') ? 1 : 0;
  return tf.tensor2d([[passengers, demoCode, itinCode]]);
}

// Mock model loader
async function loadGalleyModel() {
  try {
    return await tf.loadLayersModel('galley-model/model.json'); // future hosted model
  } catch {
    // Create placeholder model if none exists
    console.warn("No trained model found. Using placeholder NN.", err);
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [3], units: 5, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 3, activation: 'softmax' }));
    model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy' });
    return model;
  }
}

// Format predictions (dummy)
function formatPrediction(result) {
  return `Veg: ${(result[0]*100).toFixed(1)}%, Seafood: ${(result[1]*100).toFixed(1)}%, Meat: ${(result[2]*100).toFixed(1)}%`;
}
