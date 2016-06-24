import {mountToDomSync} from 'vidom';
import {Main} from './ui/main';

uibench.init('Vidom', '0.3.3');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');

  uibench.run(
      function(state) {
        mountToDomSync(container, <Main data={state}/>);
      },
      function(samples) {
        mountToDomSync(container, <pre>{JSON.stringify(samples, null, ' ')}</pre>);
      }
  );
});
