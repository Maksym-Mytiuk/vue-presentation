import Vue from 'vue'
import Router from 'vue-router'

import Home from './../slides/home'
import DisplayGrid from './../slides/display-grid'
import GridTemplate from '../slides/grid-template'
import GridTemplateShort from '../slides/grid-template-short'
import GridGap from './../slides/grid-gap'
import GridTemplateAreas from './../slides/grid-template-areas'
import GridBoxAligment from './../slides/grid-box-alignment'
import GridBoxAligment2 from './../slides/grid-box-alignment-2'
import GridTrack from './../slides/grid-track'
import GridStartEnd from './../slides/start-end'
import GridRowColumns from './../slides/rows-columns'
import GridArea from './../slides/grid-area'
import GridArea2 from './../slides/grid-area-2'
import GridZindex from './../slides/grid-zindex'
import GridAutoFlow from './../slides/grid-auto-flow'
import GridPeriodTable from './../slides/grid-period-table'
import GridBlocks from './../slides/grid-blocks'
import GridBlocks2 from './../slides/grid-blocks-2'
import Usage from './../slides/usage'
import Finish from './../slides/finish'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/display-grid', name: 'display-grid', component: DisplayGrid},
    {path: '/grid-template', name: 'grid-template', component: GridTemplate},
    {path: '/grid-template-short', name: 'grid-template-short', component: GridTemplateShort},
    {path: '/grid-gap', name: 'grid-gap', component: GridGap},
    {path: '/grid-template-areas', name: 'grid-template-areas', component: GridTemplateAreas},
    {path: '/grid-box-alignment', name: 'grid-box-alignment', component: GridBoxAligment},
    {path: '/grid-box-alignment-2', name: 'grid-box-alignment-2', component: GridBoxAligment2},
    {path: '/grid-track', name: 'grid-track', component: GridTrack},
    {path: '/start-end', name: 'start-end', component: GridStartEnd},
    {path: '/rows-columns', name: 'rows-columns', component: GridRowColumns},
    {path: '/grid-area', name: 'grid-area', component: GridArea},
    {path: '/grid-area-2', name: 'grid-area-2', component: GridArea2},
    {path: '/grid-zindex', name: 'grid-zindex', component: GridZindex},
    {path: '/grid-auto-flow', name: 'grid-auto-flow', component: GridAutoFlow},
    {path: '/grid-period-table', name: 'grid-period-table', component: GridPeriodTable},
    {path: '/grid-blocks', name: 'grid-blocks', component: GridBlocks},
    {path: '/grid-blocks-2', name: 'grid-blocks-2', component: GridBlocks2},
    {path: '/usage', name: 'usage', component: Usage},
    {path: '/finish', name: 'finish', component: Finish},
  ]
})
