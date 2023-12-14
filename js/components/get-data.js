export const customerLocation = async () => {
    const data = await fetch('/browsing_context_suggestions.json');
    const {detected_values:{country:{handle} = {}} = {}} = await data.json();
    return handle;
}