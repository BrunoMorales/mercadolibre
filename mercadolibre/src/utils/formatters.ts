export const formatPrice = (value: number | undefined): string | undefined => {
    //This could be done in back end
    return value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}