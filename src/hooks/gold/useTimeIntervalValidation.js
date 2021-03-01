/**
 * API gives us a day limit for time interval
 * (We can't overrun 367 days) so this hook
 * make for us limits for date inputs
 **/
export default function useTimeIntervalValidation() {
    const minDate = new Date();
    const maxDate = new Date();

    minDate.setDate(minDate.getDate() - 367);
    maxDate.setDate(maxDate.getDate());

    const minDateFormatted = minDate.toISOString().split('T')[0];
    const maxDateFormatted = maxDate.toISOString().split('T')[0];

    return [minDateFormatted, maxDateFormatted]
}
