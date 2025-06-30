// import { PerceptronGate } from "./perceptron-base";
 class PerceptronBase {
  constructor() {
    this.weights = [Math.random(), Math.random()];
    this.bias = Math.random();
    this.learningRate = 0.1;
    this.epochs = 20;
  }

  // "Virtual" method to be overridden
  getTrainingData() {
    throw new Error("getTrainingData() must be implemented by subclass");
  }

  activate(sum) {
    return sum >= 0 ? 1 : 0;
  }

  train(output = ['']) {
    output =[`Training Data Bias: ${this.bias} Epoch ${this.epochs}, Learning rate ${this.learningRate}`] ;
    console.log(`Training Data Bias: ${this.bias} Epoch ${this.epochs}, Learning rate ${this.learningRate}`) ;
    output.push(`Training Data Weights: ${this.weights[0]} ${this.weights[1]}`) ;
    const data = this.getTrainingData();
    for (let epoch = 0; epoch < this.epochs; epoch++) {
      let totalError = 0;
      for (const { input: x, label: y } of data) {
        const sum = x[0] * this.weights[0] + x[1] * this.weights[1] + this.bias;
        const prediction = this.activate(sum);
        const error = y - prediction;
        output.push(`sum = ${sum} x[0] = ${x[0]} *  + x[1] *  + this.bias`)
        console.log(` Weights: ${this.weights[0]} ${this.weights[1]}`) ;
        console.log(`sum = ${sum}, x[0] = ${x[0]}, x[0] = ${x[0]}, error=${error}`);
        this.weights[0] += this.learningRate * error * x[0];
        this.weights[1] += this.learningRate * error * x[1];
        this.bias += this.learningRate * error;

        totalError += Math.abs(error);
        output.push(`sum = ${sum} x[0] = ${x[0]} *  + x[1] *  + this.bias`)
        output.push(`y= ${y}, predict= ${prediction},error = ${error}, total=${totalError}`);
        
      }
      if (totalError === 0) break;
    }
  }

  predict(x1, x2) {
    const sum = x1 * this.weights[0] + x2 * this.weights[1] + this.bias;
    return this.activate(sum);
  }
}

class ORGate extends PerceptronBase {
  getTrainingData() {
    return [
      { input: [0, 0], label: 0 },
      { input: [0, 1], label: 1 },
      { input: [1, 0], label: 1 },
      { input: [1, 1], label: 1 }
    ];
  }
}

class ANDGate extends PerceptronBase {
  getTrainingData() {
    return [
      { input: [0, 0], label: 0 },
      { input: [0, 1], label: 0 },
      { input: [1, 0], label: 0 },
      { input: [1, 1], label: 1 }
    ];
  }
}
