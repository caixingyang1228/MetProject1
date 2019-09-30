**Research Topic**
From the birth of the concept of a nation-state to the end of World War I, the ontology/symbol of painting attention has changed with each trend of thought.

**Get Data**
 1. Setup research field
 - European oil painting
 - Timeline
 1200 to 1492
1492 Age of Discovery
1517 Protestant Reformation
1760 the Age of Machines
1789 French Revolution
1859 "On the Origin of Species by Means of Natural Selection"
1919 WordWar I End

2. Crawl data by [Met Api](https://metmuseum.github.io/)
3. Structure the data
    1. According to the (time->tag number) classification, calculate the frequency of each tag, from high to low.
    2. Cleaning the “noise” tags (such as men/women) that appear in almost every painting. Basic classification of the these tags, such as religious related/industrial related/daily. Twenty-two tags with high frequency and no duplication of meaning were selected to form a tag pool.
    3. Try to eliminate the influence of the uneven number of collections in each stage of the Metropolis, using the formula ( single tag frequency /the total number of tags in the time period of the tag pool).

Selected tags
*Angels
*Animals
*Boats
*Buildings
*Children
*Christ
*Cows
*Crucifixion
*Dogs
*Female Nudes
*Flowers
*Girls
*Gardens
*Horse Riding
*Madonna and Child
*Rivers
*Interiors
*Landscapes
*Orientalist
*Saints
*Still Life
*Working

(Because the purpose of this study is to let people see the change of painting reference objects through the history, the choice of tags does not completely follow the frequency ranking, but to select those representative symbols that appear at high frequencies.)

**Visualization**
Using Ranking Plot as the base for design, the concept of percentage and timeline is added to present more information dimensions. The classification of the color range by tags increases the readability of the research results.

**Results**
The study found that with the influence of each trend of thought, the symbols and subjects in the painting will change significantly. However, it is difficult to get detailed results because Met Api's tag markup is too general.