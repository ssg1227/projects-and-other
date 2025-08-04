import * as tf from '@tensorflow/tfjs';
export class TfModelHandler {
    constructor(inputSize, outputSize) {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ inputShape: [inputSize], units: 10, activation: 'relu' }));
        this.model.add(tf.layers.dense({ units: outputSize, activation: 'softmax' }));
        this.model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
    }
    async train(input, labels, epochs = 10) {
        return await this.model.fit(input, labels, { epochs });
    }
    predict(input) {
        return this.model.predict(input);
    }
}
