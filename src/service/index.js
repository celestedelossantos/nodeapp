export class Common {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.error('Error fetch', error);
            return null;
        }
    }

    async getById(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.error('Error fetch by id', error);
            return null;
        }
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.error('Error create', error);
            return null;
        }
    }

    async removeById(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.error('Error delete by id', error);
            return null;
        }
    }
}
