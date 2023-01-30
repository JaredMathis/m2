export function property_initialize(object, property_name, value_if_property_not_exists) {
    if (object.hasOwnProperty(property_name)) {
        return;
    }
    object[property_name] = value_if_property_not_exists;
}