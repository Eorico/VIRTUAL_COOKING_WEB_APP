export interface CookingStepImageSet {
  steps: string[]
  done?: string
  burnt?: string
}

export const COOKING_STEP_IMAGES: Record<number, CookingStepImageSet> = {
  1: {
    steps: [
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
  2: {
    steps: [
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
  3: {
    steps: [
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
  4: {
    steps: [
      '/assets/COOKING PART/4-hollandaise/step-1.png',
      '/assets/COOKING PART/4-hollandaise/step-1.png',
      '/assets/COOKING PART/4-hollandaise/step-2.png',
      '/assets/COOKING PART/4-hollandaise/step-3.png',
      '/assets/COOKING PART/4-hollandaise/step-4.png'
    ],
    done: '/assets/COOKING PART/4-hollandaise/step-5.png'
  },
  5: {
    steps: [
      '/assets/COOKING PART/6-chicken-noodle-soup/1-add-cooking-oil.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/2-add-onion.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/3-add-celery.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/4-add-garlic.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/5-add-chicken-pieces.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/6-pour-the-chicken-broth.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/8-add-sliced-carrot.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/9-stir-in-the-egg-noodles.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/9-stir-in-the-egg-noodles.png',
      '/assets/COOKING PART/6-chicken-noodle-soup/9-stir-in-the-egg-noodles.png'
    ],
    done: '/assets/COOKING PART/6-chicken-noodle-soup/7-ladle.png',
    burnt: '/assets/COOKING PART/6-chicken-noodle-soup/10-overcooked.png'
  },
  6: { steps: [] },
  7: {
    steps: [
      '/assets/COOKING PART/5-tomato-soup/Step 1_ Prepare the ingredients_.png',
      '/assets/COOKING PART/5-tomato-soup/Step 2  Add cooking oil (2).png',
      '/assets/COOKING PART/5-tomato-soup/Step 3_ Sauté the vegetables_.png',
      '/assets/COOKING PART/5-tomato-soup/Step 4_ Cook the tomatoes_.png',
      '/assets/COOKING PART/5-tomato-soup/Step 5_ Add broth. And Simmer_.png',
      '/assets/COOKING PART/5-tomato-soup/Step 6_ Blend until smooth_.png'
    ],
    done: '/assets/COOKING PART/5-tomato-soup/Step 7 serve it_.png'
  },
  8: {
    steps: [
      '/assets/COOKING PART/7-corn-chowder-soup/Step_1 Prepare the Ingredients.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step_2 Saute the onion with melt butter_.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step 3-add potatoes and corn.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step4- pour in broth.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step5- Simmer until tender_.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step 6- create a creamy texture_.png',
      '/assets/COOKING PART/7-corn-chowder-soup/Step 7 -Add Milk and season.png'
    ],
    done: '/assets/COOKING PART/7-corn-chowder-soup/Step 8 serve it_.png',
    burnt: '/assets/COOKING PART/7-corn-chowder-soup/Burn pan version.png'
  },
  9: {
    steps: [
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
  10: {
    steps: [
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
  11: {
    steps: [
      '/assets/COOKING PART/11-pakbet/step-2-1.png',
      '/assets/COOKING PART/11-pakbet/step-3-1.png',
      '/assets/COOKING PART/11-pakbet/step-4-1.png'
    ]
  },
  12: { steps: [] },
  13: {
    steps: [
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
  14: {
    steps: [
      '/assets/COOKING PART/14-bulalo/step2.png',
      '/assets/COOKING PART/14-bulalo/step3.png',
      '/assets/COOKING PART/14-bulalo/step4.png',
      '/assets/COOKING PART/14-bulalo/step5.png',
      '/assets/COOKING PART/14-bulalo/step5.png',
      '/assets/COOKING PART/14-bulalo/step5.png'
    ],
    done: '/assets/COOKING PART/14-bulalo/step6.png'
  },
  15: {
    steps: [
      '/assets/COOKING PART/12-kare-kare/Step 1_ Prepare the ingredients_.png',
      '/assets/COOKING PART/12-kare-kare/Step 2_ Boil the beef_.png',
      '/assets/COOKING PART/12-kare-kare/Step 3_ Tenderize the meat_.png',
      '/assets/COOKING PART/12-kare-kare/Step 4_ Prepare the sauce base_.png',
      '/assets/COOKING PART/12-kare-kare/Step 5_ Add the vegetables_.png',
      '/assets/COOKING PART/12-kare-kare/Step 6_ Add the leafy vegetables_.png',
      '/assets/COOKING PART/12-kare-kare/Step 7_ Season and finish_.png'
    ],
    done: '/assets/COOKING PART/12-kare-kare/Step 8 serve it_.png',
    burnt: '/assets/COOKING PART/12-kare-kare/burn pan version.png'
  },
  16: {
    steps: [
      '/assets/COOKING PART/16-pasta/2-boil-the-water.png',
      '/assets/COOKING PART/16-pasta/3-add-the-pasta.png',
      '/assets/COOKING PART/16-pasta/5-prepare-the-frying-pan.png',
      '/assets/COOKING PART/16-pasta/6-heat-the-oil.png',
      '/assets/COOKING PART/16-pasta/7-saute-the-garlic.png',
      '/assets/COOKING PART/16-pasta/8-add-the-onion.png',
      '/assets/COOKING PART/16-pasta/9-add-the-ground-meat.png',
      '/assets/COOKING PART/16-pasta/10-pour-the-spaghetti-sauce.png',
      '/assets/COOKING PART/16-pasta/11-seasons-with-salt-and-pepper.png'
    ],
    done: '/assets/COOKING PART/16-pasta/13-combine-the-sauce-to-the-pasta.png'
  },
  17: {
    steps: [
      '/assets/COOKING PART/19-pork-afritada/2. add oil.png',
      '/assets/COOKING PART/19-pork-afritada/3. add garlic_.png',
      '/assets/COOKING PART/19-pork-afritada/4. add onion_.png',
      '/assets/COOKING PART/19-pork-afritada/5. add pork.png',
      '/assets/COOKING PART/19-pork-afritada/6. cook the pork.png',
      '/assets/COOKING PART/19-pork-afritada/7. add tomato sauce_.png',
      '/assets/COOKING PART/19-pork-afritada/8. add water.png',
      '/assets/COOKING PART/19-pork-afritada/9.  haluin.png',
      '/assets/COOKING PART/19-pork-afritada/10 cover.png',
      '/assets/COOKING PART/19-pork-afritada/11 add potato and carrots ( dont appear until both ingredients are put).png',
      '/assets/COOKING PART/19-pork-afritada/12. add bell peppers_.png',
      '/assets/COOKING PART/19-pork-afritada/13. add salt.png',
      '/assets/COOKING PART/19-pork-afritada/14. add black pepper_.png'
    ],
    done: '/assets/COOKING PART/19-pork-afritada/15. Good Cooking_.png',
    burnt: '/assets/COOKING PART/19-pork-afritada/16. Burnt cooking_.png'
  },
  18: {
    steps: [
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/2-prepare-the-beef.png',
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/3-add-carrot-strips.png',
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/4-add-hotdogs.png',
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/5-add-pickle-relish.png',
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/6-add-sliced-egg.png',
      '/assets/COOKING PART/18-beef-morcon/beef-morcon/7-roll-and-secure.png'
    ],
    done: '/assets/COOKING PART/18-beef-morcon/beef-morcon/16-serve.png',
    burnt: '/assets/COOKING PART/18-beef-morcon/beef-morcon/burn-version.png'
  },
  19: { steps: [] },
}
