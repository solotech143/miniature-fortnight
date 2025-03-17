import { proxy } from 'valtio'

import classic from './assets/img/joyplot-classic.png'
import classicThumb from './assets/img/thumbs/classic_thumb.png'
import unknownPleasures from './assets/img/original_joyplot.jpg'
import classicDistribution from './assets/img/joyplot-classic_distribution.png'
import occitania from './assets/img/occitania.png'
import occitaniaThumb from './assets/img/thumbs/occitania_thumb.png'
import multiColor from './assets/img/excess.png'
import multiColorThumb from './assets/img/thumbs/gamut.png'
import multiColorCalm from './assets/img/calm.png'
import extreme from './assets/img/extreme_years.png'

const state = proxy({
  intro: true,
  decals: [
    {
      full: classic,
      thumb: classicThumb,
      legend: "Vous avez dit JoyPlot ? Plus connu sous le nom de ridgelines, il s'agit de tracés linéaires combinés par empilement vertical pour permettre de visualiser facilement les changements dans l'espace ou le temps. Les tracés sont légèrement superposés pour permettre de mieux mettre en contraste les changements. Le JoyPlot originel est un graphique conçu par Harold Craft pour visualiser les ondes radios émises par un pulsar et qui illustre l'album Unknown Pleasures du groupe Joy Division. Le concept a ensuite été popularisé par Claus Wilke. Le premier graphique représente les niveaux d'eau quotidiens maximaux de la Garonne pour la période 1857-2024. Chaque ligne représente une année, les plus récentes se situant en haut. Le troisième graphique est une variation qui ressemble plus à la couverture de l'album. Il représente la distribution des hauteurs quotidiennes maximales.",
      slides: [classic, unknownPleasures, classicDistribution]
    },
    {
      full: occitania,
      thumb: occitaniaThumb,
      legend: "À première vue, les JoyPlot conçus peuvent sembler brouillons. Mais en fait, ils sont pleins d'informations intéressantes, il suffit de les mettre en avant. De 1857 à 2024, il y a eu 9 crues à Toulouse, certaines ont été vraiment dévastatrices, comme celle de 1875 qui a ravagé Saint-Cyprien, ou celle de 2000 qui a causé des dégâts importants. Cette variation du JoyPlot précédent met en avant les 9 crues historiques."
    },
    {
      full: multiColor,
      thumb: multiColorThumb,
      legend: "Les neuf crues que la Garonne a connues ne sont pas égales. Le premier graphique permet de les envisager en attribuant un code couleur en fonction de niveau d'eau maximal mesuré. Plus la couleur est foncée, plus la crue a été importante. Le même travail a été fait avec le graphique suivant pour les années les plus calmes, qui seront elles aussi plus foncées (mais en bleu). Quant au dernier graphique, il permet de confronter les deux années les plus à l’opposé du dataset fourni.",
      buttonLink: '/src/cinema/index.html',
      slides: [multiColor, multiColorCalm, extreme]
    }
  ],
  color: '#80C670',
  decal: classic,
  selectedDecal: null,
  product: 'shirt',
  //cinemaMode: false // New property to toggle cinema mode (when implemented).
})

export { state }