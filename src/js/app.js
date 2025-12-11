import ready, { HTML } from 'Utils';
import flatpickr from 'flatpickr';
import initViewToggle from './components/viewToggle';

ready(() => {
  HTML.classList.add('is-loaded');
  initViewToggle('.view-toggle__btn', '.posts-holder');

  const highlightedDates = ['2025-12-04', '2025-12-18', '2025-12-25', '2026-01-01'];

  const datepickerOptions = {
    wrap: true,
    dateFormat: 'd-m-Y',
    allowInput: true,
    disableMobile: true,

    onDayCreate(_, __, ___, dayElem) {
      const d = dayElem.dateObj;

      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');

      const date = `${year}-${month}-${day}`;

      if (highlightedDates.includes(date)) {
        dayElem.classList.add('has-event');
      }
    },
  };

  flatpickr('#date-from-wrapper', datepickerOptions);
  flatpickr('#date-to-wrapper', datepickerOptions);
});
