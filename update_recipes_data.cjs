const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src', 'data', 'cookingStepImages.ts');
const recipesFilePath = path.join(__dirname, 'src', 'data', 'recipes.ts');

const RECIPE_STEPS = {
  1: { // Bechamel
    steps: [
      "Butter",
      "Flour",
      "tool:whisk",
      "Milk",
      "tool:whisk", // constant
      "tool:whisk", // thicken
      "Salt",
      "Pepper",
      "tool:spoon"
    ],
    images: [
      '/assets/COOKING PART/1-bechamel/bechamel/1-melt-the-butter.png',
      '/assets/COOKING PART/1-bechamel/bechamel/2-add-the-roux.png',
      '/assets/COOKING PART/1-bechamel/bechamel/3-whisk-1-2-minutes.png',
      '/assets/COOKING PART/1-bechamel/bechamel/4-add-the-milk.png',
      '/assets/COOKING PART/1-bechamel/bechamel/5-whisking-constantly.png',
      '/assets/COOKING PART/1-bechamel/bechamel/6-thicken-into-creamy-sauce.png',
      '/assets/COOKING PART/1-bechamel/bechamel/7-add-salt.png',
      '/assets/COOKING PART/1-bechamel/bechamel/8-add-pepper.png',
      '/assets/COOKING PART/1-bechamel/bechamel/9-stir-the-sauce-gently.png'
    ],
    done: '/assets/COOKING PART/1-bechamel/bechamel/10-serve.png',
    burnt: '/assets/COOKING PART/1-bechamel/bechamel/burn-version.png'
  },
  2: { // Espagnole
    steps: [
      "Butter", "Carrot", "Onion", "Celery", "Flour", 
      "tool:whisk", 
      "Tomato paste", "Beef stock", 
      "tool:whisk", 
      "tool:spoon", // simmer
      "tool:ladle" // strain (ladle is closest)
    ],
    images: [
      '/assets/COOKING PART/2-espagnole/1-melt-butter.png',
      '/assets/COOKING PART/2-espagnole/2-add-carrots.png',
      '/assets/COOKING PART/2-espagnole/3-add-onion.png',
      '/assets/COOKING PART/2-espagnole/4-add-celery.png',
      '/assets/COOKING PART/2-espagnole/5-add-flour.png',
      '/assets/COOKING PART/2-espagnole/6-whisk.png',
      '/assets/COOKING PART/2-espagnole/7-add-tomato-paste.png',
      '/assets/COOKING PART/2-espagnole/8-add-beef-stock.png',
      '/assets/COOKING PART/2-espagnole/9-whisk.png',
      '/assets/COOKING PART/2-espagnole/10-simmer.png',
      '/assets/COOKING PART/2-espagnole/11-strain-the-sauce.png'
    ],
    done: '/assets/COOKING PART/2-espagnole/serve-good.png',
    burnt: '/assets/COOKING PART/2-espagnole/serve-burnt.png'
  },
  3: { // Tomato Sauce
    steps: [
      "Olive oil", "Onion", "Garlic", "Tomato", "Salt", 
      "tool:whisk", // or spoon, the asset says 6-whisk
      "tool:spoon" // cook the sauce
    ],
    images: [
      '/assets/COOKING PART/3-tomato-sauce/1-heat-olive-oil.png',
      '/assets/COOKING PART/3-tomato-sauce/2-cook-the-onion.png',
      '/assets/COOKING PART/3-tomato-sauce/3-add-the-garlic.png',
      '/assets/COOKING PART/3-tomato-sauce/4-crushed-tomatoes.png',
      '/assets/COOKING PART/3-tomato-sauce/5-add-salt-and-pepper.png',
      '/assets/COOKING PART/3-tomato-sauce/6-whisk.png',
      '/assets/COOKING PART/3-tomato-sauce/7-cook-the-sauce.png'
    ],
    done: '/assets/COOKING PART/3-tomato-sauce/8-good.png',
    burnt: '/assets/COOKING PART/3-tomato-sauce/9-burnt.png'
  },
  4: { // Hollandaise
    steps: ["Egg yolks", "tool:whisk", "Butter", "Lemon juice", "Salt"],
    images: [
      '/assets/COOKING PART/4-hollandaise/step-1.png',
      '/assets/COOKING PART/4-hollandaise/step-1.png', // whisking egg yolks
      '/assets/COOKING PART/4-hollandaise/step-2.png',
      '/assets/COOKING PART/4-hollandaise/step-3.png',
      '/assets/COOKING PART/4-hollandaise/step-4.png'
    ],
    done: '/assets/COOKING PART/4-hollandaise/step-5.png'
  },
  6: { // Chicken Noodle Soup
    steps: [
      "Cooking oil", "Onion", "Celery", "Garlic", "Chicken breast", "Chicken broth", "Carrot", "Egg noodles",
      "Salt"
    ],
    images: [
      '/assets/COOKING PART/6-chicken-noodle-soup/1-add-cooking-oil.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/2-add-onion.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/3-add-celery.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/4-add-garlic.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/5-add-chicken-pieces.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/6-pour-the-chicken-broth.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/8-add-sliced-carrot.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/9-stir-in-the-egg-noodles.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/9-stir-in-the-egg-noodles.png' // salt fallback
    ],
    done: '/assets/COOKING PART/6-chicken-noodle-soup/7-ladle.png',
    burnt: '/assets/COOKING PART/6-chicken-noodle-soup/10-overcooked.png'
  },
  7: { // Corn Chowder
    steps: ["Butter", "Onion", "Potatoes", "Corn kernels", "Chicken broth", "Milk", "Salt"],
    images: [
      '/assets/COOKING PART/7-corn-cowder-soup/step-1.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-2.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-3.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-4.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-5.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-6.png',
      '/assets/COOKING PART/7-corn-cowder-soup/step-6.png'
    ],
    done: '/assets/COOKING PART/7-corn-cowder-soup/step-7.png'
  },
  8: { // Butternut
    steps: ["Butter", "Onion", "Garlic", "Butternut squash", "Vegetable broth", "Cream"],
    images: [
      '/assets/COOKING PART/8-butternut-squash-soup/step-1-1.png',
      '/assets/COOKING PART/8-butternut-squash-soup/step-2.png',
      '/assets/COOKING PART/8-butternut-squash-soup/step-3.png',
      '/assets/COOKING PART/8-butternut-squash-soup/step-4.png',
      '/assets/COOKING PART/8-butternut-squash-soup/step-5.png',
      '/assets/COOKING PART/8-butternut-squash-soup/step-6.png'
    ]
  },
  9: { // Adobo
    steps: ["Chicken", "Soy sauce", "Garlic", "Cooking oil", "Water", "Vinegar", "Bay leaves", "Peppercorns"],
    images: [
      '/assets/COOKING PART/9-adobo/2-put-the-chicken.png',
      '/assets/COOKING PART/9-adobo/3-add-soysauce.png',
      '/assets/COOKING PART/9-adobo/4-add-garlic.png',
      '/assets/COOKING PART/9-adobo/5-add-oil.png',
      '/assets/COOKING PART/9-adobo/8-add-water.png',
      '/assets/COOKING PART/9-adobo/9-add-vinegar.png',
      '/assets/COOKING PART/9-adobo/10-add-bay-leaf.png',
      '/assets/COOKING PART/9-adobo/11-pepper.png'
    ],
    done: '/assets/COOKING PART/9-adobo/good.png',
    burnt: '/assets/COOKING PART/9-adobo/burnt.png'
  },
  10: { // Sinigang
    steps: ["Pork belly", "Water", "Onion", "Tomato", "Radish", "Sitaw", "Sinigang mix", "Kangkong"],
    images: [
      '/assets/COOKING PART/10-sinigang/1.png',
      '/assets/COOKING PART/10-sinigang/2.png',
      '/assets/COOKING PART/10-sinigang/3.png',
      '/assets/COOKING PART/10-sinigang/4.png',
      '/assets/COOKING PART/10-sinigang/5.png',
      '/assets/COOKING PART/10-sinigang/6.png',
      '/assets/COOKING PART/10-sinigang/pork-sinigang.png',
      '/assets/COOKING PART/10-sinigang/8-kangkong.png'
    ],
    done: '/assets/COOKING PART/10-sinigang/8-done'
  },
  11: { // Pakbet
    steps: ["Cooking oil", "Garlic", "Onion"],
    images: [
      '/assets/COOKING PART/11-pakbet/step-2-1.png',
      '/assets/COOKING PART/11-pakbet/step-3-1.png',
      '/assets/COOKING PART/11-pakbet/step-4-1.png'
    ]
  },
  13: { // Escabeche
    steps: ["Fish", "Salt", "Cooking oil", "Onion", "Garlic", "Ginger", "Bell pepper", "Carrot"],
    images: [
      '/assets/COOKING PART/13-fish-escabeche/step-1.png',
      '/assets/COOKING PART/13-fish-escabeche/step-2.png',
      '/assets/COOKING PART/13-fish-escabeche/step-3.png',
      '/assets/COOKING PART/13-fish-escabeche/step-4.png',
      '/assets/COOKING PART/13-fish-escabeche/step-5.png',
      '/assets/COOKING PART/13-fish-escabeche/step-6.png',
      '/assets/COOKING PART/13-fish-escabeche/step-7.png',
      '/assets/COOKING PART/13-fish-escabeche/step-8.png'
    ]
  },
  14: { // Bulalo
    steps: ["Beef shank", "Water", "Onion", "Corn", "Peppercorns", "Cabbage"],
    images: [
      '/assets/COOKING PART/14-bulalo/step-1.png',
      '/assets/COOKING PART/14-bulalo/step-2.png',
      '/assets/COOKING PART/14-bulalo/step-3.png',
      '/assets/COOKING PART/14-bulalo/step-4.png',
      '/assets/COOKING PART/14-bulalo/step-5.png',
      '/assets/COOKING PART/14-bulalo/step-6.png'
    ]
  },
  16: { // Pasta
    steps: [
      "Water", "Pasta", "Cooking oil", "Garlic", "Onion", "Ground beef", "Tomato sauce"
    ],
    images: [
      '/assets/COOKING PART/16-pasta/2-boil-the-water.png',
      '/assets/COOKING PART/16-pasta/3-add-the-pasta.png',
      '/assets/COOKING PART/16-pasta/6-heat-the-oil.png',
      '/assets/COOKING PART/16-pasta/7-saute-the-garlic.png',
      '/assets/COOKING PART/16-pasta/8-add-the-onion.png',
      '/assets/COOKING PART/16-pasta/9-add-the-ground-meat.png',
      '/assets/COOKING PART/16-pasta/10-pour-the-spaghetti-sauce.png'
    ],
    done: '/assets/COOKING PART/16-pasta/13-combine-the-sauce-to-the-pasta.png'
  },
  17: { // King Ranch
    steps: ["Cooking oil", "Onion", "Cream of mushroom soup", "Corn tortillas", "Chicken", "Cheese"],
    images: [
      '/assets/COOKING PART/17-king-ranch-chicken/1-heat-the-oil.png',
      '/assets/COOKING PART/17-king-ranch-chicken/2-cook-the-onion&bell-pepper.png',
      '/assets/COOKING PART/17-king-ranch-chicken/3-make-the-sauce.png',
      '/assets/COOKING PART/17-king-ranch-chicken/4-place-the-tortilla.png',
      '/assets/COOKING PART/17-king-ranch-chicken/5-add-chicken-mixture.png',
      '/assets/COOKING PART/17-king-ranch-chicken/6-sprinkle-cheese-on-top.png'
    ],
    done: '/assets/COOKING PART/17-king-ranch-chicken/serve.png',
    burnt: '/assets/COOKING PART/17-king-ranch-chicken/serve-burn-version.png'
  },
  18: { // Beef Morcon
    steps: ["Beef", "Carrot", "Hotdog", "Pickle", "Egg", "Cooking oil"],
    images: [
      '/assets/COOKING PART/18-beef-morcon/1-beef.png',
      '/assets/COOKING PART/18-beef-morcon/3-add-carrot-strips.png',
      '/assets/COOKING PART/18-beef-morcon/4-add-hotdogs.png',
      '/assets/COOKING PART/18-beef-morcon/5-add-pickle-relish.png',
      '/assets/COOKING PART/18-beef-morcon/6-add-sliced-egg.png',
      '/assets/COOKING PART/18-beef-morcon/8-heat-the-oil.png'
    ],
    done: '/assets/COOKING PART/18-beef-morcon/16-serve.png',
    burnt: '/assets/COOKING PART/18-beef-morcon/burn-version.png'
  }
};

let recipesContent = fs.readFileSync(recipesFilePath, 'utf8');

// Inject chronologicalSteps into recipes.ts
for (const [id, data] of Object.entries(RECIPE_STEPS)) {
  const regex = new RegExp(`("id":\\s*${id},[\\s\\S]*?"chronologicalIngredients":\\s*\\[[\\s\\S]*?\\])`);
  
  if (recipesContent.match(regex)) {
    const stepsStr = JSON.stringify(data.steps, null, 6).replace(/\]$/, '    ]');
    recipesContent = recipesContent.replace(regex, `$1,\n    "chronologicalSteps": ${stepsStr}`);
  } else {
    // For recipes without chronologicalIngredients, insert after tools
    const regex2 = new RegExp(`("id":\\s*${id},[\\s\\S]*?"tools":\\s*\\[[\\s\\S]*?\\])`);
    const stepsStr = JSON.stringify(data.steps, null, 6).replace(/\]$/, '    ]');
    recipesContent = recipesContent.replace(regex2, `$1,\n    "chronologicalSteps": ${stepsStr}`);
  }
}
fs.writeFileSync(recipesFilePath, recipesContent, 'utf8');

// Generate new cookingStepImages.ts
let stepImagesCode = `export interface CookingStepImageSet {
  steps: string[]
  done?: string
  burnt?: string
}

export const COOKING_STEP_IMAGES: Record<number, CookingStepImageSet> = {
`;

for (let i = 1; i <= 19; i++) {
  if (RECIPE_STEPS[i]) {
    stepImagesCode += `  ${i}: {
    steps: [\n${RECIPE_STEPS[i].images.map(img => `      '${img}'`).join(',\n')}
    ]`;
    if (RECIPE_STEPS[i].done) stepImagesCode += `,\n    done: '${RECIPE_STEPS[i].done}'`;
    if (RECIPE_STEPS[i].burnt) stepImagesCode += `,\n    burnt: '${RECIPE_STEPS[i].burnt}'`;
    stepImagesCode += `\n  },\n`;
  } else {
    stepImagesCode += `  ${i}: { steps: [] },\n`;
  }
}
stepImagesCode += `}\n`;

fs.writeFileSync(tsFilePath, stepImagesCode, 'utf8');
console.log('Successfully updated recipes.ts and cookingStepImages.ts');
