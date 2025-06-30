import * as tf from '@tensorflow/tfjs';

export class TfModelHandler {
  private model: tf.Sequential;

  constructor(inputSize: number, outputSize: number) {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ inputShape: [inputSize], units: 10, activation: 'relu' }));
    this.model.add(tf.layers.dense({ units: outputSize, activation: 'softmax' }));
    this.model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
  }

  public async train(input: tf.Tensor, labels: tf.Tensor, epochs = 10) {
    return await this.model.fit(input, labels, { epochs });
  }

  public predict(input: tf.Tensor) {
    return this.model.predict(input);
  }
}
