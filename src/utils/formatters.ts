export const formatPrice = (value: number | undefined): string | undefined => {
    return value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}