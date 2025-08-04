let mainERPModel;
let subModels = {};

async function createMainNetwork() {
  mainERPModel = tf.sequential();
  mainERPModel.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [10] })); 
  mainERPModel.add(tf.layers.dense({ units: 16, activation: 'relu' }));
  mainERPModel.add(tf.layers.dense({ units: 1, activation: 'linear' }));

  mainERPModel.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
  console.log("Main ERP Network created!");
}

async function trainMainNetwork() {
  if (!mainERPModel) await createMainNetwork();

  const xs = tf.randomNormal([100, 10]); // 10 ERP features (dummy)
  const ys = tf.randomNormal([100, 1]);  // Target: e.g., operational cost

  await mainERPModel.fit(xs, ys, { epochs: 20 });
  console.log("Main ERP Network trained!");
}

async function predictERP() {
  const testInput = tf.randomNormal([1, 10]);
  const prediction = mainERPModel.predict(testInput);
  prediction.print();
}

// Attach Sub-Network (Sales)
async function addSalesNetwork() {
  const salesModel = tf.sequential();
  salesModel.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [5] })); 
  salesModel.add(tf.layers.dense({ units: 1, activation: 'linear' }));

  salesModel.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  subModels["sales"] = salesModel;
  console.log("Sales sub-network added!");
}
