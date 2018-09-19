import Vue from 'vue'
import Router from 'vue-router'

import Home from './../slides/home'
import VariableFonts from '../slides/variable-fonts'
import UsageVf from '../slides/usage-vf'
import BackDropFilter from '../slides/backdrop-filter'
import UsageBf from '../slides/usage-bf'
import BlendMode from '../slides/blend-mode'
import BlendMode2 from '../slides/blend-mode-2'
import BlendMode3 from '../slides/blend-mode-3'
import UsageBlendMode from '../slides/usage-blend-mode'
import Meter from '../slides/meter'
import Meter2 from '../slides/meter-2'
import UsageMeter from '../slides/usage-meter'
import ConicGradient from '../slides/conic-gradient'
import ConicGradient2 from '../slides/conic-gradient-2'
import UsageCg from '../slides/usage-cg'
import SnapScroll from '../slides/snap-scroll'
import SnapScroll2 from '../slides/snap-scroll2'
import UsageSnapScroll from '../slides/usage-snap-scroll'
import Matches from '../slides/matches'
import UsageMatches from '../slides/usage-matches'
import Valid from '../slides/valid'
import UsageValid from '../slides/usage-valid'
import Finish from '../slides/finish'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/variable-fonts', name: 'variable-fonts', component: VariableFonts},
    {path: '/usage-vf', name: 'usage-vf', component: UsageVf},
    {path: '/backdrop-filter', name: 'backdrop-filter', component: BackDropFilter},
    {path: '/usage-bf', name: 'usage-bf', component: UsageBf},
    {path: '/blend-mode', name: 'blend-mode', component: BlendMode},
    {path: '/blend-mode-2', name: 'blend-mode-2', component: BlendMode2},
    {path: '/blend-mode-3', name: 'blend-mode-3', component: BlendMode3},
    {path: '/usage-blend-mode', name: 'usage-blend-mode', component: UsageBlendMode},
    {path: '/meter', name: '/meter', component: Meter},
    {path: '/meter-2', name: 'meter-2', component: Meter2},
    {path: '/usage-meter', name: 'usage-blend-mode', component: UsageMeter},
    {path: '/conic-gradient', name: 'conic-gradient', component: ConicGradient},
    {path: '/conic-gradient-2', name: 'conic-gradient', component: ConicGradient2},
    {path: '/usage-cg', name: 'usage-cg', component: UsageCg},
    {path: '/snap-scroll', name: 'snap-scroll', component: SnapScroll},
    {path: '/snap-scroll2', name: 'snap-scroll2', component: SnapScroll2},
    {path: '/usage-snap-scroll', name: 'usage-snap-scroll', component: UsageSnapScroll},
    {path: '/matches', name: 'matches', component: Matches},
    {path: '/usage-matches', name: 'usage-matches', component: UsageMatches},
    {path: '/valid', name: 'valid', component: Valid},
    {path: '/usage-valid', name: 'usage-valid', component: UsageValid},
    {path: '/finish', name: 'finish', component: Finish},
  ]
})
