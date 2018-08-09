import Vue from 'vue'
import Router from 'vue-router'

import Home from './../slides/home'
import VariableFonts from '../slides/variable-fonts'
import GridTemplate from '../slides/grid-template'
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
    {path: '/grid-template', name: 'grid-template', component: GridTemplate},
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
