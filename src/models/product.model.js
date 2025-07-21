import { db } from '../config/firebase.js';

export class ProductModel {
    #name = 'items';
    #collection = null;
    constructor() {
        this.#collection = db.collection(this.#name);
    }
    async create(productData) {
        const data = await this.#collection.add(productData);
        return { id: data.id };
    }

    async find() {
        const { docs = [] } = await this.#collection.get();
        const list = docs.map((snap) => ({ ...snap.data(), id: snap.id }));

        return list;
    }

    async findById(id) {
        const ref = this.#collection.doc(id);
        const response = await ref.get();
        return response.data();
    }

    async findByIdAndDelete(id) {
        const ref = this.#collection.doc(id);
        if (!(await ref.get()).exists) throw new Error('Product not found');
        await ref.delete();

        return { id };
    }
}
