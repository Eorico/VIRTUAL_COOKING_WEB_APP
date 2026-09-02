const fs = require('fs');

const content = fs.readFileSync('src/data/recipes.ts', 'utf8');

// Use a simple regex to find recipes
const recipeRegex = /"id":\s*(\d+),\s*"name":\s*"([^"]+)"/g;

let match;
const recipes = [];
while ((match = recipeRegex.exec(content)) !== null) {
    recipes.push({
        id: match[1],
        name: match[2]
    });
}

// For each recipe, let's see if it has chronologicalSteps
const results = recipes.map(r => {
    // find index of this recipe
    const startIdx = content.indexOf(`"id": ${r.id},`);
    // find index of next recipe
    const nextRecipe = recipes.find(nr => Number(nr.id) === Number(r.id) + 1);
    const endIdx = nextRecipe ? content.indexOf(`"id": ${nextRecipe.id},`) : content.length;
    
    const recipeBlock = content.substring(startIdx, endIdx);
    const hasChronoSteps = recipeBlock.includes('"chronologicalSteps"');
    return `${r.id} - ${r.name}: ${hasChronoSteps}`;
});

console.log(results.join('\n'));
