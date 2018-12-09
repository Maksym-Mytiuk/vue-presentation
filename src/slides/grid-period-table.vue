<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-auto-flow">Go to auto-flow</router-link>
      <router-link to="/grid-blocks">Go to example 2</router-link>

    </p>
    <div class="info">
      <h1>Grid Auto Flow</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 18">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.grid-container</span> {
  grid-auto-flow: <textarea v-model="gridAutoFLow"></textarea>
}

<span>.grid-item:nth-of-type(2n + 4)</span> {
    grid-column:<textarea v-model="columnProp"></textarea>
}
<span>.grid-item:nth-of-type(2n + 6)</span> {
    grid-row:<textarea v-model="rowProp"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <ol class="periodic"><li class="element">H</li><li class="element">He</li><li class="element">Li</li><li class="element">Be</li><li class="element">B</li><li class="element">C</li><li class="element">N</li><li class="element">O</li><li class="element">F</li><li class="element">Ne</li><li class="element">Na</li><li class="element">Mg</li><li class="element">Al</li><li class="element">Si</li><li class="element">P</li><li class="element">S</li><li class="element">Cl</li><li class="element">Ar</li><li class="element">K</li><li class="element">Ca</li><li class="element">Sc</li><li class="element">Ti</li><li class="element">V</li><li class="element">Cr</li><li class="element">Mn</li><li class="element">Fe</li><li class="element">Co</li><li class="element">Ni</li><li class="element">Cu</li><li class="element">Zn</li><li class="element">Ga</li><li class="element">Ge</li><li class="element">As</li><li class="element">Se</li><li class="element">Br</li><li class="element">Kr</li><li class="element">Rb</li><li class="element">Sr</li><li class="element">Y</li><li class="element">Zr</li><li class="element">Nb</li><li class="element">Mo</li><li class="element">Tc</li><li class="element">Ru</li><li class="element">Rh</li><li class="element">Pd</li><li class="element">Ag</li><li class="element">Cd</li><li class="element">In</li><li class="element">Sn</li><li class="element">Sb</li><li class="element">Te</li><li class="element">I</li><li class="element">Xe</li><li class="element">Cs</li><li class="element">Ba</li><li class="element">La</li><li class="element">Ce</li><li class="element">Pr</li><li class="element">Nd</li><li class="element">Pm</li><li class="element">Sm</li><li class="element">Eu</li><li class="element">Gd</li><li class="element">Tb</li><li class="element">Dy</li><li class="element">Ho</li><li class="element">Er</li><li class="element">Tm</li><li class="element">Yb</li><li class="element">Lu</li><li class="element">Hf</li><li class="element">Ta</li><li class="element">W</li><li class="element">Re</li><li class="element">Os</li><li class="element">Ir</li><li class="element">Pt</li><li class="element">Au</li><li class="element">Hg</li><li class="element">Tl</li><li class="element">Pb</li><li class="element">Bi</li><li class="element">Po</li><li class="element">At</li><li class="element">Rn</li><li class="element">Fr</li><li class="element">Ra</li><li class="element">Ac</li><li class="element">Th</li><li class="element">Pa</li><li class="element">U</li><li class="element">Np</li><li class="element">Pu</li><li class="element">Am</li><li class="element">Cm</li><li class="element">Bk</li><li class="element">Cf</li><li class="element">Es</li><li class="element">Fm</li><li class="element">Md</li><li class="element">No</li><li class="element">Lr</li><li class="element">Rf</li><li class="element">Db</li><li class="element">Sg</li><li class="element">Bh</li><li class="element">Hs</li><li class="element">Mt</li><li class="element">Ds</li><li class="element">Rg</li><li class="element">Cn</li><li class="element">Nh</li><li class="element">Fl</li><li class="element">Mc</li><li class="element">Lv</li><li class="element">Ts</li><li class="element">Og</li></ol>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '25px',
        gridAutoFLow: 'row',
        columnProp: '',
        rowProp: ''
      }
    }
  }
</script>

<style scoped>
  .styles {
    margin-top: 4em;
  }
  .periodic {
    column-width: 3.5em;
    padding: 0;
    list-style: decimal;
  }

  .element {
    margin-left: 2.5em;
  }
  @media (min-width: 300px) {

    .periodic {
      column-count: auto;
      display: grid;
      grid-template-columns: repeat(32, 1fr);
      grid-auto-rows: 1fr;
      padding: 0;
      list-style: none;
      --lanthan-label-row: 8;
      --lanthan-row: 9;
      --actin-label-row: 10;
      --actin-row: 11;
    }

    .element {
      border: 1px solid #ccc;
      margin: 0 -1px -1px 0;
      text-align: right;
      line-height: 1;
      counter-increment: el;
      padding: .2em;
    }

    .element::before {
      content: counter(el);
      font-size: calc(1em - .3vw);
      text-align: left;
      display: block;
      color: #888;
    }

    /* благородные газы всегда в последней колонке */
    .element:nth-child(2) {
      grid-column: -2;
    }

    /* элементы третьей группы (5 и 13) всегда в 6-й с конца колонке */
    .element:nth-child(-8n + 13) {
      grid-column: -7;
    }

    /* титан и цирконий (а потом гафний, и резерфордий) — 15-е с конца  */
    /* можно было бы записать как (-18n + 40), но пришлось бы отдельно исключать элемент 4 */
    .element:nth-child(22),
    .element:nth-child(40) {
      grid-column: -16;
    }

    /* выделим лантаноиды и актиноиды */
    .element:nth-child(n + 57):nth-child(-n + 71) { background-color: pink; }
    .element:nth-child(n + 89):nth-child(-n + 103) { background-color: yellow; }

  }
  @media (min-width: 300px) and (max-width: 1300px), (min-width: 300px) and (max-aspect-ratio: 2/1)  {
    .periodic {
      grid-template-columns: repeat(18, 1fr);
    }

    /* Лантаноиды */
    .element:nth-child(n + 58):nth-child(-n + 71) {
      grid-row: var(--lanthan-row);
    }
    .periodic::before {
      content: 'Лантаноиды';
      grid-row: var(--lanthan-label-row);
      grid-column: 1/-1;
      align-self: end;
    }

    /* Актиноиды */
    .element:nth-child(n + 90):nth-child(-n + 103) {
      grid-row: var(--actin-row);
    }
    .periodic::after {
      content: 'Актиноиды';
      grid-row: var(--actin-label-row);
      grid-column: 1/-1;
      align-self: end;
    }

  }

  @media (max-width: 600px) {
    .periodic {
      grid-template-columns: repeat(8, 1fr);
      grid-auto-columns: 1fr;
      --lanthan-label-row: 12;
      --lanthan-row: 13;
      --actin-label-row: 15;
      --actin-row: 16;
    }

    /* 15-й колонки с конца тут нет */
    .element:nth-child(22),
    .element:nth-child(40) {
      grid-column: auto;
    }

    /* ставим в 1 колонку все элементы 1 группы по старой классификации
       (главной и побочной подгрупп) */
    .element:nth-child(3),
    .element:nth-child(-18n + 29), /* элементы 11 и 29 */
    .element:nth-child(-18n + 37), /* элементы 19, 37 и 1 (не помешает:) */
    .element:nth-child(32n + 47),  /* элементы 47, 79 и 111 */
    .element:nth-child(32n + 55) { /* элементы 55, 87 и еще не открытый 119 */
      grid-column: 1;
    }

    /* добавочные колонки для «не поместившихся» металлов (магия!) */
    .periodic::before,
    .periodic::after {
      grid-column-end: 11;
    }

    .element:nth-child(n + 65):nth-child(-n + 71) {
      grid-row: 14;
    }

    .element:nth-child(n + 97):nth-child(-n + 103) {
      grid-row: 17;
    }

  }
</style>
