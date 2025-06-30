var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as tf from '@tensorflow/tfjs';
export class TfModelHandler {
    constructor(inputSize, outputSize) {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({ inputShape: [inputSize], units: 10, activation: 'relu' }));
        this.model.add(tf.layers.dense({ units: outputSize, activation: 'softmax' }));
        this.model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
    }
    train(input_1, labels_1) {
        return __awaiter(this, arguments, void 0, function* (input, labels, epochs = 10) {
            return yield this.model.fit(input, labels, { epochs });
        });
    }
    predict(input) {
        return this.model.predict(input);
    }
}
