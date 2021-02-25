export default function useIsObjectEmpty(object) {
    return Object.entries(object).length !== 0;
}
