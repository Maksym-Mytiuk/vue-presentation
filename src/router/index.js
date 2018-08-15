import Vue from 'vue'
import Router from 'vue-router'

import Home from './../slides/home'
import VariableFonts from '../slides/variable-fonts'
import UsageVf from '../slides/usage-vf'
import BlendMode from '../slides/blend-mode'
import BlendMode2 from '../slides/blend-mode-2'
import BlendMode3 from '../slides/blend-mode-3'
import UsageBlendMode from '../slides/usage-blend-mode'
import GridTemplateShort from '../slides/grid-template-short'
import GridGap from './../slides/grid-gap'
import GridTemplateAreas from './../slides/grid-template-areas'
import GridBoxAligment from './../slides/grid-box-alignment'
import GridTrack from './../slides/grid-track'
import GridStartEnd from './../slides/start-end'
import GridRowColumns from './../slides/rows-columns'
import GridArea from './../slides/grid-area'
import GridAutoFlow from './../slides/grid-auto-flow'
import Usage from './../slides/usage'
import Finish from './../slides/finish'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/variable-fonts', name: 'variable-fonts', component: VariableFonts},
    {path: '/usage-vf', name: 'usage-vf', component: UsageVf},
    {path: '/blend-mode', name: 'blend-mode', component: BlendMode},
    {path: '/blend-mode-2', name: 'blend-mode-2', component: BlendMode2},
    {path: '/blend-mode-3', name: 'blend-mode-3', component: BlendMode3},
    {path: '/usage-blend-mode', name: 'usage-blend-mode', component: UsageBlendMode},
    {path: '/grid-template-short', name: 'grid-template-short', component: GridTemplateShort},
    {path: '/grid-gap', name: 'grid-gap', component: GridGap},
    {path: '/grid-template-areas', name: 'grid-template-areas', component: GridTemplateAreas},
    {path: '/grid-box-alignment', name: 'grid-box-alignment', component: GridBoxAligment},
    {path: '/grid-track', name: 'grid-track', component: GridTrack},
    {path: '/start-end', name: 'start-end', component: GridStartEnd},
    {path: '/rows-columns', name: 'rows-columns', component: GridRowColumns},
    {path: '/grid-area', name: 'grid-area', component: GridArea},
    {path: '/grid-auto-flow', name: 'grid-auto-flow', component: GridAutoFlow},
    {path: '/usage', name: 'usage', component: Usage},
    {path: '/finish', name: 'grid-auto-flow', component: Finish},
  ]
})
