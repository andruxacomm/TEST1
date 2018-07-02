'use strict';

import polyfills from './libraries/polyfills';
import progress from 'components/Progress/Progress';
import popup from 'components/popup/popup';
import Hero from 'components/Hero/Hero';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    progress();
    popup();
    Hero();
});
