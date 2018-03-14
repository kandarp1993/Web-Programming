const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;

const uuid = require("uuid");

const exportedMethods = {
    async getAllRecipes() {
        const recipesCollection = await recipes();
        return await recipesCollection.find({}, { title: 1 }).toArray();
    },
    
    async getRecipeById(id) {
        const recipesCollection = await recipes();
        const recipe = await recipesCollection.findOne({ _id: id });

        if (!recipe)
            throw "Recipe not found";
        return recipe;
    },
    async addRecipes(title, ingredients, steps) {
        if (typeof title !== "string" || title === "")
            throw "Must provide title";

        if (!Array.isArray(ingredients)) {
            throw "There should a name and amount for the ingredients";
        }
        if (ingredients.length <= 0) {
            throw "There should be atleast one ingredients";
        }
        
        for (let i = 0; i < ingredients.length; i++) {
            if (typeof ingredients[i].name !== "string" || ingredients[i].name === "")
                throw "Name should be a string";
            if (typeof ingredients[i].amount !== "string" || ingredients[i].amount === "")
                throw "Please specify the amount in correct format ex. number ingredient name";
        }

        if (!Array.isArray(steps)) {
            throw "Recipe should have at least be one step";
        }
        if (steps.length <= 0) {
            throw "There should be atleast one step for your recipe";
        }

        for (let i = 0; i < steps.length; i++) {
            if (typeof steps[i] !== "string" || steps[i] === "")
                throw "You should define a proper method for making the recipe"
        }

        const recipesCollection = await recipes();

        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps
        };

        const newRecipeInformation = await recipesCollection.insertOne(newRecipe);
        const newId = newRecipeInformation.insertedId;
        return await this.getRecipeById(newId);
    },

    async removeRecipe(id) {
        const recipesCollection = await recipes();
        const deletionInfo = await recipesCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }
    },
    async updateRecipe(id, updatedRecipe) {
        const recipesCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.steps || updatedRecipe.steps === "") {
            if (!Array.isArray(updatedRecipe.steps)) {
                throw "Recipe should have at least be one step";
            }
            if (updatedRecipe.steps.length <= 0) {
                throw "There should be atleast one step for your recipe";
            }
        
            for (let i = 0; i < updatedRecipe.steps.length; i++) {
                if (typeof updatedRecipe.steps[i] !== "string" || updatedRecipe.steps[i] === "")
                    throw "You should define a proper method for making the recipe"
            }
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        if (updatedRecipe.title || updatedRecipe.title === "") {
            if (typeof updatedRecipe.title !== "string" || updatedRecipe.title === "")
                throw "Must provide title.";
            updatedRecipeData.title = updatedRecipe.title;
        }

        if (updatedRecipe.ingredients || updatedRecipe.ingredients === "") {
            if (!Array.isArray(updatedRecipe.ingredients)) {
                throw "There should a name and amount for the ingredients";
            }
            if (updatedRecipe.ingredients.length <= 0) {
                throw "There should be atleast one ingredients";
            }
            
            for (let i = 0; i < updatedRecipe.ingredients.length; i++) {
                if (typeof updatedRecipe.ingredients[i].name !== "string" || updatedRecipe.ingredients[i].name === "")
                    throw "Name should be a string";
                if (typeof updatedRecipe.ingredients[i].amount !== "string" || updatedRecipe.ingredients[i].amount === "")
                    throw "Please specify the amount in correct format ex. number ingredient name";
            }
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        let updateCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipesCollection.updateOne(query, updateCommand);

        return await this.getRecipeById(id);
    },
    async updateWholeRecipe(id, updatedRecipe) {
        const recipesCollection = await recipes();
        const updatedRecipeData = {};
        if(updatedRecipe.title !== "" &&  updatedRecipe.title !== undefined  && updatedRecipe.steps !== "" && updatedRecipe.steps !== undefined && updatedRecipe.ingredients !== "" && updatedRecipe.ingredients !== undefined){
            if (updatedRecipe.title || updatedRecipe.title === "") {
                if (typeof updatedRecipe.title !== "string" || updatedRecipe.title === "")
                    throw "Must provide title.";
                updatedRecipeData.title = updatedRecipe.title;
            }
    
            if (updatedRecipe.ingredients || updatedRecipe.ingredients === "") {
                if (!Array.isArray(updatedRecipe.ingredients)) {
                    throw "There should a name and amount for the ingredients";
                }
                if (updatedRecipe.ingredients.length <= 0) {
                    throw "There should be atleast one ingredients";
                }
                
                for (let i = 0; i < updatedRecipe.ingredients.length; i++) {
                    if (typeof updatedRecipe.ingredients[i].name !== "string" || updatedRecipe.ingredients[i].name === "")
                        throw "Name should be a string";
                    if (typeof updatedRecipe.ingredients[i].amount !== "string" || updatedRecipe.ingredients[i].amount === "")
                        throw "Please specify the amount in correct format ex. number ingredient name";
                }
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }
            if (updatedRecipe.steps || updatedRecipe.steps === "") {
                if (!Array.isArray(updatedRecipe.steps)) {
                    throw "Recipe should  have at least one step";
                }
                if (updatedRecipe.steps.length <= 0) {
                    throw "There should be atleast one step for your recipe";
                }
            
                for (let i = 0; i < updatedRecipe.steps.length; i++) {
                    if (typeof updatedRecipe.steps[i] !== "string" || updatedRecipe.steps[i] === "")
                        throw "You should define a proper method for making the recipe"
                }
                updatedRecipeData.steps = updatedRecipe.steps;
            }
            let updateCommand = {
                $set: updatedRecipeData
            };
            const query = {
                _id: id
            };
            await recipesCollection.updateOne(query, updateCommand);
    
            return await this.getRecipeById(id);
        }else{
            throw "Please Provide Title, Ingridient and Steps."
        }
    }
};

module.exports = exportedMethods;