# Mixed Messages Plan

## Come Up with a Topic
* Random sentence generator based on a variety of sentence structures utilising noun, verb etc layouts.
    * Initially use a small collection of words to prove concept then expand wordset to allow for variety.

## Plan your project
* Project will be build in [node.js](https://nodejs.org/en/)
* It will run on the command line with no user input initially.
* It will use repositories of verbs, nouns, adjectives etc to create sentences against a pre-defined construction criteria.
    * Maybe use multiple options of sentence construction for variety.

## Steps required (no particular order at this time)
* Create collections of types of words based off CSV files.
    * **KEEP INITIAL LIST SMALL AND MANAGEABLE. ONLY SCALE ONCE MODEL IS WORKING**
    * Download for files is https://www.wordexample.com/list/most-common-adjectives-english
    * ***adjectives*** in link above can be changes for verbs, nouns etc
* Create standard sentence format
    * Use random number generator (RNG) to pick this template in script.
    * This can be an object.
* Use RNG to pick relevant words for sentences.
* Output to screen